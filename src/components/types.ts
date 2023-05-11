import { ButtonProps, SelectProps } from '@mui/material';

export type ButtonComponentProps = Omit<ButtonProps, 'sx'> & {
    isIconOnlyButton?: boolean;
    text?: string;
};

export type FormSelectProps = Omit<SelectProps, 'sx'> & {
    handleChange?: any;
    label?: string;
    labelId?: string;
    options: Array<{
        name: string,
        value: string;
    }>;
}