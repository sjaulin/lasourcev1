/**
 * BLOCK: number-box
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//Import Icon
import icon from './icons/icon';

//  Import CSS.
import './style.scss';
import './editor.scss';
import { version_1_1_2, version_1_1_5 } from './oldVersions';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const {
	InspectorControls,
	PanelColorSettings,
	BlockControls,
	RichText
} = wp.editor;

const { PanelBody, Toolbar, SelectControl, IconButton } = wp.components;

const { withState } = wp.compose;

const attributes = {
	column: {
		type: 'select',
		default: '2'
	},
	columnOneNumber: {
		type: 'array',
		source: 'children',
		selector: '.ub_number_one_number'
	},
	columnTwoNumber: {
		type: 'array',
		source: 'children',
		selector: '.ub_number_two_number'
	},
	columnThreeNumber: {
		type: 'array',
		source: 'children',
		selector: '.ub_number_three_number'
	},
	columnOneTitle: {
		type: 'array',
		source: 'children',
		selector: '.ub_number_one_title'
	},
	columnTwoTitle: {
		type: 'array',
		source: 'children',
		selector: '.ub_number_two_title'
	},
	columnThreeTitle: {
		type: 'array',
		source: 'children',
		selector: '.ub_number_three_title'
	},
	columnOneBody: {
		type: 'array',
		source: 'children',
		selector: '.ub_number_one_body'
	},
	columnTwoBody: {
		type: 'array',
		source: 'children',
		selector: '.ub_number_two_body'
	},
	columnThreeBody: {
		type: 'array',
		source: 'children',
		selector: '.ub_number_three_body'
	},
	numberBackground: {
		type: 'string',
		default: '#CCCCCC'
	},
	numberColor: {
		type: 'string',
		default: '#000000'
	},
	borderColor: {
		type: 'string',
		default: '#CCCCCC'
	},
	title1Align: {
		type: 'string',
		default: 'center'
	},
	title2Align: {
		type: 'string',
		default: 'center'
	},
	title3Align: {
		type: 'string',
		default: 'center'
	},
	body1Align: {
		type: 'string',
		default: 'left'
	},
	body2Align: {
		type: 'string',
		default: 'left'
	},
	body3Align: {
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
registerBlockType('ub/number-box', {
	title: __('Number Box'),
	icon: icon,
	category: 'ultimateblocks',
	keywords: [__('Number box'), __('Feature'), __('Ultimate Blocks')],
	attributes,

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: withState({ editable: '' })(function(props) {
		const { isSelected, setAttributes, editable, setState } = props;

		const {
			column,
			columnOneNumber,
			columnTwoNumber,
			columnThreeNumber,
			columnOneTitle,
			columnTwoTitle,
			columnThreeTitle,
			columnOneBody,
			columnTwoBody,
			columnThreeBody,
			numberBackground,
			numberColor,
			borderColor,
			title1Align,
			title2Align,
			title3Align,
			body1Align,
			body2Align,
			body3Align
		} = props.attributes;

		const columns = [
			{ value: '1', label: __('One Column') },
			{ value: '2', label: __('Two Column') },
			{ value: '3', label: __('Three Column') }
		];

		const selectedTextAlignment = () => {
			switch ('editable') {
				case 'title1':
					return title1Align;
				case 'body1':
					return body1Align;
				case 'title2':
					return title2Align;
				case 'body2':
					return body2Align;
				case 'title3':
					return title3Align;
				case 'body3':
					return body3Align;
			}
		};

		return [
			isSelected && (
				<BlockControls>
					<Toolbar>
						{['left', 'center', 'right', 'justify']
							.slice(0, editable.indexOf('title') > -1 ? 3 : 4)
							.map(a => (
								<IconButton
									icon={`editor-${
										a === 'justify' ? a : 'align' + a
									}`}
									label={__(
										(a !== 'justify' ? 'Align ' : '') +
											a[0].toUpperCase() +
											a.slice(1)
									)}
									isActive={selectedTextAlignment === a}
									onClick={() => {
										switch (editable) {
											case 'title1':
												setAttributes({
													title1Align: a
												});
												break;
											case 'body1':
												setAttributes({
													body1Align: a
												});
												break;
											case 'title2':
												setAttributes({
													title2Align: a
												});
												break;
											case 'body2':
												setAttributes({
													body2Align: a
												});
												break;
											case 'title3':
												setAttributes({
													title3Align: a
												});
												break;
											case 'body3':
												setAttributes({
													body3Align: a
												});
												break;
										}
									}}
								/>
							))}
					</Toolbar>
				</BlockControls>
			),

			isSelected && (
				<InspectorControls>
					<PanelBody title={__('Number Box Settings')}>
						<SelectControl
							label={__('Number of Columns')}
							value={column}
							options={columns.map(({ value, label }) => ({
								value: value,
								label: label
							}))}
							onChange={value => {
								setAttributes({ column: value });
							}}
						/>
						<PanelColorSettings
							title={__('Color Scheme')}
							initialOpen={false}
							colorSettings={[
								{
									value: numberBackground,
									onChange: colorValue =>
										setAttributes({
											numberBackground: colorValue
										}),
									label: __('Number Background Color')
								},
								{
									value: numberColor,
									onChange: colorValue =>
										setAttributes({
											numberColor: colorValue
										}),
									label: __('Number Color')
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
				<div className={`ub_number_box column_${column}`}>
					<div
						className="ub_number_1"
						style={{
							borderColor: borderColor
						}}
					>
						<div
							className="ub_number_box_number"
							style={{
								backgroundColor: numberBackground
							}}
						>
							<RichText
								tagName="p"
								placeholder={__('1')}
								className="ub_number_one_number"
								style={{
									color: numberColor
								}}
								value={columnOneNumber}
								onChange={value =>
									setAttributes({
										columnOneNumber: value
									})
								}
								keepPlaceholderOnFocus={true}
								unstableOnFocus={() =>
									setState({ editable: '' })
								}
							/>
						</div>
						<RichText
							tagName="p"
							placeholder={__('Title One')}
							style={{ textAlign: title1Align }}
							className="ub_number_one_title"
							value={columnOneTitle}
							onChange={value =>
								setAttributes({ columnOneTitle: value })
							}
							keepPlaceholderOnFocus={true}
							unstableOnFocus={() =>
								setState({ editable: 'title1' })
							}
						/>
						<RichText
							tagName="p"
							placeholder={__('Your content goes here.')}
							style={{ textAlign: body1Align }}
							className="ub_number_one_body"
							value={columnOneBody}
							onChange={value =>
								setAttributes({ columnOneBody: value })
							}
							keepPlaceholderOnFocus={true}
							unstableOnFocus={() =>
								setState({ editable: 'body1' })
							}
						/>
					</div>
					<div
						className="ub_number_2"
						style={{
							borderColor: borderColor
						}}
					>
						<div
							className="ub_number_box_number"
							style={{
								backgroundColor: numberBackground
							}}
						>
							<RichText
								tagName="p"
								placeholder={__('2')}
								className="ub_number_two_number"
								style={{
									color: numberColor
								}}
								value={columnTwoNumber}
								onChange={value =>
									setAttributes({
										columnTwoNumber: value
									})
								}
								keepPlaceholderOnFocus={true}
								unstableOnFocus={() =>
									setState({ editable: '' })
								}
							/>
						</div>
						<RichText
							tagName="p"
							placeholder={__('Title Two')}
							style={{ textAlign: title2Align }}
							className="ub_number_two_title"
							value={columnTwoTitle}
							onChange={value =>
								setAttributes({ columnTwoTitle: value })
							}
							keepPlaceholderOnFocus={true}
							unstableOnFocus={() =>
								setState({ editable: 'title2' })
							}
						/>
						<RichText
							tagName="p"
							placeholder={__('Your content goes here.')}
							style={{ textAlign: body2Align }}
							className="ub_number_two_body"
							value={columnTwoBody}
							onChange={value =>
								setAttributes({ columnTwoBody: value })
							}
							keepPlaceholderOnFocus={true}
							unstableOnFocus={() =>
								setState({ editable: 'body2' })
							}
						/>
					</div>
					<div
						className="ub_number_3"
						style={{
							borderColor: borderColor
						}}
					>
						<div
							className="ub_number_box_number"
							style={{
								backgroundColor: numberBackground
							}}
						>
							<RichText
								tagName="p"
								placeholder={__('3')}
								className="ub_number_three_number"
								style={{
									color: numberColor
								}}
								value={columnThreeNumber}
								onChange={value =>
									setAttributes({
										columnThreeNumber: value
									})
								}
								keepPlaceholderOnFocus={true}
								unstableOnFocus={() =>
									setState({ editable: '' })
								}
							/>
						</div>
						<RichText
							tagName="p"
							placeholder={__('Title Three')}
							style={{ textAlign: title3Align }}
							className="ub_number_three_title"
							value={columnThreeTitle}
							onChange={value =>
								setAttributes({ columnThreeTitle: value })
							}
							keepPlaceholderOnFocus={true}
							unstableOnFocus={() =>
								setState({ editable: 'title3' })
							}
						/>
						<RichText
							tagName="p"
							placeholder={__('Your content goes here.')}
							style={{ textAlign: body3Align }}
							className="ub_number_three_body"
							value={columnThreeBody}
							onChange={value =>
								setAttributes({ columnThreeBody: value })
							}
							keepPlaceholderOnFocus={true}
							unstableOnFocus={() =>
								setState({ editable: 'body3' })
							}
						/>
					</div>
				</div>
			</div>
		];
	}),

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function(props) {
		const {
			column,
			columnOneNumber,
			columnTwoNumber,
			columnThreeNumber,
			columnOneTitle,
			columnTwoTitle,
			columnThreeTitle,
			columnOneBody,
			columnTwoBody,
			columnThreeBody,
			numberBackground,
			numberColor,
			borderColor,
			title1Align,
			title2Align,
			title3Align,
			body1Align,
			body2Align,
			body3Align
		} = props.attributes;

		return (
			<div className={props.className}>
				<div className={`ub_number_box column_${column}`}>
					<div
						className="ub_number_1"
						style={{
							borderColor: borderColor
						}}
					>
						<div
							className="ub_number_box_number"
							style={{
								backgroundColor: numberBackground
							}}
						>
							<p
								className="ub_number_one_number"
								style={{
									color: numberColor
								}}
							>
								{columnOneNumber}
							</p>
						</div>
						<p
							className="ub_number_one_title"
							style={{ textAlign: title1Align }}
						>
							{columnOneTitle}
						</p>
						<p
							className="ub_number_one_body"
							style={{ textAlign: body1Align }}
						>
							{columnOneBody}
						</p>
					</div>
					<div
						className="ub_number_2"
						style={{
							borderColor: borderColor
						}}
					>
						<div
							className="ub_number_box_number"
							style={{
								backgroundColor: numberBackground
							}}
						>
							<p
								className="ub_number_two_number"
								style={{
									color: numberColor
								}}
							>
								{columnTwoNumber}
							</p>
						</div>
						<p
							className="ub_number_two_title"
							style={{ textAlign: title2Align }}
						>
							{columnTwoTitle}
						</p>
						<p
							className="ub_number_two_body"
							style={{ textAlign: body2Align }}
						>
							{columnTwoBody}
						</p>
					</div>
					<div
						className="ub_number_3"
						style={{
							borderColor: borderColor
						}}
					>
						<div
							className="ub_number_box_number"
							style={{
								backgroundColor: numberBackground
							}}
						>
							<p
								className="ub_number_three_number"
								style={{
									color: numberColor
								}}
							>
								{columnThreeNumber}
							</p>
						</div>
						<p
							className="ub_number_three_title"
							style={{ textAlign: title3Align }}
						>
							{columnThreeTitle}
						</p>
						<p
							className="ub_number_three_body"
							style={{ textAlign: body3Align }}
						>
							{columnThreeBody}
						</p>
					</div>
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
			save: version_1_1_5
		}
	]
});
