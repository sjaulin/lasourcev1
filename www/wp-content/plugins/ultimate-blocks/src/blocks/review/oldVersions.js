const { RichText } = wp.editor;
import { Stars } from './components';
import { JSONLD, Generic } from 'react-structured-data';

export const version_1_1_2 = props => {
	const {
		ID,
		authorName,
		itemName,
		items,
		starCount,
		summaryTitle,
		summaryDescription,
		callToActionText,
		callToActionURL,
		callToActionBackColor,
		callToActionForeColor,
		inactiveStarColor,
		activeStarColor
	} = props.attributes;

	const average =
		Math.round(
			(JSON.parse(items)
				.map(i => i.value)
				.reduce((total, v) => total + v) /
				JSON.parse(items).length) *
				10
		) / 10;

	return (
		<div className="ub_review_block">
			<p className="ub_review_item_name">
				<RichText.Content value={itemName} />
			</p>
			<p>
				<RichText.Content value={authorName} />
			</p>
			{JSON.parse(items).map((j, i) => (
				<div className="ub_review_entry">
					<RichText.Content key={i} value={j.label} />
					<Stars
						style={{ marginLeft: 'auto' }}
						id={`${ID}-${i}`}
						key={i}
						value={j.value}
						limit={starCount}
						inactiveStarColor={inactiveStarColor}
						activeStarColor={activeStarColor}
					/>
				</div>
			))}
			<div className="ub_review_summary">
				<RichText.Content
					className="ub_review_summary_title"
					tagName="p"
					value={summaryTitle}
				/>
				<div className="ub_review_overall_value">
					<p>
						<RichText.Content value={summaryDescription} />
					</p>
					<span className="ub_review_rating">{average}</span>
				</div>
				<div className="ub_review_cta_panel">
					<div className="ub_review_cta_main">
						<a
							style={{ color: callToActionForeColor }}
							href={callToActionURL ? callToActionURL : '#'}
							target="_blank"
							rel="nofollow"
						>
							<button
								className="ub_review_cta_btn"
								style={{
									backgroundColor: callToActionBackColor,
									border: `1px solid ${callToActionForeColor}`
								}}
							>
								<RichText.Content
									style={{ color: callToActionForeColor }}
									value={
										callToActionText
											? callToActionText
											: 'Click here'
									}
								/>
							</button>
						</a>
					</div>
					<Stars
						id={`${ID}-average`}
						className="ub_review_average_stars"
						onHover={() => null}
						setValue={() => null}
						value={average}
						limit={starCount}
						inactiveStarColor={inactiveStarColor}
						activeStarColor={activeStarColor}
					/>
				</div>
			</div>
			<JSONLD>
				<Generic
					type="review"
					jsonldtype="Review"
					schema={{ reviewBody: summaryDescription }}
				>
					<Generic
						type="itemReviewed"
						jsonldtype="Product"
						schema={{ name: itemName }}
					/>
					<Generic
						type="reviewRating"
						jsonldtype="Rating"
						schema={{ ratingValue: average, bestRating: 5 }}
					/>
					<Generic
						type="author"
						jsonldtype="Person"
						schema={{ name: authorName }}
					/>
				</Generic>
			</JSONLD>
		</div>
	);
};

