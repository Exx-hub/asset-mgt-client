import Link from "next/link";

const Menu = () => {
	return (
		<nav>
			<div>
				<h1>LOGOewewe</h1>
			</div>

			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>Transactions</a>
			</Link>
			<Link href="/">
				<a>My Profile</a>
			</Link>
			<Link href="/">
				<a>Register</a>
			</Link>
			<Link href="/">
				<a>Login</a>
			</Link>
			<Link href="/">
				<a>Logout</a>
			</Link>
		</nav>
	);
};

export default Menu;
