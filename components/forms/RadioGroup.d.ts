import React from 'react';

export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioGroupProps {
  name?: string;
  label?: string;
  options: (string | RadioOption)[];
  /** Controlled selected value. Omit for uncontrolled (use defaultValue). */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, e: any) => void;
  style?: React.CSSProperties;
  [key: string]: any;
}

/** A single-choice group whose markers fill with a nebula-blue dot. */
export function RadioGroup(props: RadioGroupProps): JSX.Element;
