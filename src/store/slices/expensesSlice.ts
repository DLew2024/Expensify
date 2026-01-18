import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Expense } from '../../utils/DataTypes/ExpenseTypes';

type ExpensesState = {
	expenses: Expense[];
};

const initialState: ExpensesState = {
	expenses: [],
};

const expensesSlice = createSlice({
	name: 'expenses',
	initialState,
	reducers: {
		addExpense(state, action: PayloadAction<Expense>) {
			const exists = state.expenses.some((e) => e.id === action.payload.id);
			if (exists) return;
			state.expenses.push(action.payload);
		},
		removeExpense(state, action: PayloadAction<string>) {
			state.expenses = state.expenses.filter(
				(exp) => exp.id !== action.payload,
			);
		},
		editExpense(state, action: PayloadAction<Expense>) {
			const index = state.expenses.findIndex(
				(exp) => exp.id === action.payload.id,
			);

			if (index !== -1) {
				state.expenses[index] = {
					...state.expenses[index],
					...action.payload,
				};
			}
		},
	},
});

export const { addExpense, removeExpense, editExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
