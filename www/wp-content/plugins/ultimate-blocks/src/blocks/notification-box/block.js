/**
 * BLOCK: ultimate-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//Import Icons
import icon from './icons/icon';
import info from './icons/info';
import success from './icons/success';
import warning from './icons/warning';

//Importing Classname
import classnames from 'classnames';

//  Import CSS.
import './style.scss';
import './editor.scss';

import { version_1_1_2, version_1_1_4, version_1_1_5 } from './oldVersions';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const { RichText, BlockControls } = wp.editor;

const { Toolbar, Button, IconButton } = wp.components;

const attributes = {
	ub_notify_info: {
		type: 'array',
		source: 'children',
		selector: '.ub_notify_text'
	},
	ub_selected_notify: {
		type: 'string',
		default: 'ub_notify_info'
	},
	align: {
		type: 'string',
		default: 'left'
	}
};

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
registerBlockType('ub/notification-box', {
	title: __('Notification Box'),
	icon: icon,
	category: 'ultimateblocks',
	keywords: [__('notification'), __('warning info'), __('Ultimate Blocks')],
	attributes,

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit(props) {
		const { isSelected, setAttributes } = props;

		const onChangeNotifyInfo = value => {
			setAttributes({ ub_notify_info: value });
		};

		const infoClassChange = () => {
			setAttributes({ ub_selected_notify: 'ub_notify_info' });
		};

		const successClassChange = () => {
			setAttributes({ ub_selected_notify: 'ub_notify_success' });
		};

		const warningClassChange = () => {
			setAttributes({ ub_selected_notify: 'ub_notify_warning' });
		};

		const { align, ub_selected_notify, ub_notify_info } = props.attributes;

		return [
			isSelected && (
				<BlockControls>
					<Toolbar className="components-toolbar">
						<Button
							className={classnames(
								'components-icon-button',
								'components-toolbar-control'
							)}
							onClick={infoClassChange}
						>
							{info}
						</Button>
						<Button
							className={classnames(
								'components-icon-button',
								'components-toolbar-control'
							)}
							onClick={successClassChange}
						>
							{success}
						</Button>
						<Button
							className={classnames(
								'components-icon-button',
								'components-toolbar-control'
							)}
							onClick={warningClassChange}
						>
							{warning}
						</Button>
					</Toolbar>
					<Toolbar>
						{['left', 'center', 'right', 'justify'].map(a => (
							<IconButton
								icon={`editor-${
									a === 'justify' ? a : 'align' + a
								}`}
								label={__(
									(a !== 'justify' ? 'Align ' : '') +
										a[0].toUpperCase() +
										a.slice(1)
								)}
								isActive={align === a}
								onClick={() => setAttributes({ align: a })}
							/>
						))}
					</Toolbar>
				</BlockControls>
			),

			<div className={props.className}>
				<RichText
					style={{ textAlign: align }}
					tagName="div"
					placeholder={__('Add Your Content Here')}
					formattingControls={[
						'bold',
						'italic',
						'link',
						'strikethrough'
					]}
					className={ub_selected_notify}
					onChange={onChangeNotifyInfo}
					value={ub_notify_info}
					keepPlaceholderOnFocus={true}
				/>
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
	save: function(props) {
		const { align, ub_notify_info, ub_selected_notify } = props.attributes;
		return (
			<div className={props.className}>
				<div className={ub_selected_notify}>
					<RichText.Content
						tagName="p"
						className={'ub_notify_text'}
						style={{ textAlign: align }}
						value={ub_notify_info}
					/>
				</div>
			</div>
		);
	},
	deprecated: [
		{
			attributes,
			save: version_1_1_2
		},
		{
			attributes,
			save: version_1_1_4
		},
		{
			attributes,
			save: version_1_1_5
		}
	]
});
