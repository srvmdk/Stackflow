import React, { Component } from "react";
import PropTypes from "prop-types";
import { Box } from "grommet";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		console.log(error);
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<Box align='center' pad='medium'>
					Something went wrong.
				</Box>
			);
		}

		return this.props.children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
