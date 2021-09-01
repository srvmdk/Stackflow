import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Heading, Grid, Text } from "grommet";
import { fetchData } from "../../utils/common";
import {
	getUserTagsUrl,
	userInfoParams,
	sortTags,
} from "../../utils/profileUtils";
import locale from "../../i18N/en-US";
import Async from "../hoc/Async";
import Error from "../Error";

const UserTags = (props) => {
	const { userId } = props;

	const [topTags, setTopTags] = useState([]);
	const [error, setError] = useState(false);

	useEffect(async () => {
		const res = await fetchData(getUserTagsUrl(userId), userInfoParams);
		if (res?.status === 200) {
			const tags = sortTags(res.data.items)
				.slice(0, 3)
				.map((el) => ({
					tag: el.tag_name,
					ansScore: el.answer_score,
					qsScore: el.question_score,
				}));
			setTopTags(tags);
			setError(false);
		} else {
			setError(res);
			setTopTags([]);
		}
	}, []);

	const getHeader = () => (
		<Box margin={{ vertical: "small" }} gap="xsmall">
			<Heading level={4} margin="none">
				{locale.profile.tagHeader}
			</Heading>
			<Box border="medium" />
		</Box>
	);

	const getContent = () => (
		<Async isLoading={!topTags.length}>
			<Box gap="small" pad="small">
				{topTags.map((el) => (
					<Box key={el.tag} direction="row" gap="medium">
						<Grid
							rows="xxxsmall"
							columns={["medium", "small", "small"]}
							gap="medium"
							align="center"
							justify="start"
						>
							<Box border round="xsmall" pad="xxsmall" background="light-4">
								{el.tag}
							</Box>
							<Box direction="row" gap="small" align="end">
								<Text size="small">{locale.profile.score.question}</Text>
								<Text size="xlarge">{el.qsScore}</Text>
							</Box>
							<Box direction="row" gap="small" align="end">
								<Text size="small">{locale.profile.score.answer}</Text>
								<Text size="xlarge">{el.ansScore}</Text>
							</Box>
						</Grid>
					</Box>
				))}
			</Box>
		</Async>
	);

	const getError = () => <Error {...error} />;

	return (
		<Box width="large">
			{getHeader()}
			{!error ? getContent() : getError()}
		</Box>
	);
};

UserTags.propTypes = {
	userId: PropTypes.any.isRequired,
};

export default UserTags;
