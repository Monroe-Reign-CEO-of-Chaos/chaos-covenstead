import React from 'react';

export interface TooltipProps {
  /** The tip text (rendered mono-caps). */
  label: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** A small mono-caps glass chip shown on hover/focus of its child. */
export function Tooltip(props: TooltipProps): JSX.Element;
