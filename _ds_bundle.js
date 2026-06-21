/* @ds-bundle: {"format":3,"namespace":"ChaosCovensteadDesignSystem_4ee2b6","components":[{"name":"GlassCard","sourcePath":"components/cards/GlassCard.jsx"},{"name":"Pillar","sourcePath":"components/cards/Pillar.jsx"},{"name":"Prophecy","sourcePath":"components/content/Prophecy.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"PulseRule","sourcePath":"components/core/PulseRule.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/cards/GlassCard.jsx":"dc37fbd55f7c","components/cards/Pillar.jsx":"5ccbb88d9a56","components/content/Prophecy.jsx":"8d16b04ed4cc","components/content/SectionHeading.jsx":"18ec7c225027","components/core/Badge.jsx":"5d4cc903186a","components/core/Button.jsx":"21a0ceb9c450","components/core/Eyebrow.jsx":"a7baf53a3ebd","components/core/PulseRule.jsx":"6d270a1b6332","components/feedback/Dialog.jsx":"35fb7e855d6c","components/feedback/Toast.jsx":"64d86109bda3","components/feedback/Tooltip.jsx":"513e8d8b52e7","components/forms/Checkbox.jsx":"6d59114494d4","components/forms/Input.jsx":"d74dc7199d1e","components/forms/RadioGroup.jsx":"ad5726a1b5e7","components/forms/Select.jsx":"cb053c8491d5","components/forms/Switch.jsx":"baad863331d7","components/forms/Textarea.jsx":"bc37b6966ddf","components/navigation/Accordion.jsx":"527c77e25164","components/navigation/NavBar.jsx":"856a12a4d9e1","components/navigation/Tabs.jsx":"eb1f30dbb539"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChaosCovensteadDesignSystem_4ee2b6 = window.ChaosCovensteadDesignSystem_4ee2b6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/GlassCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlassCard — the nebula-glass artifact surface. Thin metal border, dark glass fill,
 * a luminous accent seam across the top, and a glow-lift on hover. The brand's
 * default container for dossiers, archive entries, and canon objects.
 */
function GlassCard({
  accent = 'nebula',
  hover = true,
  children,
  style = {},
  ...rest
}) {
  const accents = {
    nebula: {
      border: 'rgba(168,220,238,0.22)',
      borderHover: 'rgba(168,220,238,0.38)',
      seam: 'linear-gradient(90deg, transparent, var(--nebula), var(--gold), transparent)',
      fill: 'linear-gradient(135deg, rgba(168,220,238,0.05), rgba(5,5,10,0.8))',
      glow: '0 16px 40px rgba(168,220,238,0.1)'
    },
    gold: {
      border: 'rgba(212,169,75,0.22)',
      borderHover: 'rgba(212,169,75,0.38)',
      seam: 'linear-gradient(90deg, var(--gold), transparent)',
      fill: 'linear-gradient(135deg, rgba(212,169,75,0.04), rgba(5,5,10,0.75))',
      glow: '0 12px 32px rgba(212,169,75,0.08)'
    },
    violet: {
      border: 'rgba(139,92,246,0.24)',
      borderHover: 'rgba(139,92,246,0.42)',
      seam: 'linear-gradient(90deg, transparent, var(--violet), var(--rose), transparent)',
      fill: 'linear-gradient(135deg, rgba(139,92,246,0.05), rgba(5,5,10,0.8))',
      glow: '0 16px 40px rgba(139,92,246,0.12)'
    }
  };
  const a = accents[accent] || accents.nebula;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      border: `1px solid ${a.border}`,
      background: a.fill,
      borderRadius: '2px',
      padding: '2rem',
      overflow: 'hidden',
      transition: 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
      ...style
    },
    onMouseEnter: hover ? e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.borderColor = a.borderHover;
      e.currentTarget.style.boxShadow = a.glow;
    } : undefined,
    onMouseLeave: hover ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = a.border;
      e.currentTarget.style.boxShadow = 'none';
    } : undefined
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '2px',
      background: a.seam,
      opacity: 0.6
    }
  }), children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/Pillar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pillar — a beveled (angled-corner) glass panel for the "three roles" pattern:
 * an icon glyph, a Cinzel title, and a Cormorant body. Hover lifts the border and
 * casts a violet glow. The signature clip-path shape ties it to the CTA.
 */
