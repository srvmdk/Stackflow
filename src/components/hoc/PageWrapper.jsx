import React from "react";
import PropTypes from "prop-types";
import { Box, Header, Heading } from "grommet";
import locale from '../../i18N/en-US';

const PageWrapper = (props) => {
	const { children } = props;
	return (
    <>
      <Header height='xxsmall' background='dark-1' pad='small'>
        <Heading level={3}>{locale.title}</Heading>
      </Header>

      <Box pad='medium' align='center'>{children}</Box>
    </>
  );
};

PageWrapper.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PageWrapper;
