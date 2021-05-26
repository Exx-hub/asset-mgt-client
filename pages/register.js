import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Register() {
	return (
		<>
			<Head>
				<title>AMS - Register</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<h1>Register</h1>
				<div class="row">
					<div class="col-md-6 offset-md-3">
						<form id="register-form">
							<input
								type="text"
								id="first-name"
								class="form-control mb-3"
								placeholder="Enter your first name"
							/>
							<input
								type="text"
								id="last-name"
								class="form-control mb-3"
								placeholder="Enter your lastname"
							/>
							<input
								type="email"
								id="email-address"
								class="form-control mb-3"
								placeholder="Enter your email address"
							/>
							<div class="form-row my-3">
								<div class="form-group col-md-6">
									<input
										type="password"
										id="password"
										class="form-control"
										placeholder="Enter your new password"
									/>
								</div>
								<div class="form-group col-md-6">
									<input
										type="password"
										id="confirm-password"
										class="form-control"
										placeholder="Confirm your new password"
									/>
								</div>
							</div>
							<button type="submit" class="btn btn-block btn-primary my-5">
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
