import { ThemeProvider } from "next-themes";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({ children }) => {
	return (
		<ThemeProvider>
			<div className="main-container">
				<Menu />
				{children}
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default Layout;
