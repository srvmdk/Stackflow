import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "grommet";
import { Mail } from "grommet-icons";
import InputFieldWrapper from "../hoc/InputFieldWrapper";
import locale from "../../i18N/en-US";

const { label, placeholder } = locale.login;

const EmailField = (props) => {
	const { formik } = props;
	const { errors, touched, getFieldProps } = formik;

	return (
		<InputFieldWrapper
			label={label.email}
			error={touched.email && errors.email}
		>
			<TextInput
				id="email"
				name="email"
				type="email"
				icon={<Mail />}
				size='small'
				placeholder={placeholder.email}
				{...getFieldProps('email')}
			/>
		</InputFieldWrapper>
	);
};

EmailField.propTypes = {
	formik: PropTypes.object.isRequired,
};

export default EmailField;
