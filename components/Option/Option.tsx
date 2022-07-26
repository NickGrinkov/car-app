import React from 'react'
import { OptionProps } from './Option.props'

const Option = ({ children, className, ...props } : OptionProps) => {
  return (
	<option className={className} {...props}>
		{children}
	</option>
  )
}

export default Option;