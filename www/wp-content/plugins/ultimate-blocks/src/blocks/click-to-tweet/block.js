/**
 * BLOCK: Click-to-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//Import Icon
import icon from './icons/icon';

//  Import CSS.
import './style.scss';
import './editor.scss';
import { string } from 'prop-types';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, PanelColorSettings } = wp.editor;

const { TextControl, RangeControl, PanelBody } = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('ub/click-to-tweet', {
	title: __('Click to Tweet'),
	icon: icon,
	category: 'ultimateblocks',
	keywords: [__('Click to tweet'), __('Twitter'), __('Ultimate Blocks')],
	attributes: {
		ubTweet: {
			type: 'string',
			default: ''
		},
		ubVia: {
			source: 'meta',
			meta: 'ub_ctt_via'
		},
		tweetFontSize: {
			type: 'number',
			default: 20
		},
		tweetColor: {
			type: 'string',
			default: '#444444'
		},
		borderColor: {
			type: 'string',
			default: '#CCCCCC'
		}
	},
	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function(props) {
		const {
			ubTweet,
			ubVia,
			tweetFontSize,
			tweetColor,
			borderColor
		} = props.attributes;

		const { isSelected, setAttributes } = props;

		// Creates a <p class='wp-block-cgb-block-sample-block'></p>.
		return [
			isSelected && (
				<InspectorControls key="inspectors">
					<PanelBody title={__('Click to Tweet Settings')}>
						<TextControl
							label={__('Twitter Username')}
							placeholder="@"
							value={ubVia}
							onChange={value => setAttributes({ ubVia: value })}
						/>
						<RangeControl
							label={__('Font Size')}
							value={tweetFontSize}
							onChange={value =>
								setAttributes({ tweetFontSize: value })
							}
							min={10}
							max={200}
							beforeIcon="editor-textcolor"
							allowReset
						/>
						<PanelColorSettings
							title={__('Color Scheme')}
							initialOpen={false}
							colorSettings={[
								{
									value: tweetColor,
									onChange: colorValue =>
										setAttributes({
											tweetColor: colorValue
										}),
									label: __('Tweet Color')
								},
								{
									value: borderColor,
									onChange: colorValue =>
										setAttributes({
											borderColor: colorValue
										}),
									label: __('Border Color')
								}
							]}
						/>
					</PanelBody>
				</InspectorControls>
			),
			<div className={props.className}>
				<div
					className="ub_click_to_tweet"
					style={{
						borderColor: borderColor
					}}
				>
					<RichText
						style={{
							fontSize: tweetFontSize + 'px',
							color: tweetColor,
							border: 'none'
						}}
						placeholder={__('Add Tweetable Content Here')}
						className="ub_tweet"
						value={ubTweet}
						onChange={value => setAttributes({ ubTweet: value })}
					/>

					<div className="ub_click_tweet">
						<span
							style={{
								display: 'inline-flex'
							}}
						>
							<i />
							{__('Click to Tweet')}
						</span>
					</div>
				</div>
			</div>
		];
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save() {
		return null;
	}
});
