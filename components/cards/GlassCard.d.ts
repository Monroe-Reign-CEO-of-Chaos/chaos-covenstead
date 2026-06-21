import React from 'react';

/**
 * GlassCard props.
 * @startingPoint section="Cards" subtitle="Nebula-Glass artifact card" viewport="700x320"
 */
export interface GlassCardProps {
  /** Accent seam + border color. */
  accent?: 'nebula' | 'gold' | 'violet';
  /** Enable the glow-lift hover effect. */
  hover?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * The nebula-glass artifact surface: thin metal border, dark glass fill, a luminous
 * top seam, glow-lift on hover. Default container for dossiers and canon objects.
 */
export function GlassCard(props: GlassCardProps): JSX.Element;
