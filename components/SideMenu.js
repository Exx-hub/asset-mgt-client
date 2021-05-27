import Link from "next/link";
import ThemeChanger from "../components/ThemeChanger";

import styles from "../styles/SideMenu.module.css";

const SideMenu = () => {
	return (
		<nav className={styles.nav}>
			<div className="navlogo">
				<h1>LOGOewewe</h1>
			</div>

			<div className={styles.navLinks}>
				<Link href="/">
					{/* icon */}
					<a>Home</a>
				</Link>
				<Link href="/transactions">
					{/* icon */}
					<a>Transactions</a>
				</Link>
				<Link href="/profile">
					{/* icon */}
					<a>My Profile</a>
				</Link>
				<Link href="/register">
					{/* icon */}
					<a>Register</a>
				</Link>
				<Link href="/login">
					<a>Login</a>
				</Link>
			</div>

			{/* <ThemeChanger /> */}

			<a onClick={() => alert("LOGGED OUT!")}>Logout</a>
		</nav>
	);
};

export default SideMenu;
