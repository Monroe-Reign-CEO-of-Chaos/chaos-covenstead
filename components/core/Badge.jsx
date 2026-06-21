import React from 'react';

/**
 * Badge — a mono system tag. Used for canon status ("Entombed — Echo Chamber I"),
 * book labels, and small categorical markers. Wide-tracked, uppercase, hairline border.
 */
export function Badge({ tone = 'nebula', children, style = {}, ...rest }) {
  const tones = {
    nebula: { color: 'var(--nebula)', borderColor: 'rgba(168,220,238,0.25)' },
    gold:   { color: 'var(--gold)', borderColor: 'rgba(212,169,75,0.30)' },
    violet: { color: 'var(--violet)', borderColor: 'rgba(139,92,246,0.32)' },
    pulse:  { color: 'var(--pulse-amber)', borderColor: 'rgba(245,158,11,0.32)' },
    muted:  { color: 'var(--text-muted)', borderColor: 'rgba(154,142,122,0.25)' },
  };

  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '0.55rem',
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        padding: '0.32em 0.9em',
        border: '1px solid',
        borderRadius: '2px',
        background: 'rgba(5,5,10,0.4)',
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
