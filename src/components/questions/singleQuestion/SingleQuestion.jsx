import React from "react";
import { Box } from "grommet";
import QuestionStat from "./QuestionStat";
import QuestionSummary from "./QuestionSummary";

const Question = (props) => (
	<Box
		align="center"
		direction="row"
		gap="medium"
		width="xlarge"
		background="light-2"
	>
		<QuestionStat {...props} />
		<QuestionSummary {...props} />
	</Box>
);

export default Question;