function Pillar({
  icon,
  title,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      flex: 1,
      minWidth: 240,
      maxWidth: 320,
      padding: '2.5rem 2rem',
      background: 'rgba(10,8,22,0.72)',
      border: '1px solid rgba(212,169,75,0.22)',
      backdropFilter: 'blur(12px)',
      clipPath: 'polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%)',
      textAlign: 'center',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'rgba(212,169,75,0.45)';
      e.currentTarget.style.boxShadow = '0 0 35px rgba(139,92,246,0.18)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'rgba(212,169,75,0.22)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), icon != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.6rem',
      marginBottom: '1rem',
      display: 'block'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Cinzel Decorative', serif",
      fontSize: '0.72rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--gold)',
      marginBottom: '0.9rem'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: 'italic',
      fontSize: '0.95rem',
      lineHeight: 1.75,
      color: 'var(--text-cool-muted)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { Pillar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Pillar.jsx", error: String((e && e.message) || e) }); }

// components/content/Prophecy.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Prophecy — the brand's canon quote / scripture block. Large italic Cormorant,
 * an optional centered rule above, and a mono attribution line. This is the voice
 * of the Chaos Bible: declarative, mythic, second-person.
 */
function Prophecy({
  children,
  cite,
  rule = true,
  align = 'center',
  variant = 'gold',
  style = {},
  ...rest
}) {
  const colors = {
    gold: 'var(--gold-bright)',
    nebula: 'var(--nebula-bright)',
    bright: 'var(--text-bright)'
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      textAlign: align,
      margin: 0,
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 160,
      height: 1,
      background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      margin: align === 'center' ? '0 auto 2.5rem' : '0 0 2.5rem'
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
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
      marginRight: align === 'center' ? 'auto' : 0
    }
  }, children), cite && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.6rem',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: '1.5rem'
    }
  }, cite));
}
Object.assign(__ds_scope, { Prophecy });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Prophecy.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionHeading — the standard section opener: mono eyebrow, a short gradient
 * accent bar, then a tracked-out Cinzel title. Keeps section intros consistent
 * across archive, lore, and product pages.
 */
function SectionHeading({
  eyebrow,
  title,
  accent = 'gold',
  align = 'left',
  style = {},
  ...rest
}) {
  const bars = {
    gold: 'linear-gradient(90deg, var(--gold), var(--nebula))',
    nebula: 'linear-gradient(90deg, var(--nebula), var(--gold))',
    violet: 'linear-gradient(90deg, var(--nebula), var(--violet))'
  };
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.62rem',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: 'var(--nebula)',
      marginBottom: '1rem'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 2,
      background: bars[accent],
      borderRadius: 2,
      marginBottom: '1.8rem',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Cinzel Decorative', serif",
      fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)',
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--gold-bright)',
      lineHeight: 1.2,
      margin: 0
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a mono system tag. Used for canon status ("Entombed — Echo Chamber I"),
 * book labels, and small categorical markers. Wide-tracked, uppercase, hairline border.
 */
