import { useDispatch } from '../../../../store/hooks';
import { removeExpense } from '../../../../store/slices/expensesSlice';
import type { Expense } from '../../../../utils/DataTypes/ExpenseTypes';
import { formatEpochMillisDateTimeSafe } from '../../../../utils/Functions/Conversions/DateUtils';
import { convertPriceToString } from '../../../../utils/Functions/Conversions/StringUtils';

const ExpenseListItem = ({ id, description, amount, createdAt }: Expense) => {
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Expense List Item</h1>
			{description}
			<br />
			<p>
				{`${convertPriceToString(amount)} -
                ${formatEpochMillisDateTimeSafe(createdAt)}`}
			</p>
			<button type="button" onClick={() => dispatch(removeExpense(id))}>
				Remove
			</button>
		</div>
	);
};

export default ExpenseListItem;
