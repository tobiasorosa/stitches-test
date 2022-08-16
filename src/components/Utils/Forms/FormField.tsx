import { Field, FieldAttributes, FieldProps } from 'formik';
import { Input, Label, Stack, Text } from '../../Theme';

interface FormFieldProps<V> {
	children?: (
		props: FieldProps<V>
	) => React.ReactElement | React.ReactElement[] | string | undefined;
	id?: string;
	label?: string;
	helperText?: string;
	tooltip?: string;
	optional?: boolean;
	hideError?: boolean;
}

export function FormField<V = string>(
	props: FormFieldProps<V> & Omit<FieldAttributes<any>, 'children'>
) {
	const { name } = props;
	const {
		id,
		label,
		tooltip,
		optional,
		helperText,
		children,
		hideError,
		display,
		align,
		direction,
		...rest
	} = props;

	return (
		<Field {...rest}>
			{(context: FieldProps<V>) => (
				<>
					<Label id={name}>{label}</Label>
					{children?.(context)}
				</>
			)}
		</Field>
	);
}
