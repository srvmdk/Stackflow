import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Heading, Button, Text } from "grommet";
import { Previous, Next } from "grommet-icons";
import { initData, getParams } from "../../utils/questionUtils";
import locale from "../../i18N/en-US";
import { fetchData } from "../../utils/common";
import Async from "../hoc/Async";
import SingleQuestion from "./singleQuestion/SingleQuestion";
import Error from "../Error";

const Questions = (props) => {
	const { url, isUser } = props;

	const [data, setData] = useState(initData);
	const [page, setPage] = useState(1);
	const [error, setError] = useState(false);

	useEffect(async () => {
		const res = await fetchData(url, getParams(page));

		if (res?.status === 200) {
			const { has_more: hasMore, items } = res.data;
			setData({ hasMore, items });
			setError(false);
		} else {
			setError(res);
			setData(initData);
		}
	}, [page]);

	const getHeader = () => (
		<Box margin={{ vertical: "small" }} gap="xsmall">
			<Heading level={isUser ? 4 : 3} margin="none">
				{locale.questions.header}
			</Heading>
			<Box border={isUser && "medium"} />
		</Box>
	);

	const getNav = () => (
		<Box direction="row" justify="between">
			<Button
				plain
				label={<Text size="small">{locale.questions.nav.prev}</Text>}
				icon={<Previous size="small" />}
				color="dark-2"
				size="small"
				disabled={page === 1}
				onClick={() => setPage((prev) => prev - 1)}
			/>
			<Button
				plain
				label={<Text size="small">{locale.questions.nav.next}</Text>}
				icon={<Next size="small" />}
				reverse
				color="dark-2"
				size="small"
				disabled={!data.hasMore}
				onClick={() => setPage((prev) => prev + 1)}
			/>
		</Box>
	);

	const getContent = () => (
		<Async isLoading={!data.items.length}>
			<Box gap="small">
				{getNav()}
				<Box gap="small">
					{data.items.map((el) => (
						<SingleQuestion key={el.question_id} data={el} isUser={isUser} />
					))}
				</Box>
				{getNav()}
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

Questions.defaultProps = {
	isUser: false,
};

Questions.propTypes = {
	url: PropTypes.string.isRequired,
	isUser: PropTypes.bool,
};

export default Questions;
