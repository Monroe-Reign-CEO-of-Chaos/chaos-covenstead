import React from 'react';

/**
 * RadioGroup — a vertical set of single-choice options. Each marker fills with a
 * nebula-blue dot and glows when selected. Controlled or uncontrolled.
 */
export function RadioGroup({ name, options = [], value, defaultValue, onChange, label, style = {}, ...rest }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;

  const pick = (val, e) => {
    if (!isControlled) setInternal(val);
    onChange && onChange(val, e);
  };

  return (
    <div role="radiogroup" aria-label={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', ...style }} {...rest}>
      {label && (
        <span style={{
          fontFamily: "'Share Tech Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.28em',
          textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.1rem',
        }}>{label}</span>
      )}
      {options.map((o, i) => {
        const val = typeof o === 'string' ? o : o.value;
        const lab = typeof o === 'string' ? o : o.label;
        const on = current === val;
        return (
          <label key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.7rem', cursor: 'pointer' }}>
            <span
              role="radio"
              aria-checked={on}
              tabIndex={0}
              onClick={(e) => pick(val, e)}
              onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); pick(val, e); } }}
              style={{
                width: 20, height: 20, flexShrink: 0, borderRadius: '999px', display: 'inline-flex',
                alignItems: 'center', justifyContent: 'center',
                border: `1px solid ${on ? 'var(--nebula)' : 'var(--glass-border)'}`,
                background: 'rgba(10,8,20,0.6)',
                boxShadow: on ? '0 0 14px rgba(168,220,238,0.3)' : 'none', transition: 'all 0.2s',
              }}
            >
              <span style={{
                width: 9, height: 9, borderRadius: '999px',
                background: on ? 'var(--nebula-bright)' : 'transparent', transition: 'background 0.2s',
              }} />
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', color: 'var(--text-bright)' }}>{lab}</span>
          </label>
        );
      })}
    </div>
  );
}
