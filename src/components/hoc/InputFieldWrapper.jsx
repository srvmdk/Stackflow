import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, Text } from "grommet";
import { Alert } from "grommet-icons";

const InputFieldWrapper = (props) => {
	const { children, label, error } = props;
	return (
		<Box direction="column" gap="xsmall" size="small">
			{label ? (
				<Heading level={5} textAlign="start" margin="none">
					{label}
				</Heading>
			) : null}

			{children}

			{error ? (
				<Box direction="row" gap="xsmall" align="center">
					<Alert size="small" color="status-error" />
					<Text size="xsmall" textAlign="start" color="status-error">
						{error}
					</Text>
				</Box>
			) : null}
		</Box>
	);
};

InputFieldWrapper.defaultProps = {
	label: undefined,
	error: false,
};

InputFieldWrapper.propTypes = {
	children: PropTypes.node.isRequired,
	label: PropTypes.string,
	error: PropTypes.string.isRequired,
};

export default InputFieldWrapper;
