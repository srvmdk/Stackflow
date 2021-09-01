import React from "react";
import PropTypes from "prop-types";
import { Box, Spinner, Text } from "grommet";
import locale from '../../i18N/en-US';

const Async = (props) => {
	const { isLoading, children } = props;
	return isLoading ? (
		<Box
			alignSelf="center"
			align="center"
			justify="center"
			height="small"
			gap="small"
		>
			<Spinner size="medium" color="dark-2" />
			<Text size="small">{locale.loader}</Text>
		</Box>
	) : (
		children
	);
};

Async.defaultProps = {
	isLoading: true,
};

Async.propTypes = {
	isLoading: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

export default Async;
