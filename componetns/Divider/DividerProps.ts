import { DetailedHTMLProps, InputHTMLAttributes } from 'react';


export interface DividerProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLHRElement>, HTMLHRElement> {
    className?: string;
}
