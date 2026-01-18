import clsx from "clsx";
import { NavLink } from "react-router";
import { NavigationRoutePaths } from "../../utils/Navigation/NavigationRoutePaths";
import styles from "./styles/_Header.module.scss";

const Header = () => {
	return (
		<header>
			<h1>Expensify</h1>
			<NavLink
				to={NavigationRoutePaths.DASHBOARD}
				className={({ isActive }) =>
					clsx(styles.link, {
						[styles.isActive]: isActive,
					})
				}
			>
				Dashboard
			</NavLink>
			<NavLink
				to={NavigationRoutePaths.CREATE_PAGE}
				className={({ isActive }) =>
					clsx(styles.link, {
						[styles.isActive]: isActive,
					})
				}
			>
				Create Expense
			</NavLink>
			<NavLink
				to={NavigationRoutePaths.EDIT_PAGE}
				className={({ isActive }) =>
					clsx(styles.link, {
						[styles.isActive]: isActive,
					})
				}
			>
				Edit Expense
			</NavLink>
			<NavLink
				to={NavigationRoutePaths.HELP_PAGE}
				className={({ isActive }) =>
					clsx(styles.link, {
						[styles.isActive]: isActive,
					})
				}
			>
				Help
			</NavLink>
		</header>
	);
};

export default Header;
