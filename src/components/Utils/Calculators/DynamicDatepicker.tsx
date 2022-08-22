import dynamic from 'next/dynamic';

import DatePicker from 'react-datepicker';

export const DatePickerDynamic = dynamic(
	() => import('react-datepicker')
) as typeof DatePicker;
