import React, { ReactNode, DetailedHTMLProps, OptionHTMLAttributes } from "react";

export interface OptionProps extends DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> {
	children: ReactNode;
}