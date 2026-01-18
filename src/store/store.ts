import { configureStore } from '@reduxjs/toolkit';
import expensesReducer from './slices/expensesSlice';
import filtersReducer from './slices/filtersSlice';

export const store = configureStore({
	reducer: {
		expenses: expensesReducer,
		filters: filtersReducer,
	},
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
