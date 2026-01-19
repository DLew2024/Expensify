import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Expense } from '../../utils/DataTypes/ExpenseTypes';

type ExpensesState = Expense[];

const initialState: ExpensesState = [];

const expensesSlice = createSlice({
	name: 'expenses',
	initialState,
	reducers: {
		addExpense(state, action: PayloadAction<Expense>) {
			const exists = state.some((e) => e.id === action.payload.id);
			if (exists) return;
			state.push(action.payload);
		},
		removeExpense(state, action: PayloadAction<string>) {
			state = state.filter((exp) => exp.id !== action.payload);
		},
		editExpense(state, action: PayloadAction<Expense>) {
			const index = state.findIndex((exp) => exp.id === action.payload.id);

			if (index !== -1) {
				state[index] = {
					...state[index],
					...action.payload,
				};
			}
		},
	},
});

export const { addExpense, removeExpense, editExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
