import React from 'react';

/**
 * Accordion — stacked glass rows that open with a gold seam. Each row reveals its
 * body with a smooth height transition and a rotating ◆ marker. Allows one or many
 * open at once.
 */
export function Accordion({ items = [], allowMultiple = false, defaultOpen = [], style = {} }) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));

  const toggle = (id) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  return (
    <div style={{ borderTop: '1px solid rgba(212,169,75,0.12)', ...style }}>
      {items.map((it) => {
        const on = open.has(it.id);
        return (
          <div key={it.id} style={{ borderBottom: '1px solid rgba(212,169,75,0.12)', position: 'relative' }}>
            {on && <span style={{ position: 'absolute', top: 0, left: 0, width: '2px', height: '100%', background: 'linear-gradient(180deg, var(--gold), transparent)' }} />}
            <button
              onClick={() => toggle(it.id)}
              aria-expanded={on}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
                border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'left', padding: '1.2rem 0.4rem',
                fontFamily: "'Cinzel Decorative', serif", fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.05em',
                color: on ? 'var(--gold-bright)' : 'var(--text-bright)', transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => { if (!on) e.currentTarget.style.color = 'var(--gold)'; }}
              onMouseLeave={(e) => { if (!on) e.currentTarget.style.color = 'var(--text-bright)'; }}
            >
              <span>{it.title}</span>
              <span style={{
                color: 'var(--gold)', fontSize: '0.6rem', flexShrink: 0,
                transform: on ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s',
              }}>◆</span>
            </button>
            <div style={{
              display: 'grid', gridTemplateRows: on ? '1fr' : '0fr', transition: 'grid-template-rows 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
            }}>
              <div style={{ overflow: 'hidden' }}>
                <div style={{
                  padding: '0 0.4rem 1.4rem', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem',
                  lineHeight: 1.8, color: 'var(--text-muted)',
                }}>{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
