import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Box, Text } from "grommet";
import moment from "moment";
import numeral from "numeral";

const QuestionSummary = (props) => {
	const { data, isUser } = props;
	const {
		title,
		tags,
		bounty_amount: bountyAmount,
		owner: { user_id: ownerId, display_name: ownerName },
		last_edit_date: modifiedOn,
	} = data;

	const getUpperContainer = () => {
		return (
			<Box direction="row" gap="xsmall" align="start">
				<Box
					align="center"
					width="xxxsmall"
					pad={{ horizontal: "xsmall" }}
					border
					round="xsmall"
					background="dark-3"
				>
					<Text size="xsmall">{numeral(bountyAmount).format("+0")}</Text>
				</Box>

				<Text size="small" weight="bold">
					{title}
				</Text>
			</Box>
		);
	};

	const getTags = () => (
		<Box direction="row" gap="xsmall">
			{tags.map((el) => (
				<Box
					key={el}
					border
					round="xsmall"
					pad={{ horizontal: "xsmall" }}
					background="light-6"
				>
					<Text wordBreak='break-all' size="xsmall">{el}</Text>
				</Box>
			))}
		</Box>
	);

	const getDetails = () => (
		<Text textAlign="end" size="xsmall">
			{`modified ${moment(modifiedOn).fromNow()} `}

			{!isUser && (
				<Link to={`/user/${ownerId}`}>
					<Text size="xsmall">{ownerName}</Text>
				</Link>
			)}
		</Text>
	);

	const getLowerContainer = () => (
		<>
			{getTags()}
			{getDetails()}
		</>
	);

	return (
		<Box
			gap="xsmall"
			width="large"
			pad={{ vertical: "xxsmall", end: "xsmall" }}
		>
			{getUpperContainer()}
			{getLowerContainer()}
		</Box>
	);
};

QuestionSummary.propTypes = {
	data: PropTypes.object.isRequired,
	isUser: PropTypes.bool.isRequired,
};

export default QuestionSummary;
