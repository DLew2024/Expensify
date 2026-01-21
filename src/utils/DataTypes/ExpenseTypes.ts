import dayjs from 'dayjs';
import type { EpochSeconds } from './DateTypes';
import { EMPTY_GUID, type Guid } from './Guid';

export type Expense = {
	id: Guid;
	description: string;
	note: string;
	amount: number;
	createdAt: EpochSeconds;
};

export const EMPTY_EXPENSE = {
	id: EMPTY_GUID,
	description: '',
	note: '',
	amount: 0,
	createdAt: dayjs().unix() as EpochSeconds,
};
