import React from 'react';

export interface CheckboxProps {
  label?: string;
  /** Controlled checked state. Omit for uncontrolled (use defaultChecked). */
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, e: any) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  [key: string]: any;
}

/** A glass checkbox that checks with a gold diamond (◆). Controlled or uncontrolled. */
export function Checkbox(props: CheckboxProps): JSX.Element;
