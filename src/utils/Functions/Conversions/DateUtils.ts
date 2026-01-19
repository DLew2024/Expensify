export const formatEpochMillisDateTimeSafe = (
	epochMs?: number,
	fallback = 'N/A',
): string => {
	if (!epochMs || Number.isNaN(epochMs)) return fallback;

	const date = new Date(epochMs);
	if (Number.isNaN(date.getTime())) return fallback;

	return date.toLocaleString(undefined, {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});
};
