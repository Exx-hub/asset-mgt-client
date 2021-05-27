import Link from "next/link";
import ThemeChanger from "../components/ThemeChanger";

import styles from "../styles/SideMenu.module.css";
import { useRouter } from "next/router";

import {
	FaHome,
	FaHandshake,
	FaAddressCard,
	FaSignOutAlt,
	FaSignInAlt,
} from "react-icons/fa";
import { MdAssignmentInd } from "react-icons/md";

const SideMenu = () => {
	const router = useRouter();
	const { pathname } = useRouter();

	console.log(pathname);

	return (
		<nav className={styles.nav}>
			<div className="navlogo">
				<h1>LOGOewewe</h1>
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
					<p>My Profile</p>
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
