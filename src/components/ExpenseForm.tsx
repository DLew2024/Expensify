import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { Dayjs } from 'dayjs';
import { type FormEvent, useState } from 'react';
import type { Expense } from '../utils/DataTypes/ExpenseTypes';
import { createNewGuid } from '../utils/DataTypes/Guid';
import { dayjsToEpochSecondsSafe } from '../utils/Functions/Conversions/DateUtils';
import { AMOUNT_REGEX } from '../utils/Regex/RegexUtils';

type ExpenseFormProps = {
	onSubmitForm: (data: Expense) => void;
};

const ExpenseForm = ({ onSubmitForm }: ExpenseFormProps) => {
	const [descriptionText, setDescriptionText] = useState<string>('');
	const [amountValue, setAmountValue] = useState<string>('');
	const [date, setDate] = useState<Dayjs | null>(null);
	const [noteText, setNoteText] = useState<string>('');
	const [error, setError] = useState<string>('');

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!descriptionText || !amountValue) {
			setError('Please provide description and amount');
			console.error('Error: Please provide description and amount');
		} else {
			setError('');
			onSubmitForm({
				id: createNewGuid(),
				description: descriptionText,
				amount: parseFloat(amountValue),
				createdAt: dayjsToEpochSecondsSafe(date),
				note: noteText,
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
						if (amount === '' || AMOUNT_REGEX.test(amount))
							setAmountValue(amount);
					}}
				/>
				<DateCalendar value={date} onDateChange={setDate} />
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

const DateCalendar = ({
	value,
	onDateChange,
}: {
	value: Dayjs | null;
	onDateChange: (value: Dayjs | null) => void;
}) => (
	<LocalizationProvider dateAdapter={AdapterDayjs}>
		<DatePicker value={value} onChange={onDateChange} />
	</LocalizationProvider>
);
