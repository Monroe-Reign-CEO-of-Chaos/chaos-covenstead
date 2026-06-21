import React from 'react';

/**
 * Eyebrow — a small mono kicker above a title. The "system voice" of the brand:
 * wide letter-spacing, uppercase, nebula or gold.
 */
export function Eyebrow({ tone = 'nebula', children, style = {}, ...rest }) {
  const tones = {
    nebula: 'var(--nebula)',
    gold:   'var(--gold)',
    violet: 'var(--violet)',
    muted:  'var(--text-muted)',
  };
  return (
    <span
      style={{
        display: 'block',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '0.62rem',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
