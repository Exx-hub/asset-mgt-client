const Layout = ({ children }) => {
	return (
		<div className="main-container">
			<h1>NAVBAR</h1>
			{children}
			<h1>FOOTER</h1>
		</div>
	);
};

export default Layout;
