export const registerValidate = (values) => {
	let errors = {};

	if (Object.keys(values).length !== 0) {
		if (!values.firstName) {
			errors.firstName = "Firstname is required!";
		}
		if (!values.lastName) {
			errors.lastName = "Lastname is required!";
		}
		if (!values.emailAddress) {
			errors.emailAddress = "Email Address is required.";
		} else if (!/\S+@\S+\.\S/.test(values.emailAddress)) {
			errors.emailAddress = "Please enter a valid email address.";
		}
		if (!values.password) {
			errors.password = "Password is required!";
		} else if (values.password.length < 6) {
			errors.password = "Password must be at least 6 characters long!";
		}
		if (!values.confirm) {
			errors.confirm = "Need to confirm password!";
		} else if (values.password !== values.confirm) {
			errors.confirm = "Passwords do not match!";
		}
	}

	return errors;
};
