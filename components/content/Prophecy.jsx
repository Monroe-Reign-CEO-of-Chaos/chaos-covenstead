import React from 'react';

/**
 * Prophecy — the brand's canon quote / scripture block. Large italic Cormorant,
 * an optional centered rule above, and a mono attribution line. This is the voice
 * of the Chaos Bible: declarative, mythic, second-person.
 */
export function Prophecy({
  children,
  cite,
  rule = true,
  align = 'center',
  variant = 'gold',
  style = {},
  ...rest
}) {
  const colors = {
    gold:   'var(--gold-bright)',
    nebula: 'var(--nebula-bright)',
    bright: 'var(--text-bright)',
  };

  return (
    <figure style={{ textAlign: align, margin: 0, ...style }} {...rest}>
      {rule && (
        <div style={{
          width: 160,
          height: 1,
          background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
          margin: align === 'center' ? '0 auto 2.5rem' : '0 0 2.5rem',
        }} />
      )}
      <blockquote style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic',
        fontWeight: 300,
        fontSize: 'clamp(1.3rem, 3vw, 1.85rem)',
        lineHeight: 1.65,
        color: colors[variant],
        opacity: 0.95,
        margin: 0,
        maxWidth: 820,
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
      }}>
        {children}
      </blockquote>
      {cite && (
        <figcaption style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginTop: '1.5rem',
        }}>
          {cite}
        </figcaption>
      )}
    </figure>
  );
}
