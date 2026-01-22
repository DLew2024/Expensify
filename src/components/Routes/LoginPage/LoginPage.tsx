import React from 'react';
import styles from './styles/_LoginPage.module.scss';

// Add Google Auth Provider
const LoginPage = () => {
	return (
		<div className={styles.boxLayout}>
			<div className={styles.boxLayout__box}>
				<h1 className={styles.boxLayout__title}>Expensify App</h1>
				<p>Get expenses under control</p>
				<button className={styles.button} type="button">
					Login
				</button>
			</div>
		</div>
	);
};

export default LoginPage;
