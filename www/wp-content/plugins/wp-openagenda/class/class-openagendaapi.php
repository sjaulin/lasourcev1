<?php

/**
 * Set of methods to retrieve data from OpenAgenda
 *
 * @author  : sebastienserre
 * @package Openagenda-api
 * @since   1.0.0
 */
if ( !defined( 'ABSPATH' ) ) {
    exit;
}
// Exit if accessed directly.
/**
 * Retrieve Event data from OpenAgenda.com
 *
 * @package: Openagenda-api.
 */
class OpenAgendaApi
{
    /**
     * OpenAgendaApi constructor
     *
     * @since 1.0.0
     */
    public function __construct()
    {
        add_action( 'admin_init', array( $this, 'thfo_openwp_retrieve_data' ) );
    }
    
    /**
     * Get API stored in Options
     *
     * @return mixed
     * @since 1.0.0
     */
    public function thfo_openwp_get_api_key()
    {
        $key = get_option( 'openagenda_api' );
        return $key;
    }
    
    /**
     * Get Slug from an URL.
     *
     * @param string $slug URL of openagenda.com Agenda.
     *
     * @return string
     */
    public function openwp_get_slug( $slug )
    {
        $re = '/[a-zA-Z\\.\\/:]*\\/([a-zA-Z\\.\\/:\\0-_9]*)/';
        preg_match(
            $re,
            $slug,
            $matches,
            PREG_OFFSET_CAPTURE,
            0
        );
        $slug = untrailingslashit( $matches[1][0] );
        return $slug;
    }
    
    /**
     * Retrieve data from Openagenda
     *
     * @param string $slug Slug of your agenda.
     * @param int    $nb   Number of event to retrieve. Default 10.
     *
     * @return array|mixed|object|string
     */
    public function thfo_openwp_retrieve_data( $url, $nb = 10 )
    {
        if ( empty($url) ) {
            return '<p>' . __( 'You forgot to add an agenda\'s url to retrieve', 'wp-openagenda' ) . '</p>';
        }
        if ( empty($nb) ) {
            $nb = 10;
        }
        $key = $this->thfo_openwp_get_api_key();
        $uid = $this->openwp_get_uid( $url );
        
        if ( $uid ) {
            $url = 'https://openagenda.com/agendas/' . $uid . '/events.json?key=' . $key . '&limit=' . $nb;
            $response = wp_remote_get( $url );
            $decoded_body = array();
            
            if ( 200 === (int) wp_remote_retrieve_response_code( $response ) ) {
                $body = wp_remote_retrieve_body( $response );
                $decoded_body = json_decode( $body, true );
            } else {
                $decoded_body = '<p>' . __( 'Impossible to retrieve Events Data', 'wp-openagenda' ) . '</p>';
            }
        
        } else {
            $decoded_body = '<p>' . __( 'Impossible to retrieve Events Data', 'wp-openagenda' ) . '</p>';
        }
        
        return $decoded_body;
    }
    
    /**
     * Retrieve OpenAenda UID.
     *
     * @param mixed|string $slug OpenAgenda Agenda URL.
     *
     * @return mixed
     */
    public function openwp_get_uid( $slug )
    {
        $slug = $this->openwp_get_slug( $slug );
        
        if ( !empty($this->thfo_openwp_get_api_key()) ) {
            $key = $this->thfo_openwp_get_api_key();
            $response = wp_remote_get( 'https://api.openagenda.com/v1/agendas/uid/' . $slug . '?key=' . $key );
            
            if ( 200 === (int) wp_remote_retrieve_response_code( $response ) ) {
                $body = wp_remote_retrieve_body( $response );
                $decoded_body = json_decode( $body, true );
                $uid = $decoded_body['data']['uid'];
            }
        
        }
        
        return $uid;
    }
    
