import React from 'react';

export function Button({
  children,
  variant = 'primary', // primary | secondary | ghost
  size = 'md', // md | sm
  href,
  onClick,
  target,
  rel,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) {
  const baseClass = `btn btn-${variant} ${size === 'sm' ? 'btn-sm' : ''} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : 16} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : 16} />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto');
    return (
      <a
        href={href}
        className={baseClass}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={baseClass} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
