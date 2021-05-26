import { ThemeProvider } from "next-themes";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<ThemeProvider>
			<div className="main-container">
				<NavBar />
				{children}
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default Layout;
