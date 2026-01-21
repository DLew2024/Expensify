import type { Dayjs } from 'dayjs';
import { useDispatch, useSelector } from '../../../../store/hooks';
import {
	setEndDate,
	setSortBy,
	setStartDate,
	setTextFilter,
} from '../../../../store/slices/filtersSlice';
import type { AppState } from '../../../../store/store';
import { FilterSortBy, type FilterSortByType } from '../../../../utils/DataTypes/FilterTypes';
import {
	dayjsToEpochSecondsSafeOrUndefined,
	epochToDayjsOrNull,
} from '../../../../utils/Functions/Conversions/DateUtils';
import { DateCalendar } from '../../../DateCalendar';

const ExpenseListFilters = () => {
	const dispatch = useDispatch();
	const $filters = useSelector((state: AppState) => state.filters);
	const filtersStartDate = epochToDayjsOrNull($filters.startDate);
	const filtersEndDate = epochToDayjsOrNull($filters.endDate);

	const handleStartDateChange = (date: Dayjs | null) => {
		dispatch(setStartDate(dayjsToEpochSecondsSafeOrUndefined(date)));
	};

	const handleEndDateChange = (date: Dayjs | null) => {
		dispatch(setEndDate(dayjsToEpochSecondsSafeOrUndefined(date)));
	};

	return (
		<div>
			<label htmlFor="expense-search">Search Expenses:</label>
			<input
				id="expense-search"
				type="text"
				placeholder="Search expenses..."
				value={$filters.text}
				onChange={(e) => dispatch(setTextFilter(e.target.value))}
			/>
			<select
				title="Sort By"
				value={$filters.sortBy}
				onChange={(e) => {
					dispatch(setSortBy(e.target.value as FilterSortByType));
				}}
			>
				<option value={FilterSortBy.DATE}>Date</option>
				<option value={FilterSortBy.AMOUNT}>Amount</option>
			</select>

			<DateCalendar label="Start" value={filtersStartDate} onChange={handleStartDateChange} />

			<DateCalendar
				label="End"
				value={filtersEndDate}
				minDate={filtersStartDate ?? undefined}
				onChange={handleEndDateChange}
			/>
		</div>
	);
};

export default ExpenseListFilters;
