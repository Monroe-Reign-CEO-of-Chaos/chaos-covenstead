import React from 'react';

/**
 * NavBar — the fixed Covenstead masthead: a gradient Cinzel logo on the left,
 * mono/Cinzel links on the right, a translucent obsidian bar with a hairline gold
 * border and heavy backdrop blur. Pass a `dominion` theme for the cold white variant.
 */
export function NavBar({ logo = 'Chaos Covenstead', links = [], theme = 'covenstead', style = {}, ...rest }) {
  const dominion = theme === 'dominion';

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
        padding: '0 2.5rem',
        background: dominion ? 'rgba(247,247,250,0.95)' : 'rgba(5,5,10,0.72)',
        backdropFilter: 'blur(18px)',
        borderBottom: dominion ? '1px solid var(--dom-plat)' : '1px solid rgba(212,169,75,0.1)',
        ...style,
      }}
      {...rest}
    >
      <span style={dominion ? {
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 700,
        fontSize: '0.65rem',
        letterSpacing: '0.5em',
        textTransform: 'uppercase',
        color: 'var(--dom-black)',
      } : {
        fontFamily: "'Cinzel Decorative', serif",
        fontWeight: 700,
        fontSize: '0.72rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        background: 'linear-gradient(135deg, var(--gold), var(--rose))',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        {logo}
      </span>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
        {links.map((l, i) => {
          const label = typeof l === 'string' ? l : l.label;
          const href = typeof l === 'string' ? '#' : (l.href || '#');
          const active = typeof l === 'object' && l.active;
          return (
            <li key={i}>
              <a
                href={href}
                style={dominion ? {
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: active ? 'var(--dom-black)' : 'var(--dom-silver)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                } : {
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: '0.58rem',
                  letterSpacing: '0.18em',
                  color: active ? 'var(--gold)' : 'var(--text-cool-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.3s, text-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = dominion ? 'var(--dom-black)' : 'var(--gold)';
                  if (!dominion) e.currentTarget.style.textShadow = '0 0 22px rgba(212,169,75,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = active
                    ? (dominion ? 'var(--dom-black)' : 'var(--gold)')
                    : (dominion ? 'var(--dom-silver)' : 'var(--text-cool-muted)');
                  e.currentTarget.style.textShadow = 'none';
                }}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
