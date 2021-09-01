import React from "react";
import { Box, Heading } from "grommet";
import PageWrapper from "./hoc/PageWrapper";

const Page404 = () => {
	return (
		<PageWrapper>
			<Box>
				<Heading level={2}>404: Page not found ☹</Heading>
			</Box>
		</PageWrapper>
	);
};

export default Page404;
