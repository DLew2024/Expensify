import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Expense } from '../../utils/DataTypes/ExpenseTypes';

type ExpenseItem = ExpensesState['expenseItems'][number];

type ExpensesState = {
	expenseItems: Expense[];
	hasSeeded: boolean;
};

const initialState: ExpensesState = {
	expenseItems: [],
	hasSeeded: false,
};

const expensesSlice = createSlice({
	name: 'expenses',
	initialState,
	reducers: {
		addExpense(state, action: PayloadAction<ExpenseItem>) {
			const idMatchExists = state.expenseItems.some(
				(e) => e.id === action.payload.id,
			);
			const descriptionMatchExists = state.expenseItems.some(
				(e) => e.description === action.payload.description,
			);

			if (idMatchExists || descriptionMatchExists) return;

			state.expenseItems.push(action.payload);
		},
		removeExpense(state, action: PayloadAction<ExpenseItem['id']>) {
			state.expenseItems = state.expenseItems.filter(
				(exp) => exp.id !== action.payload,
			);
		},
		editExpense(state, action: PayloadAction<ExpenseItem>) {
			const index = state.expenseItems.findIndex(
				(exp) => exp.id === action.payload.id,
			);

			if (index !== -1) {
				state.expenseItems[index] = {
					...state.expenseItems[index],
					...action.payload,
				};
			}
		},
		seedExpenses(state, action: PayloadAction<ExpensesState['expenseItems']>) {
			if (state.hasSeeded) return;

			state.expenseItems.push(...action.payload);
			state.hasSeeded = true;
		},
	},
});

export const { addExpense, removeExpense, editExpense, seedExpenses } =
	expensesSlice.actions;
export default expensesSlice.reducer;
