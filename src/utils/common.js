import axios from "axios";

export const fetchData = (url, params) =>
	axios
		.get(url, { params })
		.then(({ status, data }) => {
			return { status, data, error: undefined };
		})
		.catch(({ response: { status, statusText, data } }) => {
			const error = {
				name: data.error_name,
				message: data.error_message,
			};
			return { status, statusText, data: undefined, error };
		});
