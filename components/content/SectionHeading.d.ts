import React from 'react';

export interface SectionHeadingProps {
  /** Mono kicker above the title. */
  eyebrow?: string;
  title: string;
  /** Accent-bar gradient direction. */
  accent?: 'gold' | 'nebula' | 'violet';
  align?: 'left' | 'center';
  style?: React.CSSProperties;
  [key: string]: any;
}

/** Standard section opener: mono eyebrow + gradient accent bar + tracked-out Cinzel title. */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
