import React from 'react';

export interface BadgeProps {
  /** Accent color of the tag. */
  tone?: 'nebula' | 'gold' | 'violet' | 'pulse' | 'muted';
  children?: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}

/** A mono, wide-tracked system tag for canon status, book labels, and categories. */
export function Badge(props: BadgeProps): JSX.Element;
