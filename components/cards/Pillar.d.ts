import React from 'react';

export interface PillarProps {
  /** Glyph or node shown above the title (e.g. a rune character or icon). */
  icon?: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}

/** A beveled glass panel for the "three roles / three pillars" pattern: icon + Cinzel title + Cormorant body. */
export function Pillar(props: PillarProps): JSX.Element;
