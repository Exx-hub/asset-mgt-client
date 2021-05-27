import { ThemeProvider } from "next-themes";
import Footer from "./Footer";
import Menu from "./SideMenu";

const Layout = ({ children }) => {
	return (
		<div className="main-container">
			{/* MainNav  */}
			{children}
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
