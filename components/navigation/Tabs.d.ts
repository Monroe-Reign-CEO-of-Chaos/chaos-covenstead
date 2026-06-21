import React from 'react';

export interface TabItem {
  id: string;
  label: string;
  /** Optional panel content rendered below the rail when active. */
  content?: React.ReactNode;
}

export interface TabsProps {
  /** Tabs as strings or `{ id, label, content }`. */
  tabs: (string | TabItem)[];
  /** Controlled active id. Omit for uncontrolled (use defaultValue). */
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

/** Mono tab rail with a gold underline that slides between tabs. */
export function Tabs(props: TabsProps): JSX.Element;
