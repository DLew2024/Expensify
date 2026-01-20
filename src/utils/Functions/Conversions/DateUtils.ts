import type { Dayjs } from 'dayjs';
import type { EpochMillis, EpochSeconds } from '../../DataTypes/DateTypes';

export const formatDateTimeSafe = (
	dateString?: string,
	fallback = 'N/A',
): string => {
	if (!dateString) return fallback;

	const date = new Date(dateString);
	if (Number.isNaN(date.getTime())) return fallback;

	return date.toLocaleString(undefined, {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});
};

export const toEpochSeconds = (date: Date | number): EpochSeconds => {
	const ms = typeof date === 'number' ? date : date.getTime();
	return Math.floor(ms / 1000) as EpochSeconds;
};

export const formatEpochSecondsSafe = (
	seconds?: EpochSeconds,
	fallback = 'N/A',
): string => {
	if (typeof seconds !== 'number') return fallback;

	const date = new Date(seconds * 1000);
	if (Number.isNaN(date.getTime())) return fallback;

	return date.toLocaleString(undefined, {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});
};

export const dayjsToEpochSecondsSafe = (date: Dayjs | null): EpochSeconds => {
	if (!date) {
		return Math.floor(Date.now() / 1000) as EpochSeconds;
	}

	return Math.floor(date.valueOf() / 1000) as EpochSeconds;
};

export const epochSecondsToMillis = (seconds: EpochSeconds): EpochMillis => {
	return (seconds * 1000) as EpochMillis;
};

export const epochMillisToSeconds = (millis: EpochMillis): EpochSeconds => {
	return Math.floor(millis / 1000) as EpochSeconds;
};
