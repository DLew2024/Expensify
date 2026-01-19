import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../../store/slices/expensesSlice';
import { store } from '../../../store/store';
import ExpenseList from './components/ExpenseList';
import ExpenseListFilters from './components/ExpenseListFilters';

const ExpenseDashBoardPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			addExpense({
				id: '1',
				description: 'Water bill',
				note: 'Printer paper and ink',
				amount: 4599,
				createdAt: Date.now(),
			}),
		);

		dispatch(
			addExpense({
				id: '2',
				description: 'Gas bill',
				note: 'Quarterly business review',
				amount: 7825,
				createdAt: Date.now(),
			}),
		);

		dispatch(
			addExpense({
				id: '3',
				description: 'Cloud hosting',
				note: 'Monthly AWS bill',
				amount: 12999,
				createdAt: Date.now(),
			}),
		);

		dispatch(
			addExpense({
				id: '4',
				description: 'Transportation',
				note: 'Ride-share to client meeting',
				amount: 2340,
				createdAt: Date.now(),
			}),
		);

		dispatch(
			addExpense({
				id: '5',
				description: 'Team coffee',
				note: 'Sprint planning caffeine',
				amount: 1875,
				createdAt: Date.now(),
			}),
		);
	}, [dispatch]);

	console.log(store.getState());

	return (
		<div>
			This is from my dashboard page
			<ExpenseListFilters />
			<ExpenseList />
		</div>
	);
};

export default ExpenseDashBoardPage;
