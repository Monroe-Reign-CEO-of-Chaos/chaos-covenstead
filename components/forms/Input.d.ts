import React from 'react';

export interface InputProps {
  /** Mono uppercase label above the field. */
  label?: string;
  /** Helper / error text below the field. */
  hint?: string;
  /** Error state — red border + hint. */
  invalid?: boolean;
  id?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

/** A glass text field with a mono label and nebula-blue focus glow. */
export function Input(props: InputProps): JSX.Element;
