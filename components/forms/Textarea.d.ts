import React from 'react';

export interface TextareaProps {
  label?: string;
  hint?: string;
  invalid?: boolean;
  rows?: number;
  id?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}

/** Multi-line glass text field — the companion to Input. */
export function Textarea(props: TextareaProps): JSX.Element;
