import { Field, FieldAttributes, FieldProps } from 'formik';
import { Label, Stack, Text, VStack } from '../../Theme';

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
	inputLeftAddon?: JSX.Element;
	inputRightAddon?: JSX.Element;
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
		inputLeftAddon,
		inputRightAddon,
		...rest
	} = props;

	return (
		<Stack>
			<Field {...rest}>
				{(context: FieldProps<V>) => (
					<VStack
						css={{
							width: '100%',
						}}
					>
						<Label
							id={name}
							size='sm'
							css={{
								fontWeight: 600,
								marginBottom: '0.5rem',
								display: 'block',
							}}
						>
							{label}
						</Label>
						<Stack>
							{inputLeftAddon}
							{children?.(context)}
							{inputRightAddon}
						</Stack>
					</VStack>
				)}
			</Field>
		</Stack>
	);
}
