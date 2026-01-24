import { PrimaryInput } from '../../../components/Input';
import styles from './styles/_LabeledInput.module.scss';

export const LabeledInput = () => {
	return (
		<div className={styles.labeledInputContainer}>
			<PrimaryInput
				className={styles.firstInput}
				type="text"
				placeholder="Starting balance..."
				title=""
			/>
			<PrimaryInput className={styles.amountInput} type="text" placeholder="Starting balance..." />
			{'icon'}
		</div>
	);
};
