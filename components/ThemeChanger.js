import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import styles from "../styles/ThemeChanger.module.css";

const ThemeChanger = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	const handleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div>
			<button onClick={handleTheme} className={styles.toggleButton}>
				<p className={styles.toggleThumb}></p>
				<span>🌙</span>
				<span>☀️</span>
			</button>
		</div>
	);
};

export default ThemeChanger;
