import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { seedExpenses } from '../../../store/slices/expensesSlice';
import { store } from '../../../store/store';
import type { EpochSeconds } from '../../../utils/DataTypes/DateTypes';
import { createNewGuid } from '../../../utils/DataTypes/Guid';
import ExpenseList from './components/ExpenseList';
import ExpenseListFilters from './components/ExpenseListFilters';

const ExpenseDashBoardPage = () => {
	const dispatch = useDispatch();

	const randomEpochSeconds = useCallback((): EpochSeconds => {
		const start = new Date(2020, 0, 1).getTime();
		const end = Date.now();
		const randomTime = start + Math.random() * (end - start);

		return Math.floor(randomTime / 1000) as EpochSeconds;
	}, []);

	const seedExpensesData = [
		{
			description: 'Water bill',
			note: 'Printer paper and ink',
			amount: 4599.67,
		},
		{
			description: 'Gas bill',
			note: 'Quarterly business review',
			amount: 7825.56,
		},
		{
			description: 'Cloud hosting',
			note: 'Monthly AWS bill',
			amount: 12999.34,
		},
		{
			description: 'Transportation',
			note: 'Ride-share to client meeting',
			amount: 2340.67,
		},
		{
			description: 'Team coffee',
			note: 'Sprint planning caffeine',
			amount: 1875.43,
		},
	] as const;

	useEffect(() => {
		dispatch(
			seedExpenses(
				seedExpensesData.map((expense) => ({
					id: createNewGuid(),
					createdAt: randomEpochSeconds(),
					...expense,
				})),
			),
		);
	}, [seedExpensesData, dispatch, randomEpochSeconds]);

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
