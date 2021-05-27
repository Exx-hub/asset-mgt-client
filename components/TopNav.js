import styles from "../styles/TopNav.module.css";
import ThemeChanger from "./ThemeChanger";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TopNav() {
	const { pathname } = useRouter();
	const [active, setActive] = useState("");

	useEffect(() => {
		if (pathname === "/") setActive("Home");
		if (pathname === "/transactions") setActive("My Transactions");
		if (pathname === "/profile") setActive("My Profile");
		if (pathname === "/register") setActive("Register");
		if (pathname === "/login") setActive("Login");
	}, [pathname]);
	return (
		<div className={styles.topNav}>
			<h3>{active}</h3>
			<ThemeChanger />
		</div>
	);
}