function Badge({
  tone = 'nebula',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    nebula: {
      color: 'var(--nebula)',
      borderColor: 'rgba(168,220,238,0.25)'
    },
    gold: {
      color: 'var(--gold)',
      borderColor: 'rgba(212,169,75,0.30)'
    },
    violet: {
      color: 'var(--violet)',
      borderColor: 'rgba(139,92,246,0.32)'
    },
    pulse: {
      color: 'var(--pulse-amber)',
      borderColor: 'rgba(245,158,11,0.32)'
    },
    muted: {
      color: 'var(--text-muted)',
      borderColor: 'rgba(154,142,122,0.25)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.55rem',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      padding: '0.32em 0.9em',
      border: '1px solid',
      borderRadius: '2px',
      background: 'rgba(5,5,10,0.4)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the Covenstead's primary action surface.
 *
 * Two worlds in one component:
 *  - Covenstead variants (default): beveled, glass, gold-on-night, glow on hover.
 *  - Dominion variant: sharp rectangular stamp, heavy Montserrat tracking (the Lie).
 */
function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: '0.62rem',
      padding: '0.6rem 1.6rem',
      letterSpacing: '0.3em'
    },
    md: {
      fontSize: '0.7rem',
      padding: '0.85rem 2.4rem',
      letterSpacing: '0.32em'
    },
    lg: {
      fontSize: '0.78rem',
      padding: '1.05rem 3.2rem',
      letterSpacing: '0.34em'
    }
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
    ...sizes[size]
  };
  const variants = {
    // Beveled gold-glass — the sovereign CTA
    primary: {
      color: 'var(--gold-bright)',
      background: 'rgba(10,8,20,0.65)',
      borderColor: 'rgba(212,169,75,0.38)',
      backdropFilter: 'blur(12px)',
      clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)'
    },
    // Quiet ghost — nebula outline
    ghost: {
      color: 'var(--nebula)',
      background: 'transparent',
      borderColor: 'rgba(168,220,238,0.3)',
      clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)'
    },
    // Solid gradient — high emphasis
    solid: {
      color: 'var(--night)',
      background: 'linear-gradient(135deg, var(--gold-bright), var(--gold-deep))',
      borderColor: 'transparent',
      fontWeight: 700,
      clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)'
    },
    // The Lie — Dominion stamp (use inside .theme-dominion)
    dominion: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      color: 'var(--dom-white)',
      background: 'var(--dom-black)',
      borderColor: 'var(--dom-black)',
      letterSpacing: '0.45em',
      clipPath: 'none'
    }
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
    }
  };
  const Tag = as;
  const fx = hoverFx[variant] || hoverFx.primary;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => fx(e, true),
    onMouseLeave: e => fx(e, false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — a small mono kicker above a title. The "system voice" of the brand:
 * wide letter-spacing, uppercase, nebula or gold.
 */
function Eyebrow({
  tone = 'nebula',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    nebula: 'var(--nebula)',
    gold: 'var(--gold)',
    violet: 'var(--violet)',
    muted: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'block',
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.62rem',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/PulseRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PulseRule — the brand's signature divider. A thin gradient seam (gold → violet →
 * rose) with a soft glow. Echoes the EKG heartbeat line that "cracks through the world."
 * Use `variant="ekg"` for the literal heartbeat blip path.
 */
function PulseRule({
  variant = 'gradient',
  width = '100%',
  style = {},
  ...rest
}) {
  if (variant === 'ekg') {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 600 40",
      preserveAspectRatio: "none",
      style: {
        width,
        height: 40,
        overflow: 'visible',
        display: 'block',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "cc-ekg",
      x1: "0%",
      y1: "0%",
      x2: "100%",
      y2: "0%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "transparent"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "22%",
      stopColor: "var(--violet)"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "42%",
      stopColor: "var(--gold)"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "50%",
      stopColor: "var(--rose)"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "58%",
      stopColor: "var(--gold)"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "78%",
      stopColor: "var(--violet)"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "transparent"
    }))), /*#__PURE__*/React.createElement("path", {
      d: "M0,20 L210,20 L235,20 L250,7 L266,33 L282,12 L300,20 L600,20",
      fill: "none",
      stroke: "url(#cc-ekg)",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      style: {
        filter: 'drop-shadow(0 0 4px rgba(212,169,75,0.6)) drop-shadow(0 0 12px rgba(139,92,246,0.4))'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width,
      height: '2px',
      background: 'linear-gradient(90deg, transparent, var(--gold) 25%, var(--violet) 50%, var(--rose) 75%, transparent)',
      opacity: 0.5,
      filter: 'drop-shadow(0 0 6px rgba(212,169,75,0.5))',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { PulseRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PulseRule.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Dialog — a centered glass panel inside a gold filigree frame, over a blurred
 * obsidian scrim. The brand's "a prophecy is revealed" moment. Controlled via `open`.
 */
function Dialog({
  open,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  width = 460,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'rgba(5,5,10,0.72)',
      backdropFilter: 'blur(8px)',
      animation: 'cc-fade 0.3s ease both'
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes cc-fade{from{opacity:0}to{opacity:1}}@keyframes cc-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}`), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      background: 'linear-gradient(135deg, rgba(139,92,246,0.06), rgba(10,8,20,0.94))',
      border: '1px solid var(--glass-border)',
      padding: '2.6rem 2.4rem',
      boxShadow: '0 0 60px rgba(139,92,246,0.18), 0 24px 60px rgba(0,0,0,0.6)',
      animation: 'cc-rise 0.4s cubic-bezier(0.25,0.46,0.45,0.94) both',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '0.6rem',
      border: '1px solid rgba(212,169,75,0.16)',
      pointerEvents: 'none'
    }
  }), ['tl', 'tr', 'bl', 'br'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      position: 'absolute',
      width: 28,
      height: 28,
      borderColor: 'rgba(212,169,75,0.4)',
      borderStyle: 'solid',
      pointerEvents: 'none',
      top: c[0] === 't' ? '0.3rem' : 'auto',
      bottom: c[0] === 'b' ? '0.3rem' : 'auto',
      left: c[1] === 'l' ? '0.3rem' : 'auto',
      right: c[1] === 'r' ? '0.3rem' : 'auto',
      borderWidth: `${c[0] === 't' ? '1px' : '0'} ${c[1] === 'r' ? '1px' : '0'} ${c[0] === 'b' ? '1px' : '0'} ${c[1] === 'l' ? '1px' : '0'}`
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      width: 28,
      height: 28,
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      fontSize: '1rem',
      cursor: 'pointer',
      lineHeight: 1,
      fontFamily: "'Share Tech Mono', monospace"
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--gold)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-muted)'
  }, "\u2715"), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.58rem',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: 'var(--nebula)',
      display: 'block',
      marginBottom: '0.9rem',
      textAlign: 'center'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Cinzel Decorative', serif",
      fontSize: '1.2rem',
      fontWeight: 700,
      letterSpacing: '0.06em',
      color: 'var(--gold-bright)',
      textAlign: 'center',
      margin: '0 0 1.2rem'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontStyle: 'italic',
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: 'rgba(245,240,255,0.82)',
      textAlign: 'center'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.8rem',
      justifyContent: 'center',
      marginTop: '2rem'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toast — a slim glass bar with a luminous nebula seam down its leading edge.
 * Use for transient confirmations ("The Index was recorded"). Tone sets the seam
 * and icon glyph color.
 */
function Toast({
  tone = 'nebula',
  icon,
  children,
  onDismiss,
  style = {},
  ...rest
}) {
  const tones = {
    nebula: {
      seam: 'var(--nebula)',
      glyph: '⬡',
      color: 'var(--nebula-bright)'
    },
    gold: {
      seam: 'var(--gold)',
      glyph: '◆',
      color: 'var(--gold-bright)'
    },
    violet: {
      seam: 'var(--violet)',
      glyph: '◈',
      color: 'var(--violet)'
    },
    danger: {
      seam: 'var(--pulse-fire)',
      glyph: '✕',
      color: 'var(--pulse-fire)'
    }
  };
  const t = tones[tone] || tones.nebula;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      minWidth: 280,
      maxWidth: 440,
      padding: '0.85rem 1.1rem 0.85rem 1.3rem',
      background: 'rgba(10,8,20,0.92)',
      border: '1px solid var(--glass-border)',
      borderRadius: '2px',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 12px 36px rgba(0,0,0,0.5)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '3px',
      background: t.seam,
      boxShadow: `0 0 12px ${t.seam}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.color,
      fontSize: '0.85rem',
      flexShrink: 0,
      fontFamily: "'Share Tech Mono', monospace"
    }
  }, icon || t.glyph), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.02rem',
      color: 'var(--text-bright)',
      flex: 1,
      lineHeight: 1.4
    }
  }, children), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-dim)',
      cursor: 'pointer',
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.7rem',
      flexShrink: 0
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--gold)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-dim)'
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Tooltip — a small mono-caps glass chip shown on hover/focus of its child.
 * Wrap any element; the tip floats above (default) with a nebula hairline.
 */
