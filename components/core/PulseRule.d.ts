import React from 'react';

export interface PulseRuleProps {
  /** `gradient` = thin glowing seam; `ekg` = heartbeat blip line. */
  variant?: 'gradient' | 'ekg';
  width?: string | number;
  style?: React.CSSProperties;
  [key: string]: any;
}

/** The brand's signature divider — a glowing gold→violet→rose seam, or an EKG heartbeat line. */
export function PulseRule(props: PulseRuleProps): JSX.Element;
