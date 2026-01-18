import type { Expense } from '../../../../utils/DataTypes/ExpenseTypes';
import { convertPriceToString } from '../../../../utils/Functions/Conversions/StringFunctionUtils';

const ExpenseListItem = ({ description, amount, createdAt }: Expense) => {
	return (
		<div>
			<h1>Expense List Item</h1>
			{description}
			<br />
			{convertPriceToString(amount)}
			<br />
			{createdAt}
		</div>
	);
};

export default ExpenseListItem;
