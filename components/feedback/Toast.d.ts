import React from 'react';

export interface ToastProps {
  /** Seam + glyph color. */
  tone?: 'nebula' | 'gold' | 'violet' | 'danger';
  /** Override the leading glyph (defaults to a ritual mark per tone). */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  /** Show a dismiss ✕ and handle it. */
  onDismiss?: () => void;
  style?: React.CSSProperties;
  [key: string]: any;
}

/** A slim glass notification bar with a glowing nebula seam. */
export function Toast(props: ToastProps): JSX.Element;