    /**
     * Display a basic WordPress Widget.
     *
     * @param   object $openwp_data Object with OPenagenda Events data.
     * @param   string $lang        Language code to display.
     * @param   string $slug        OpenAgenda Agenda URL.
     */
    public function openwp_basic_html( $openwp_data, $lang, $instance )
    {
        if ( is_array( $instance ) ) {
            $slug = $instance['slug'];
        }
        ?>
		<div class="openwp-events">
			<!-- OpenAgenda for WordPress Plugin downloadable for free on https://wordpress.org/plugins/wp-openagenda/-->
			<?php 
        do_action( 'openwp_before_html' );
        $parsedown = new Parsedown();
        foreach ( $openwp_data['events'] as $events ) {
            ?>
				<div class="openwp-event">
					<a class="openwp-event-link" href="<?php 
            echo  esc_url( $events['canonicalUrl'] ) ;
            ?>"
					   target="_blank">
						<p class="openwp-event-range"><?php 
            echo  esc_attr( $events['range'][$lang] ) ;
            ?></p>
						<?php 
            
            if ( false !== $events['image'] && 'yes' === $instance['img'] ) {
                ?>
							<img class="openwp-event-img" src="<?php 
                echo  esc_attr( $events['image'] ) ;
                ?>">
							<?php 
            }
            
            ?>
						<?php 
            
            if ( 'yes' === $instance['event-title'] ) {
                ?>
							<h3 class="openwp-event-title"><?php 
                echo  esc_attr( $events['title'][$lang] ) ;
                ?></h3>
						<?php 
            }
            
            ?>
						<?php 
            
            if ( 'yes' === $instance['event-description'] ) {
                ?>
						<p class="openwp-event-description"><?php 
                echo  $parsedown->text( esc_textarea( $events['description'][$lang] ) ) ;
                ?></p>
					</a>
					<?php 
            }
            
            ?>

				</div>
				<?php 
        }
        do_action( 'openwp_after_html' );
        // translators: this is a link to add events in Openagenda.com.
        $text = sprintf( wp_kses( __( 'Have an Event to display here? <a href="%s">Add it!</a>', 'wp-openagenda' ), array(
            'a' => array(
            'href' => array(),
        ),
        ) ), esc_url( $slug ) );
        $text = apply_filters( 'openwp_custom_add_event_text', $text );
        echo  $text ;
        ?>
		</div>
		<?php 
    }
    
    /**
     * Retrieved OpenAgenda embed Code
     *
     * @param   int    $uid OpenAgenda ID.
     * @param   string $key OpenAgenda API Key.
     *
     * @return array|WP_Error
     */
    public function openwp_get_embed( $uid, $key )
    {
        $embed = wp_remote_get( 'https://openagenda.com/agendas/' . $uid . '/settings.json?key=' . $key );
        
        if ( 200 === (int) wp_remote_retrieve_response_code( $embed ) ) {
            $body = wp_remote_retrieve_body( $embed );
            $decoded_body = json_decode( $body, true );
        }
        
        
        if ( empty($decoded_body['embeds']) ) {
            $embed = null;
        } else {
            $embed = $decoded_body['embeds'][0];
        }
        
        return $embed;
    }
    
    /**
     * Get OA Agenda slug name
     *
     * @param $uid
     * @param $key
     *
     * @return array
     */
    public function openwp_get_oa_slug( $uid, $key )
    {
        $agenda = wp_remote_get( 'https://openagenda.com/agendas/' . $uid . '/events.json?lang=fr&key=' . $key );
        //$agenda = wp_remote_get( 'https://openagenda.com/agendas/35241188/events.json?lang=fr&key=hd2cmLOQHQgrfJqRTd7qW45TQ43eFVgN' );
        
        if ( 200 === (int) wp_remote_retrieve_response_code( $agenda ) ) {
            $body = wp_remote_retrieve_body( $agenda );
            $decoded_body = json_decode( $body, true );
            foreach ( $decoded_body['events'] as $event ) {
                $slug = $event['origin']['slug'];
                $org = $event['origin']['uid'];
                $slugs[$org] = $slug;
            }
            $slugs = array_unique( $slugs );
        }
        
        return $slugs;
    }

}
new OpenAgendaApi();