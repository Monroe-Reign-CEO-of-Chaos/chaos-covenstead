import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  hint?: string;
  /** Options as strings or `{ value, label }`. Omit to pass <option> children. */
  options?: (string | SelectOption)[];
  invalid?: boolean;
  id?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}

/** A glass dropdown — styled native select with a gold caret. */
export function Select(props: SelectProps): JSX.Element;
