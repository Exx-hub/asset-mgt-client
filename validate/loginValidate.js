export const loginValidate = (values) => {
	let errors = {};

	if (Object.keys(values).length !== 0) {
		if (!values.emailAddress) {
			errors.emailAddress = "Email Address is required.";
		} else if (!/\S+@\S+\.\S/.test(values.emailAddress)) {
			errors.emailAddress = "Please enter a valid email address.";
		}
		if (!values.password) {
			errors.password = "Password is required!";
		} else if (values.password.length < 6) {
			errors.password = "Password needs to have at least 6 characters!";
		}
	}

	return errors;
};
