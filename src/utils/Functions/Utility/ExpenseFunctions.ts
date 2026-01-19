import type { Expense } from '../../DataTypes/ExpenseTypes';
import { FilterSortBy, type Filters } from '../../DataTypes/FilterTypes';
import { isFiniteNumber } from '../Conversions/NumberUtils';

export const getVisibleExpenses = (
	expenses: Expense[],
	{ text, sortBy, startDate, endDate }: Filters,
) => {
	const normalizedText = text.trim().toLowerCase();

	return expenses
		.filter((expense) => {
			const startDateMatch =
				!isFiniteNumber(startDate) || expense.createdAt >= startDate;

			const endDateMatch =
				!isFiniteNumber(endDate) || expense.createdAt <= endDate;

			const textMatch =
				normalizedText.length === 0 ||
				expense.description.toLocaleLowerCase().includes(normalizedText);

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === FilterSortBy.DATE) return b.createdAt - a.createdAt;
			if (sortBy === FilterSortBy.AMOUNT) return b.amount - a.amount;
			return 0;
		});
};
