import React from 'react';

/**
 * Button props.
 * @startingPoint section="Core" subtitle="Beveled gold-glass action button" viewport="700x200"
 */
export interface ButtonProps {
  /** Visual treatment. `dominion` is the cold "Lie" stamp — use inside `.theme-dominion`. */
  variant?: 'primary' | 'ghost' | 'solid' | 'dominion';
  size?: 'sm' | 'md' | 'lg';
  /** Render as a different element, e.g. 'a' for links. */
  as?: any;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * The Covenstead's primary action. Beveled gold-glass by default; switch to
 * `dominion` for the sterile Montserrat stamp of the Lie.
 */
export function Button(props: ButtonProps): JSX.Element;
