import { connect } from 'react-redux';
import type { AppState } from '../../../../store/store';
import type { Expense } from '../../../../utils/DataTypes/ExpenseTypes';
import type { Filters } from '../../../../utils/DataTypes/FilterTypes';
import ExpenseListItem from './ExpenseListItem';

type ExpenseListProps = {
	expenses: Expense[];
	filters: Filters;
};

const ExpenseList = ({ expenses }: ExpenseListProps) => {
	return (
		<div>
			<h1>Expense List</h1>
			{expenses.map((expense) => {
				return <ExpenseListItem key={expense.id} {...expense} />;
			})}
		</div>
	);
};

const mapStateToProps = (state: AppState) => {
	return {
		expenses: state.expenses.expenses,
		filters: state.filters.filters,
	};
};

export default connect(mapStateToProps)(ExpenseList);