function Tooltip({
  label,
  placement = 'top',
  children,
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginBottom: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginRight: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      marginLeft: 8
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos[placement],
      zIndex: 200,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.54rem',
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--nebula-bright)',
      background: 'rgba(5,5,10,0.95)',
      border: '1px solid var(--glass-border-nebula)',
      borderRadius: '2px',
      padding: '0.4rem 0.7rem',
      boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
      opacity: show ? 1 : 0,
      transition: 'opacity 0.2s',
      transitionDelay: show ? '0.05s' : '0s'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — ritual-marked. An uncontrolled-friendly glass box that checks with a
 * gold diamond (◆) and casts a soft gold glow when selected.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.7rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    tabIndex: disabled ? -1 : 0,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle(e);
      }
    },
    style: {
      width: 20,
      height: 20,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1px solid ${on ? 'var(--gold)' : 'var(--glass-border)'}`,
      borderRadius: '2px',
      background: on ? 'rgba(212,169,75,0.12)' : 'rgba(10,8,20,0.6)',
      color: 'var(--gold-bright)',
      fontSize: '0.7rem',
      lineHeight: 1,
      boxShadow: on ? '0 0 14px rgba(212,169,75,0.3)' : 'none',
      transition: 'all 0.2s'
    }
  }, on ? '◆' : ''), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.05rem',
      color: 'var(--text-bright)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — a glass text field. Hairline gold border, dark glass fill, a mono
 * uppercase label, and a nebula-blue focus glow (no harsh outline). Inscribing
 * into the Index.
 */
function Input({
  label,
  hint,
  invalid = false,
  id,
  style = {},
  ...rest
}) {
  const fid = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.58rem',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.05rem',
      color: 'var(--text-bright)',
      background: 'rgba(10,8,20,0.6)',
      border: `1px solid ${invalid ? 'var(--pulse-fire)' : 'var(--glass-border)'}`,
      borderRadius: '2px',
      padding: '0.7rem 0.9rem',
      outline: 'none',
      width: '100%',
      transition: 'border-color 0.25s, box-shadow 0.25s'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--pulse-fire)' : 'var(--nebula)';
      e.currentTarget.style.boxShadow = invalid ? '0 0 0 3px rgba(232,99,10,0.14)' : '0 0 0 3px rgba(168,220,238,0.12), 0 0 18px rgba(168,220,238,0.12)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--pulse-fire)' : 'var(--glass-border)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.52rem',
      letterSpacing: '0.18em',
      color: invalid ? 'var(--pulse-fire)' : 'var(--text-dim)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RadioGroup — a vertical set of single-choice options. Each marker fills with a
 * nebula-blue dot and glows when selected. Controlled or uncontrolled.
 */
function RadioGroup({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  label,
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = isControlled ? value : internal;
  const pick = (val, e) => {
    if (!isControlled) setInternal(val);
    onChange && onChange(val, e);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup",
    "aria-label": label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.58rem',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: '0.1rem'
    }
  }, label), options.map((o, i) => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    const on = current === val;
    return /*#__PURE__*/React.createElement("label", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.7rem',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      role: "radio",
      "aria-checked": on,
      tabIndex: 0,
      onClick: e => pick(val, e),
      onKeyDown: e => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          pick(val, e);
        }
      },
      style: {
        width: 20,
        height: 20,
        flexShrink: 0,
        borderRadius: '999px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${on ? 'var(--nebula)' : 'var(--glass-border)'}`,
        background: 'rgba(10,8,20,0.6)',
        boxShadow: on ? '0 0 14px rgba(168,220,238,0.3)' : 'none',
        transition: 'all 0.2s'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '999px',
        background: on ? 'var(--nebula-bright)' : 'transparent',
        transition: 'background 0.2s'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.05rem',
        color: 'var(--text-bright)'
      }
    }, lab));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — a glass dropdown. Styled native <select> with a gold caret, mono label,
 * and nebula focus glow. Options are passed as an array or as <option> children.
 */
