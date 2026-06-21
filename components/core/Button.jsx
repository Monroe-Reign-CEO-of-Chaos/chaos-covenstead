import React from 'react';

/**
 * Button — the Covenstead's primary action surface.
 *
 * Two worlds in one component:
 *  - Covenstead variants (default): beveled, glass, gold-on-night, glow on hover.
 *  - Dominion variant: sharp rectangular stamp, heavy Montserrat tracking (the Lie).
 */
export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { fontSize: '0.62rem', padding: '0.6rem 1.6rem', letterSpacing: '0.3em' },
    md: { fontSize: '0.7rem', padding: '0.85rem 2.4rem', letterSpacing: '0.32em' },
    lg: { fontSize: '0.78rem', padding: '1.05rem 3.2rem', letterSpacing: '0.34em' },
  };

  const base = {
    fontFamily: "'Share Tech Mono', monospace",
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6em',
    cursor: 'pointer',
    border: '1.5px solid transparent',
    transition: 'all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
    whiteSpace: 'nowrap',
    ...sizes[size],
  };

  const variants = {
    // Beveled gold-glass — the sovereign CTA
    primary: {
      color: 'var(--gold-bright)',
      background: 'rgba(10,8,20,0.65)',
      borderColor: 'rgba(212,169,75,0.38)',
      backdropFilter: 'blur(12px)',
      clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
    },
    // Quiet ghost — nebula outline
    ghost: {
      color: 'var(--nebula)',
      background: 'transparent',
      borderColor: 'rgba(168,220,238,0.3)',
      clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
    },
    // Solid gradient — high emphasis
    solid: {
      color: 'var(--night)',
      background: 'linear-gradient(135deg, var(--gold-bright), var(--gold-deep))',
      borderColor: 'transparent',
      fontWeight: 700,
      clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
    },
    // The Lie — Dominion stamp (use inside .theme-dominion)
    dominion: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      color: 'var(--dom-white)',
      background: 'var(--dom-black)',
      borderColor: 'var(--dom-black)',
      letterSpacing: '0.45em',
      clipPath: 'none',
    },
  };

  const hoverFx = {
    primary: (e, on) => {
      e.currentTarget.style.borderColor = on ? 'var(--gold)' : 'rgba(212,169,75,0.38)';
      e.currentTarget.style.color = on ? 'var(--gold)' : 'var(--gold-bright)';
      e.currentTarget.style.background = on ? 'rgba(139,92,246,0.1)' : 'rgba(10,8,20,0.65)';
      e.currentTarget.style.boxShadow = on ? '0 0 35px rgba(139,92,246,0.22), 0 0 70px rgba(212,169,75,0.08)' : 'none';
    },
    ghost: (e, on) => {
      e.currentTarget.style.borderColor = on ? 'var(--nebula-bright)' : 'rgba(168,220,238,0.3)';
      e.currentTarget.style.color = on ? 'var(--nebula-bright)' : 'var(--nebula)';
      e.currentTarget.style.boxShadow = on ? '0 0 28px rgba(168,220,238,0.18)' : 'none';
    },
    solid: (e, on) => {
      e.currentTarget.style.filter = on ? 'brightness(1.12)' : 'none';
      e.currentTarget.style.boxShadow = on ? '0 0 32px rgba(212,169,75,0.45)' : 'none';
    },
    dominion: (e, on) => {
      e.currentTarget.style.background = on ? 'transparent' : 'var(--dom-black)';
      e.currentTarget.style.color = on ? 'var(--dom-black)' : 'var(--dom-white)';
    },
  };

  const Tag = as;
  const fx = hoverFx[variant] || hoverFx.primary;

  return (
    <Tag
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={(e) => fx(e, true)}
      onMouseLeave={(e) => fx(e, false)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
