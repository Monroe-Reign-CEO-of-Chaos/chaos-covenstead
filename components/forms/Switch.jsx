import React from 'react';

/**
 * Switch — a beveled glass track that glows gold when on. The knob slides on a
 * crystal rail; the whole control lights up in the "on" state.
 */
export function Switch({ label, checked, defaultChecked, onChange, disabled = false, style = {}, ...rest }) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;

  const toggle = (e) => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on, e);
  };

  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }} {...rest}>
      <span
        role="switch"
        aria-checked={on}
        tabIndex={disabled ? -1 : 0}
        onClick={toggle}
        onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(e); } }}
        style={{
          position: 'relative', width: 44, height: 24, flexShrink: 0,
          border: `1px solid ${on ? 'var(--gold)' : 'var(--glass-border)'}`,
          background: on ? 'rgba(212,169,75,0.18)' : 'rgba(10,8,20,0.6)',
          clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
          boxShadow: on ? '0 0 16px rgba(212,169,75,0.32)' : 'none', transition: 'all 0.3s',
        }}
      >
        <span style={{
          position: 'absolute', top: 2, left: on ? 22 : 2, width: 18, height: 18,
          background: on ? 'linear-gradient(135deg, var(--gold-bright), var(--gold-deep))' : 'var(--text-dim)',
          transition: 'left 0.3s cubic-bezier(0.8,0,0.2,1), background 0.3s',
        }} />
      </span>
      {label && (
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', color: 'var(--text-bright)' }}>{label}</span>
      )}
    </label>
  );
}
