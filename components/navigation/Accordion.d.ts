import React from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Allow multiple rows open at once (default: one). */
  allowMultiple?: boolean;
  /** Ids open on mount. */
  defaultOpen?: string[];
  style?: React.CSSProperties;
}

/** Stacked glass rows that open with a gold seam and a rotating ◆ marker. */
export function Accordion(props: AccordionProps): JSX.Element;
