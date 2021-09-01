import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, Text } from "grommet";
import locale from "../i18N/en-US";

const Error = (props) => {
	const { status, statusText, error } = props;
	const { name, message } = error;

	return (
		<Box
			border={{ color: "#ef9a9a" }}
			round="xsmall"
			pad="small"
			background="#ffebee"
		>
			<Heading level={3} margin={{ top: "none", bottom: "small" }}>
				{`${status}: ${statusText}`}
			</Heading>

			<Box direction="row" gap="small">
				<Text size="small" weight="bold">
					{`${locale.error.title}:`}
				</Text>
				<Text size="small">{name}</Text>
			</Box>

			<Box direction="row" gap="small">
				<Text size="small" weight="bold">
					{`${locale.error.description}:`}
				</Text>
				<Text size="small">{message}</Text>
			</Box>
		</Box>
	);
};

Error.propTypes = {
	status: PropTypes.number.isRequired,
	statusText: PropTypes.string.isRequired,
	error: PropTypes.shape({
		name: PropTypes.string.isRequired,
		message: PropTypes.string.isRequired,
	}).isRequired,
};

export default Error;
