import Link from "next/link";

import styles from "../styles/SideMenu.module.css";
import { useRouter } from "next/router";

import Image from "next/image";

import {
	FaHome,
	FaHandshake,
	FaAddressCard,
	FaSignOutAlt,
	FaSignInAlt,
} from "react-icons/fa";
import { MdAssignmentInd } from "react-icons/md";
import { useEffect, useState } from "react";

const SideMenu = () => {
	const router = useRouter();
	const { pathname } = useRouter();

	const [mounted, setMounted] = useState(false);

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<nav className={styles.nav}>
			<div className={styles.navLogo}>
				<Image src={"/logo1.png"} width={120} height={120} />
			</div>

			<div className={styles.navLinks}>
				<div
					className={pathname === "/" ? styles.linkDiv2 : styles.linkDiv}
					onClick={() => router.push("/")}
				>
					<FaHome className={styles.icon} />
					<p>Home</p>
				</div>
				<div
					className={
						pathname === "/transactions" ? styles.linkDiv2 : styles.linkDiv
					}
					onClick={() => router.push("/transactions")}
				>
					<FaHandshake />
					<p>Transactions</p>
				</div>
				<div
					className={pathname === "/profile" ? styles.linkDiv2 : styles.linkDiv}
					onClick={() => router.push("/profile")}
				>
					<MdAssignmentInd />
					<p>Profile</p>
				</div>
				<div
					className={
						pathname === "/register" ? styles.linkDiv2 : styles.linkDiv
					}
					onClick={() => router.push("/register")}
				>
					<FaAddressCard />
					<p>Register</p>
				</div>

				<div
					className={pathname === "/login" ? styles.linkDiv2 : styles.linkDiv}
					onClick={() => router.push("/login")}
				>
					<FaSignInAlt />
					<p>Login</p>
				</div>
			</div>

			{/* <ThemeChanger /> */}
			<div className={styles.logout} onClick={() => alert("LOGGED OUT!")}>
				<FaSignOutAlt />
			</div>
		</nav>
	);
};

export default SideMenu;
