import React from 'react';

/**
 * Prophecy props.
 * @startingPoint section="Content" subtitle="Canon prophecy / quote block" viewport="900x300"
 */
export interface ProphecyProps {
  children?: React.ReactNode;
  /** Mono attribution line below the quote. */
  cite?: React.ReactNode;
  /** Show the centered hairline rule above the quote. */
  rule?: boolean;
  align?: 'center' | 'left';
  /** Text color of the quote. */
  variant?: 'gold' | 'nebula' | 'bright';
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * The canon quote / scripture block — large italic Cormorant with a mono attribution.
 * The voice of the Chaos Bible.
 */
export function Prophecy(props: ProphecyProps): JSX.Element;
