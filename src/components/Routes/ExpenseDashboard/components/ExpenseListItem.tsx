import { Link } from 'react-router';
import type { Expense } from '../../../../utils/DataTypes/ExpenseTypes';
import { formatEpochSecondsSafe } from '../../../../utils/Functions/Conversions/DateUtils';
import { convertPriceToString } from '../../../../utils/Functions/Conversions/StringUtils';
import { NavigationRoutePaths } from '../../../../utils/Navigation/NavigationRoutePaths';

const ExpenseListItem = ({ id, description, amount, createdAt }: Expense) => {
	return (
		<div>
			<h1>Expense List Item</h1>
			<Link to={NavigationRoutePaths.EDIT_PATTERN(id)}>
				{<h3 style={{ margin: 0 }}>{description}</h3>}
			</Link>
			<br />
			<p>
				{`${convertPriceToString(amount)} -
                ${formatEpochSecondsSafe(createdAt)}`}
			</p>
		</div>
	);
};

export default ExpenseListItem;
