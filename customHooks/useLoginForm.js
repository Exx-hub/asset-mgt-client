import { useEffect, useState } from "react";

import { loginValidate } from "../validate/loginValidate";

import { useRouter } from "next/router";

import Swal from "sweetalert2";

export const useLoginForm = (uri) => {
	// console.log(uri);

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

	const getUserDetails = (token) => {
		console.log(token);

		fetch(`${uri}/api/users/details`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			fetch(`${uri}/api/users/login`, {
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
						// console.log(data.token);

						Swal.fire({
							position: "center",
							icon: "success",
							title: data.message,
							showConfirmButton: false,
							timer: 1500,
						});

						localStorage.setItem("token", data.token);

						// route to profile page
						// router.push("/");

						// getUserDetails(localStorage.getItem("token"));
					} else {
						Swal.fire({
							position: "center",
							icon: "error",
							title: data.message,
							showConfirmButton: false,
							timer: 1500,
						});

						setIsSubmitting(false);
					}
				})
				.catch((err) => {
					// console.log(err);
				});
		}
	}, [isSubmitting, values, errors]);

	return { handleChange, handleSubmit, values, errors };
};
