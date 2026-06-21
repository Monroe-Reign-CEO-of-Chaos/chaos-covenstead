import React from 'react';

/**
 * SectionHeading — the standard section opener: mono eyebrow, a short gradient
 * accent bar, then a tracked-out Cinzel title. Keeps section intros consistent
 * across archive, lore, and product pages.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent = 'gold',
  align = 'left',
  style = {},
  ...rest
}) {
  const bars = {
    gold:   'linear-gradient(90deg, var(--gold), var(--nebula))',
    nebula: 'linear-gradient(90deg, var(--nebula), var(--gold))',
    violet: 'linear-gradient(90deg, var(--nebula), var(--violet))',
  };

  return (
    <header style={{ textAlign: align, ...style }} {...rest}>
      {eyebrow && (
        <span style={{
          display: 'block',
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.62rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--nebula)',
          marginBottom: '1rem',
        }}>
          {eyebrow}
        </span>
      )}
      <div style={{
        width: 60,
        height: 2,
        background: bars[accent],
        borderRadius: 2,
        marginBottom: '1.8rem',
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
      }} />
      <h2 style={{
        fontFamily: "'Cinzel Decorative', serif",
        fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: 'var(--gold-bright)',
        lineHeight: 1.2,
        margin: 0,
      }}>
        {title}
      </h2>
    </header>
  );
}
