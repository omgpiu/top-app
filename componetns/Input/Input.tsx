import React from 'react';
import { IInput} from './Input.props';
import InputCSS from './Input.module.css'
import cn from 'classnames'

export const Input: React.FC<IInput> = ({ className,...props}): JSX.Element => {

    return (
      <input className={cn(className,InputCSS.input)} {...props}/>
    )
}
