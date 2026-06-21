import React from 'react';

export interface NavLink {
  label: string;
  href?: string;
  active?: boolean;
}

/**
 * NavBar props.
 * @startingPoint section="Navigation" subtitle="Covenstead masthead nav" viewport="1100x64"
 */
export interface NavBarProps {
  /** Brand wordmark on the left. */
  logo?: string;
  /** Right-side links — strings or `{ label, href, active }`. */
  links?: (string | NavLink)[];
  /** `covenstead` (dark/gold, default) or `dominion` (cold white "Lie"). */
  theme?: 'covenstead' | 'dominion';
  style?: React.CSSProperties;
  [key: string]: any;
}

/**
 * The fixed masthead: gradient Cinzel logo + tracked links over translucent obsidian
 * with a hairline gold border. `dominion` flips to the sterile white variant.
 */
export function NavBar(props: NavBarProps): JSX.Element;
