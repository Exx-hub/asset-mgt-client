import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import SideMenu from "../components/SideMenu";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<div className="outer-container">
				<div className="menu-container">
					<SideMenu />
				</div>

				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
