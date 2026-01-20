import type { EpochSeconds } from './DateTypes';
import type { Guid } from './Guid';

export type Expense = {
	id: Guid;
	description: string;
	note: string;
	amount: number;
	createdAt: EpochSeconds;
};
