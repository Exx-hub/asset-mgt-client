import { useEffect, useState } from "react";

import { loginValidate } from "../validate/loginValidate";

import { useRouter } from "next/router";

export const useLoginForm = () => {
	const router = useRouter();

	const [values, setValues] = useState({ emailAddress: "", password: "" });
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(loginValidate(values));
		setIsSubmitting(true);
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			fetch("https://alvinacosta-asset-mgt.herokuapp.com/api/users/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					emailAddress: values.emailAddress,
					password: values.password,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.token) {
						console.log(data.token);

						alert(data.message);
						// route to profile page
						router.push("/");
					} else {
						alert(data.message);
						setIsSubmitting(false);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [isSubmitting, values, errors]);

	return { handleChange, handleSubmit, values, errors };
};
