import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Expense } from '../../utils/DataTypes/ExpenseTypes';

type ExpensesState = {
	items: Expense[];
};

const initialState: ExpensesState = {
	items: [],
};

const expensesSlice = createSlice({
	name: 'expenses',
	initialState,
	reducers: {
		addExpense(state, action: PayloadAction<Expense>) {
			state.items.push(action.payload);
		},
		removeExpense(state, action: PayloadAction<string>) {
			state.items = state.items.filter((exp) => exp.id !== action.payload);
		},
		editExpense(state, action: PayloadAction<Expense>) {
			const index = state.items.findIndex(
				(exp) => exp.id === action.payload.id,
			);

			if (index !== -1) {
				state.items[index] = {
					...state.items[index],
					...action.payload,
				};
			}
		},
	},
});

export const { addExpense, removeExpense, editExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