export const version_1_1_4 = props => {
	const {
		ID,
		authorName,
		itemName,
		items,
		starCount,
		summaryTitle,
		summaryDescription,
		callToActionText,
		callToActionURL,
		callToActionBackColor,
		callToActionForeColor,
		inactiveStarColor,
		activeStarColor
	} = props.attributes;

	const average =
		Math.round(
			(JSON.parse(items)
				.map(i => i.value)
				.reduce((total, v) => total + v) /
				JSON.parse(items).length) *
				10
		) / 10;

	return (
		<div className="ub_review_block">
			<p className="ub_review_item_name">
				<RichText.Content value={itemName} />
			</p>
			<p>
				<RichText.Content value={authorName} />
			</p>
			{JSON.parse(items).map((j, i) => (
				<div className="ub_review_entry">
					<RichText.Content key={i} value={j.label} />
					<Stars
						style={{ marginLeft: 'auto' }}
						id={`${ID}-${i}`}
						key={i}
						value={j.value}
						limit={starCount}
						inactiveStarColor={inactiveStarColor}
						activeStarColor={activeStarColor}
					/>
				</div>
			))}
			<div className="ub_review_summary">
				<RichText.Content
					className="ub_review_summary_title"
					tagName="p"
					value={summaryTitle}
				/>
				<div className="ub_review_overall_value">
					<p>
						<RichText.Content value={summaryDescription} />
					</p>
					<span className="ub_review_rating">{average}</span>
				</div>
				<div className="ub_review_cta_panel">
					<div className="ub_review_cta_main">
						<a
							style={{ color: callToActionForeColor }}
							href={callToActionURL ? callToActionURL : '#'}
							target="_blank"
							rel="nofollow noopener noreferrer"
						>
							<button
								className="ub_review_cta_btn"
								style={{
									backgroundColor: callToActionBackColor,
									border: `1px solid ${callToActionForeColor}`
								}}
							>
								<RichText.Content
									style={{ color: callToActionForeColor }}
									value={
										callToActionText
											? callToActionText
											: 'Click here'
									}
								/>
							</button>
						</a>
					</div>
					<Stars
						id={`${ID}-average`}
						className="ub_review_average_stars"
						onHover={() => null}
						setValue={() => null}
						value={average}
						limit={starCount}
						inactiveStarColor={inactiveStarColor}
						activeStarColor={activeStarColor}
					/>
				</div>
			</div>
			<JSONLD>
				<Generic
					type="review"
					jsonldtype="Review"
					schema={{ reviewBody: summaryDescription }}
				>
					<Generic
						type="itemReviewed"
						jsonldtype="Product"
						schema={{ name: itemName }}
					/>
					<Generic
						type="reviewRating"
						jsonldtype="Rating"
						schema={{ ratingValue: average, bestRating: 5 }}
					/>
					<Generic
						type="author"
						jsonldtype="Person"
						schema={{ name: authorName }}
					/>
				</Generic>
			</JSONLD>
		</div>
	);
};

export const version_1_1_5 = props => {
	const {
		ID,
		authorName,
		itemName,
		items,
		starCount,
		summaryTitle,
		summaryDescription,
		callToActionText,
		callToActionURL,
		callToActionBackColor,
		callToActionForeColor,
		inactiveStarColor,
		activeStarColor,
		titleAlign,
		authorAlign
	} = props.attributes;

	const average =
		Math.round(
			(JSON.parse(items)
				.map(i => i.value)
				.reduce((total, v) => total + v) /
				JSON.parse(items).length) *
				10
		) / 10;

	return (
		<div className="ub_review_block">
			<p
				className="ub_review_item_name"
				style={{ textAlign: titleAlign }}
			>
				<RichText.Content value={itemName} />
			</p>
			<p style={{ textAlign: authorAlign }}>
				<RichText.Content value={authorName} />
			</p>
			{JSON.parse(items).map((j, i) => (
				<div className="ub_review_entry">
					<RichText.Content key={i} value={j.label} />
					<Stars
						style={{ marginLeft: 'auto' }}
						id={`${ID}-${i}`}
						key={i}
						value={j.value}
						limit={starCount}
						inactiveStarColor={inactiveStarColor}
						activeStarColor={activeStarColor}
					/>
				</div>
			))}
			<div className="ub_review_summary">
				<RichText.Content
					className="ub_review_summary_title"
					tagName="p"
					value={summaryTitle}
				/>
				<div className="ub_review_overall_value">
					<p>
						<RichText.Content value={summaryDescription} />
					</p>
					<span className="ub_review_rating">{average}</span>
				</div>
				<div className="ub_review_cta_panel">
					<div className="ub_review_cta_main">
						<a
							style={{ color: callToActionForeColor }}
							href={callToActionURL ? callToActionURL : '#'}
							target="_blank"
							rel="nofollow noopener noreferrer"
						>
							<button
								className="ub_review_cta_btn"
								style={{
									backgroundColor: callToActionBackColor,
									border: `1px solid ${callToActionForeColor}`
								}}
							>
								<RichText.Content
									style={{ color: callToActionForeColor }}
									value={
										callToActionText
											? callToActionText
											: 'Click here'
									}
								/>
							</button>
						</a>
					</div>
					<Stars
						id={`${ID}-average`}
						className="ub_review_average_stars"
						onHover={() => null}
						setValue={() => null}
						value={average}
						limit={starCount}
						inactiveStarColor={inactiveStarColor}
						activeStarColor={activeStarColor}
					/>
				</div>
			</div>
			<JSONLD>
				<Generic
					type="review"
					jsonldtype="Review"
					schema={{ reviewBody: summaryDescription }}
				>
					<Generic
						type="itemReviewed"
						jsonldtype="Product"
						schema={{ name: itemName }}
					/>
					<Generic
						type="reviewRating"
						jsonldtype="Rating"
						schema={{ ratingValue: average, bestRating: 5 }}
					/>
					<Generic
						type="author"
						jsonldtype="Person"
						schema={{ name: authorName }}
					/>
				</Generic>
			</JSONLD>
		</div>
	);
};
