import React from "react";
import PropTypes from "prop-types";
import { Box, Text } from "grommet";
import numeral from "numeral";
import locale from "../../../i18N/en-US";
import { VOTES, ANSWERS, VIEWS } from "../../../constants/constants";

const QuestionStat = (props) => {
	const { data } = props;
	const {
		score: votes,
		answer_count: answers,
		is_answered: correct,
		view_count: views,
	} = data;

	const getStat = (key, value, bool = false) => {
		const isBorder = key === ANSWERS && !!value;
		const isBg = key === ANSWERS && bool;
		return (
			<Box
				align="center"
				justify="center"
				height="3em"
				width="3em"
				background={isBg && "dark-2"}
				border={isBorder}
				round="xxsmall"
			>
				<Text>{numeral(value).format("0,0a")}</Text>
				<Text size="xsmall">{locale.questions.stats[key]}</Text>
			</Box>
		);
	};

	return (
		<Box direction="row" width="12em" gap="small" justify="center">
			{getStat(VOTES, votes)}
			{getStat(ANSWERS, answers, correct)}
			{getStat(VIEWS, views)}
		</Box>
	);
};

QuestionStat.propTypes = {
	data: PropTypes.object.isRequired,
};

export default QuestionStat;
