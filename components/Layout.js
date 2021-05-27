import { ThemeProvider } from "next-themes";
import Footer from "./Footer";
import TopNav from "./TopNav";

const Layout = ({ children }) => {
	return (
		<div className="main-container">
			<TopNav />
			{children}
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
