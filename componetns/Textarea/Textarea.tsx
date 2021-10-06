import React from 'react';
import { ITextarea} from './Textarea.props';
import TaCss from './Textarea.module.css'
import cn from 'classnames'

export const Textarea: React.FC<ITextarea> = ({ className,...props}): JSX.Element => {

    return (
      <textarea className={cn(className,TaCss.textarea)} {...props}/>
    )
}
