import React from "react";
import { useFormik } from "formik";
import { Box, Card, CardHeader, CardBody } from "grommet";
import { useHistory } from "react-router-dom";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import SubmitButton from "./SubmitButton";
import locale from "../../i18N/en-US";

import { initialValues, validationSchema } from "../../utils/loginFormUtils";

const LoginForm = () => {
	const history = useHistory();

	const onSubmit = (values, onSubmitProps) => {
		console.log(values);
		onSubmitProps.resetForm();
		history.push("/featured");
	};

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	const { handleSubmit } = formik;

	const getForm = () => (
		<form onSubmit={handleSubmit}>
			<Box gap="medium" pad="small">
				<EmailField formik={formik} />
				<PasswordField formik={formik} />
				<SubmitButton />
			</Box>
		</form>
	);

	return (
		<Box align="center" justify="center" background="light-3" fill>
			<Card width="medium" elevation="medium">
				<CardHeader justify="center" height="xxsmall" background="dark-1">
					{locale.login.header}
				</CardHeader>
				<CardBody background="light-2">{getForm()}</CardBody>
			</Card>
		</Box>
	);
};

export default LoginForm;
