import React from "react";
import { Button } from "grommet";
import locale from "../../i18N/en-US";

const SubmitButton = () => (
	<Button
		primary
		variant="contained"
		color="dark-1"
		type="submit"
		label={locale.login.submitBtn}
	/>
);

export default SubmitButton;