function Select({
  label,
  hint,
  options,
  invalid = false,
  id,
  children,
  style = {},
  ...rest
}) {
  const fid = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const caret = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23D4A94B' stroke-width='1.5'/%3E%3C/svg%3E";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.58rem',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.05rem',
      color: 'var(--text-bright)',
      background: `rgba(10,8,20,0.6) url("${caret}") no-repeat right 0.9rem center`,
      border: `1px solid ${invalid ? 'var(--pulse-fire)' : 'var(--glass-border)'}`,
      borderRadius: '2px',
      padding: '0.7rem 2.2rem 0.7rem 0.9rem',
      outline: 'none',
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      cursor: 'pointer',
      transition: 'border-color 0.25s, box-shadow 0.25s'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--nebula)';
      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(168,220,238,0.12), 0 0 18px rgba(168,220,238,0.12)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--pulse-fire)' : 'var(--glass-border)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), options ? options.map((o, i) => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: val,
      style: {
        background: '#0A0A14'
      }
    }, lab);
  }) : children), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.52rem',
      letterSpacing: '0.18em',
      color: invalid ? 'var(--pulse-fire)' : 'var(--text-dim)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — a beveled glass track that glows gold when on. The knob slides on a
 * crystal rail; the whole control lights up in the "on" state.
 */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on, e);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.7rem',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    tabIndex: disabled ? -1 : 0,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle(e);
      }
    },
    style: {
      position: 'relative',
      width: 44,
      height: 24,
      flexShrink: 0,
      border: `1px solid ${on ? 'var(--gold)' : 'var(--glass-border)'}`,
      background: on ? 'rgba(212,169,75,0.18)' : 'rgba(10,8,20,0.6)',
      clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
      boxShadow: on ? '0 0 16px rgba(212,169,75,0.32)' : 'none',
      transition: 'all 0.3s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 22 : 2,
      width: 18,
      height: 18,
      background: on ? 'linear-gradient(135deg, var(--gold-bright), var(--gold-deep))' : 'var(--text-dim)',
      transition: 'left 0.3s cubic-bezier(0.8,0,0.2,1), background 0.3s'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.05rem',
      color: 'var(--text-bright)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — the multi-line companion to Input. Same glass field, mono label,
 * and nebula focus glow; vertical resize only.
 */
function Textarea({
  label,
  hint,
  invalid = false,
  rows = 4,
  id,
  style = {},
  ...rest
}) {
  const fid = id || (label ? 'ta-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.58rem',
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    style: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.05rem',
      lineHeight: 1.6,
      color: 'var(--text-bright)',
      background: 'rgba(10,8,20,0.6)',
      border: `1px solid ${invalid ? 'var(--pulse-fire)' : 'var(--glass-border)'}`,
      borderRadius: '2px',
      padding: '0.7rem 0.9rem',
      outline: 'none',
      width: '100%',
      resize: 'vertical',
      transition: 'border-color 0.25s, box-shadow 0.25s'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--nebula)';
      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(168,220,238,0.12), 0 0 18px rgba(168,220,238,0.12)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--pulse-fire)' : 'var(--glass-border)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: '0.52rem',
      letterSpacing: '0.18em',
      color: invalid ? 'var(--pulse-fire)' : 'var(--text-dim)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
/**
 * Accordion — stacked glass rows that open with a gold seam. Each row reveals its
 * body with a smooth height transition and a rotating ◆ marker. Allows one or many
 * open at once.
 */
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  style = {}
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = id => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) next.delete(id);else next.add(id);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(212,169,75,0.12)',
      ...style
    }
  }, items.map(it => {
    const on = open.has(it.id);
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        borderBottom: '1px solid rgba(212,169,75,0.12)',
        position: 'relative'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '2px',
        height: '100%',
        background: 'linear-gradient(180deg, var(--gold), transparent)'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(it.id),
      "aria-expanded": on,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        padding: '1.2rem 0.4rem',
        fontFamily: "'Cinzel Decorative', serif",
        fontSize: '0.82rem',
        fontWeight: 700,
        letterSpacing: '0.05em',
        color: on ? 'var(--gold-bright)' : 'var(--text-bright)',
        transition: 'color 0.3s'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = 'var(--gold)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-bright)';
      }
    }, /*#__PURE__*/React.createElement("span", null, it.title), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gold)',
        fontSize: '0.6rem',
        flexShrink: 0,
        transform: on ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s'
      }
    }, "\u25C6")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        transition: 'grid-template-rows 0.35s cubic-bezier(0.25,0.46,0.45,0.94)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 0.4rem 1.4rem',
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: '1.05rem',
        lineHeight: 1.8,
        color: 'var(--text-muted)'
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NavBar — the fixed Covenstead masthead: a gradient Cinzel logo on the left,
 * mono/Cinzel links on the right, a translucent obsidian bar with a hairline gold
 * border and heavy backdrop blur. Pass a `dominion` theme for the cold white variant.
 */
