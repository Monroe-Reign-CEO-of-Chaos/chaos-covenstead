import React from 'react';

export interface EyebrowProps {
  tone?: 'nebula' | 'gold' | 'violet' | 'muted';
  children?: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}

/** Small mono uppercase kicker label that sits above a section title. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
