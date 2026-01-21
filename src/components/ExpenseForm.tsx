import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { type FormEvent, useState } from 'react';
import { EMPTY_EXPENSE, type Expense } from '../utils/DataTypes/ExpenseTypes';
import { createNewGuid, EMPTY_GUID } from '../utils/DataTypes/Guid';
import { dayjsToEpochSecondsSafe } from '../utils/Functions/Conversions/DateUtils';
import { AMOUNT_REGEX } from '../utils/Regex/RegexUtils';
import { DateCalendar } from './DateCalendar';

type ExpenseFormProps = {
	expense?: Expense;
	onSubmitForm: (data: Expense) => void;
};

const ExpenseForm = ({ expense = EMPTY_EXPENSE, onSubmitForm }: ExpenseFormProps) => {
	const { id, description, amount, createdAt, note } = expense;

	const idToSubmit = id === EMPTY_GUID ? createNewGuid() : id;
	const [descriptionText, setDescriptionText] = useState<string>(description);
	const [amountValue, setAmountValue] = useState<string>(amount.toString());
	const [date, setDate] = useState<Dayjs | null>(dayjs.unix(createdAt));
	const [noteText, setNoteText] = useState<string>(note);
	const [error, setError] = useState<string>('');

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!descriptionText || !amountValue) {
			setError('Please provide description and amount');
			console.error('Error: Please provide description and amount');
		} else {
			setError('');

			onSubmitForm({
				id: idToSubmit,
				createdAt: dayjsToEpochSecondsSafe(date),
				description: descriptionText,
				note: noteText,
				amount: parseFloat(amountValue),
			});
		}
	};

	return (
		<div>
			{error && <p>{error}</p>}
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Description"
					value={descriptionText}
					onChange={(e) => setDescriptionText(e.target.value)}
				/>
				<input
					type="number"
					inputMode="decimal"
					placeholder="Amount"
					value={amountValue}
					onChange={(e) => {
						const amount = e.target.value;
						if (amount === '' || AMOUNT_REGEX.test(amount)) setAmountValue(amount);
					}}
				/>

				<DateCalendar value={date} onChange={setDate} />

				<textarea
					name=""
					id=""
					placeholder="Add note for your expense (optional)"
					value={noteText}
					onChange={(e) => setNoteText(e.target.value)}
				/>
				<button type="submit">Add Expense</button>
			</form>
		</div>
	);
};

export default ExpenseForm;
