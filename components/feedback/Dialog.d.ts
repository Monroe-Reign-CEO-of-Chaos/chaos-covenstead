import React from 'react';

export interface DialogProps {
  /** Whether the dialog is shown. */
  open: boolean;
  /** Called on scrim click, close button, or to dismiss. */
  onClose?: () => void;
  /** Cinzel title. */
  title?: string;
  /** Mono kicker above the title. */
  eyebrow?: string;
  children?: React.ReactNode;
  /** Footer node — usually Buttons. */
  footer?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
}

/** A centered glass panel inside a gold filigree frame, over a blurred scrim. */
export function Dialog(props: DialogProps): JSX.Element | null;
