import * as Yup from "yup";
import locale from "../i18N/en-US";

export const initialValues = {
	email: "",
	password: "",
};

export const validationSchema = Yup.object({
	email: Yup.string()
		.required(locale.login.errors.required)
		.email(locale.login.errors.emailFormat),
	password: Yup.string()
		.required(locale.login.errors.required)
		.min(6, locale.login.errors.passwordLength),
});
