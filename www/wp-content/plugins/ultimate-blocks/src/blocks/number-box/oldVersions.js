export const version_1_1_2 = props => {
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
		borderColor
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
					<p className="ub_number_one_title">{columnOneTitle}</p>
					<p className="ub_number_one_body">{columnOneBody}</p>
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
					<p className="ub_number_two_title">{columnTwoTitle}</p>
					<p className="ub_number_two_body">{columnTwoBody}</p>
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
					<p className="ub_number_three_title">{columnThreeTitle}</p>
					<p className="ub_number_three_body">{columnThreeBody}</p>
				</div>
			</div>
		</div>
	);
};

export const version_1_1_5 = props => {
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
};
