import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from '../../../store/hooks';
import { editExpense, removeExpense } from '../../../store/slices/expensesSlice';
import type { AppState } from '../../../store/store';
import { EMPTY_EXPENSE } from '../../../utils/DataTypes/ExpenseTypes';
import { NavigationRoutePaths } from '../../../utils/Navigation/NavigationRoutePaths';
import ExpenseForm from '../../ExpenseForm';

const EditExpensePage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { id: paramId } = useParams<{ id: string }>();
	const $expenses = useSelector((state: AppState) => state.expenses.expenseItems);

	const expense = $expenses.find((exp) => exp.id === paramId) ?? EMPTY_EXPENSE;

	return (
		<div>
			Editing the expense with the id of {paramId}
			<ExpenseForm
				expense={expense}
				onSubmitForm={(expense) => {
					dispatch(editExpense(expense));
					navigate(NavigationRoutePaths.DASHBOARD);
				}}
			/>
			<button
				type="button"
				onClick={() => {
					dispatch(removeExpense(expense.id));
					navigate(NavigationRoutePaths.DASHBOARD);
				}}
			>
				Remove
			</button>
		</div>
	);
};

export default EditExpensePage;
