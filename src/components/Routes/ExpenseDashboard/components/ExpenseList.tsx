import { useSelector } from 'react-redux';
import type { AppState } from '../../../../store/store';
import { getVisibleExpenses } from '../../../../utils/Functions/Utility/ExpenseFunctions';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = () => {
	const $expenses = useSelector((state: AppState) => state.expenses);
	const $filters = useSelector((state: AppState) => state.filters);

	const selectExpenses = getVisibleExpenses($expenses, $filters);

	return (
		<div>
			<h1>Expense List</h1>
			{selectExpenses.map((expense) => {
				return <ExpenseListItem key={expense.id} {...expense} />;
			})}
		</div>
	);
};

export default ExpenseList;
