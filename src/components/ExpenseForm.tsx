import { useState } from 'react';
import { AMOUNT_REGEX } from '../utils/Regex/RegexUtils';

const ExpenseForm = () => {
	const [descriptionText, setDescriptionText] = useState<string>('');
	const [amountValue, setAmountValue] = useState<string>('');
	const [noteText, setNoteText] = useState<string>('');

	return (
		<div>
			<form>
				<input
					type="text"
					placeholder="Description"
					value={descriptionText}
					onChange={(e) => setDescriptionText(e.target.value)}
				/>

				<input
					type="number"
					placeholder="Amount"
					value={amountValue}
					onChange={(e) => {
						const amount = e.target.value;
						if (amount === '' || AMOUNT_REGEX.test(amount)) {
							setAmountValue(amount);
						}
					}}
				/>

				<textarea
					name=""
					id=""
					placeholder="Add note for your expense (optional)"
					value={noteText}
					onChange={(e) => setNoteText(e.target.value)}
				/>

				<button type="button">Add Expense</button>
			</form>
		</div>
	);
};

export default ExpenseForm;
