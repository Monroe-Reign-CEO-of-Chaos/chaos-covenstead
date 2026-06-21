import React from 'react';

/**
 * Tabs — mono uppercase labels with a glowing gold underline that slides between
 * them (echoes the EKG pulse line). Controlled or uncontrolled. Renders the active
 * tab's panel below the rail.
 */
export function Tabs({ tabs = [], value, defaultValue, onChange, style = {} }) {
  const isControlled = value !== undefined;
  const first = tabs[0] && (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].id);
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const current = isControlled ? value : internal;

  const norm = tabs.map((t) => (typeof t === 'string' ? { id: t, label: t } : t));
  const activeIndex = Math.max(0, norm.findIndex((t) => t.id === current));

  const pick = (id) => { if (!isControlled) setInternal(id); onChange && onChange(id); };

  return (
    <div style={style}>
      <div role="tablist" style={{ position: 'relative', display: 'flex', gap: '2rem', borderBottom: '1px solid rgba(212,169,75,0.12)' }}>
        {norm.map((t) => {
          const on = t.id === current;
          return (
            <button
              key={t.id}
              role="tab"
              aria-selected={on}
              onClick={() => pick(t.id)}
              style={{
                position: 'relative', border: 'none', background: 'transparent', cursor: 'pointer',
                padding: '0 0 0.9rem', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.62rem',
                letterSpacing: '0.28em', textTransform: 'uppercase',
                color: on ? 'var(--gold-bright)' : 'var(--text-muted)', transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => { if (!on) e.currentTarget.style.color = 'var(--text-bright)'; }}
              onMouseLeave={(e) => { if (!on) e.currentTarget.style.color = 'var(--text-muted)'; }}
            >{t.label}</button>
          );
        })}
        {/* sliding underline */}
        <span style={{
          position: 'absolute', bottom: -1, height: '2px', left: 0,
          width: `${100 / norm.length}%`,
          transform: `translateX(${activeIndex * 100}%)`,
          background: 'linear-gradient(90deg, transparent, var(--gold), var(--rose), transparent)',
          boxShadow: '0 0 10px rgba(212,169,75,0.5)',
          transition: 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
        }} />
      </div>
      {norm[activeIndex] && norm[activeIndex].content !== undefined && (
        <div role="tabpanel" style={{
          paddingTop: '1.6rem', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', lineHeight: 1.8,
          color: 'rgba(245,240,238,0.84)',
        }}>{norm[activeIndex].content}</div>
      )}
    </div>
  );
}
