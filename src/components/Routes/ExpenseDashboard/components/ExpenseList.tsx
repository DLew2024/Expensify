import { useSelector } from 'react-redux';
import type { AppState } from '../../../../store/store';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = () => {
	const $expenses = useSelector((state: AppState) => state.expenses.expenses);

	return (
		<div>
			<h1>Expense List</h1>
			{$expenses.map((expense) => {
				return <ExpenseListItem key={expense.id} {...expense} />;
			})}
		</div>
	);
};

export default ExpenseList;
