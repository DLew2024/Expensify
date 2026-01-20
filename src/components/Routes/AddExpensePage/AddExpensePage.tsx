import { useNavigate } from 'react-router';
import { useDispatch } from '../../../store/hooks';
import { addExpense } from '../../../store/slices/expensesSlice';
import { NavigationRoutePaths } from '../../../utils/Navigation/NavigationRoutePaths';
import ExpenseForm from '../../ExpenseForm';

const AddExpensePage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<div>
			<h1>Add Expense</h1>
			<ExpenseForm
				onSubmitForm={(expense) => {
					dispatch(addExpense(expense));
					navigate(NavigationRoutePaths.DASHBOARD);
				}}
			/>
		</div>
	);
};

export default AddExpensePage;
