import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "grommet";
import { License } from "grommet-icons";
import InputFieldWrapper from "../hoc/InputFieldWrapper";

import locale from "../../i18N/en-US";

const { label, placeholder } = locale.login;

const PasswordField = (props) => {
	const { formik } = props;

	const { errors, touched, getFieldProps } = formik;

	return (
		<InputFieldWrapper
			label={label.password}
			error={touched.password && errors.password}
		>
			<TextInput
				id="password"
				name="password"
				type="password"
				icon={<License />}
				size="small"
				placeholder={placeholder.password}
				{...getFieldProps("password")}
			/>
		</InputFieldWrapper>
	);
};

PasswordField.propTypes = {
	formik: PropTypes.object.isRequired,
};

export default PasswordField;
