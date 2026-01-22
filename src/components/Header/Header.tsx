import { Link } from 'react-router';
import { NavigationRoutePaths } from '../../utils/Navigation/NavigationRoutePaths';
import styles from './styles/_Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__title}>
				<div className={styles.header__content}>
					<h1>Expensify</h1>
					<Link className={styles.header} to={NavigationRoutePaths.DASHBOARD}>
						Dashboard
					</Link>

					<button type="button">Log Out</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
