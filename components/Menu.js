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
			<Link href="/transactions">
				<a>Transactions</a>
			</Link>
			<Link href="/profile">
				<a>My Profile</a>
			</Link>
			<Link href="/register">
				<a>Register</a>
			</Link>
			<Link href="/login">
				<a>Login</a>
			</Link>

			<a onClick={() => alert("LOGGED OUT!")}>Logout</a>
		</nav>
	);
};

export default Menu;