function NavBar({
  logo = 'Chaos Covenstead',
  links = [],
  theme = 'covenstead',
  style = {},
  ...rest
}) {
  const dominion = theme === 'dominion';
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
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
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: dominion ? {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 700,
      fontSize: '0.65rem',
      letterSpacing: '0.5em',
      textTransform: 'uppercase',
      color: 'var(--dom-black)'
    } : {
      fontFamily: "'Cinzel Decorative', serif",
      fontWeight: 700,
      fontSize: '0.72rem',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      background: 'linear-gradient(135deg, var(--gold), var(--rose))',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, logo), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      alignItems: 'center'
    }
  }, links.map((l, i) => {
    const label = typeof l === 'string' ? l : l.label;
    const href = typeof l === 'string' ? '#' : l.href || '#';
    const active = typeof l === 'object' && l.active;
    return /*#__PURE__*/React.createElement("li", {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: href,
      style: dominion ? {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '0.6rem',
        fontWeight: 600,
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: active ? 'var(--dom-black)' : 'var(--dom-silver)',
        textDecoration: 'none',
        transition: 'color 0.2s'
      } : {
        fontFamily: "'Cinzel Decorative', serif",
        fontSize: '0.58rem',
        letterSpacing: '0.18em',
        color: active ? 'var(--gold)' : 'var(--text-cool-muted)',
        textDecoration: 'none',
        transition: 'color 0.3s, text-shadow 0.3s'
      },
      onMouseEnter: e => {
        e.currentTarget.style.color = dominion ? 'var(--dom-black)' : 'var(--gold)';
        if (!dominion) e.currentTarget.style.textShadow = '0 0 22px rgba(212,169,75,0.5)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.color = active ? dominion ? 'var(--dom-black)' : 'var(--gold)' : dominion ? 'var(--dom-silver)' : 'var(--text-cool-muted)';
        e.currentTarget.style.textShadow = 'none';
      }
    }, label));
  })));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — mono uppercase labels with a glowing gold underline that slides between
 * them (echoes the EKG pulse line). Controlled or uncontrolled. Renders the active
 * tab's panel below the rail.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const isControlled = value !== undefined;
  const first = tabs[0] && (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].id);
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const current = isControlled ? value : internal;
  const norm = tabs.map(t => typeof t === 'string' ? {
    id: t,
    label: t
  } : t);
  const activeIndex = Math.max(0, norm.findIndex(t => t.id === current));
  const pick = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      position: 'relative',
      display: 'flex',
      gap: '2rem',
      borderBottom: '1px solid rgba(212,169,75,0.12)'
    }
  }, norm.map(t => {
    const on = t.id === current;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(t.id),
      style: {
        position: 'relative',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '0 0 0.9rem',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: '0.62rem',
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: on ? 'var(--gold-bright)' : 'var(--text-muted)',
        transition: 'color 0.3s'
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-bright)';
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.color = 'var(--text-muted)';
      }
    }, t.label);
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: -1,
      height: '2px',
      left: 0,
      width: `${100 / norm.length}%`,
      transform: `translateX(${activeIndex * 100}%)`,
      background: 'linear-gradient(90deg, transparent, var(--gold), var(--rose), transparent)',
      boxShadow: '0 0 10px rgba(212,169,75,0.5)',
      transition: 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)'
    }
  })), norm[activeIndex] && norm[activeIndex].content !== undefined && /*#__PURE__*/React.createElement("div", {
    role: "tabpanel",
    style: {
      paddingTop: '1.6rem',
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '1.1rem',
      lineHeight: 1.8,
      color: 'rgba(245,240,238,0.84)'
    }
  }, norm[activeIndex].content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.Pillar = __ds_scope.Pillar;

__ds_ns.Prophecy = __ds_scope.Prophecy;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.PulseRule = __ds_scope.PulseRule;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
