import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { registerValidate } from "../validate/registerValidate";

import Swal from "sweetalert2";

export const useRegisterForm = (uri) => {
	const router = useRouter();

	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		emailAddress: "",
		password: "",
		confirm: "",
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setErrors(registerValidate(values));
		setIsSubmitting(true);
	};

	// when errors or values or isSubmitting state is changed, will cause a rerender
	// and will run this use effect. if there are no errors and if isSubmitting,
	// only then will the post fetch request run.
	useEffect(() => {
		if (Object.keys(errors).length === 0 && isSubmitting) {
			// check if email is existing first before registering

			fetch(`${uri}/api/users/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstName: values.firstName,
					lastName: values.lastName,
					emailAddress: values.emailAddress,
					password: values.password,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);

					if (data.data) {
						Swal.fire({
							position: "center",
							icon: "success",
							title: data.message,
							showConfirmButton: false,
							timer: 1500,
						});

						router.push("/login");
					} else {
						console.log("registration failed");

						Swal.fire({
							position: "center",
							icon: "error",
							title: data.message,
							showConfirmButton: false,
							timer: 1000,
						});
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [isSubmitting, errors, values]);

	// these are the values returned in this hook to be used wherever this hook is called.
	// in our case the register page. so all logic will be here not all over the register page.
	return { handleChange, handleSubmit, values, errors };
};
