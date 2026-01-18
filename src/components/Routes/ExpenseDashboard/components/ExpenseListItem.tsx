import { connect } from 'react-redux';
import type { AppState } from '../../../../store/store';
import type { Expense } from '../../../../utils/DataTypes/ExpenseTypes';

const ExpenseListItem = ({ description, amount, createdAt }: Expense) => {
	return (
		<div>
			<h1>Expense List Item</h1>
			{description}
			{amount}
			{createdAt}
		</div>
	);
};

export default ExpenseListItem;
