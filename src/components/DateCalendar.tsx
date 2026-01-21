import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import type { ComponentProps } from 'react';

type Props = ComponentProps<typeof DatePicker>;

export const DateCalendar = (props: Props) => (
	<LocalizationProvider dateAdapter={AdapterDayjs}>
		<DatePicker {...props} />
	</LocalizationProvider>
);
