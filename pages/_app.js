import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import SideMenu from "../components/SideMenu";
import TopNav from "../components/TopNav";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<div className="outer-container">
				<div className="menu-container">
					<SideMenu />
				</div>

				<Layout>
					<TopNav />
					<Component {...pageProps} />
					{/* Footer  */}
				</Layout>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
