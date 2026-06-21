import React from 'react';

export interface SwitchProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, e: any) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  [key: string]: any;
}

/** A beveled glass toggle whose track glows gold when on. Controlled or uncontrolled. */
export function Switch(props: SwitchProps): JSX.Element;
