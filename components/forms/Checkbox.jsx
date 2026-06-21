import React from 'react';

/**
 * Checkbox — ritual-marked. An uncontrolled-friendly glass box that checks with a
 * gold diamond (◆) and casts a soft gold glow when selected.
 */
export function Checkbox({ label, checked, defaultChecked, onChange, disabled = false, style = {}, ...rest }) {
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
      display: 'inline-flex', alignItems: 'center', gap: '0.7rem', cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1, ...style,
    }} {...rest}>
      <span
        role="checkbox"
        aria-checked={on}
        tabIndex={disabled ? -1 : 0}
        onClick={toggle}
        onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(e); } }}
        style={{
          width: 20, height: 20, flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          border: `1px solid ${on ? 'var(--gold)' : 'var(--glass-border)'}`, borderRadius: '2px',
          background: on ? 'rgba(212,169,75,0.12)' : 'rgba(10,8,20,0.6)',
          color: 'var(--gold-bright)', fontSize: '0.7rem', lineHeight: 1,
          boxShadow: on ? '0 0 14px rgba(212,169,75,0.3)' : 'none', transition: 'all 0.2s',
        }}
      >{on ? '◆' : ''}</span>
      {label && (
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', color: 'var(--text-bright)' }}>{label}</span>
      )}
    </label>
  );
}
