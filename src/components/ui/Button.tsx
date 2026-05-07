import classnames from 'classnames';
import { type ReactNode, type ElementType } from 'react';

type ButtonMode = string;
type ButtonLocation = string;
type IconPosition = 'before' | 'after';

type ButtonProps = {
  label?: string;
  ariaLabel?: string;
  mode?: ButtonMode;
  location?: ButtonLocation;
  iconName?: string | ReactNode;
  iconPosition?: IconPosition;
  className?: string;
  iconSize?: string;
} & (
  | { href?: string; onClick?: never; type?: never }
  | { href?: never; onClick?: () => void; type?: 'button' | 'submit' | 'reset' }
  );

const Button = (props: ButtonProps) => {
  const {
    label,
    ariaLabel,
    mode,
    location,
    href,
    iconName,
    iconPosition = 'after',
    className,
    iconSize = '',
    ...rest
  } = props;

  const title = label || '';
  const isLink = !!href;
  const Component = (isLink ? 'a' : 'button') as ElementType;

  const linkProps = isLink
    ? { href, role: 'button' }
    : { type: 'button', ...rest };

  const iconComponent = typeof iconName === 'string'
    ? (
      <svg
        width={iconSize}
        height={iconSize}
        className="button__icon"
        role="img"
        aria-label={ariaLabel || title}
      >
        <use href={`/media-temp/icons/sprite.svg#icon-${iconName}`} />
      </svg>
    )
    : iconName;

  return (
    <Component
      className={classnames(
        'button',
        `button--${mode}`,
        location && `button-${location}`,
        className
      )}
      title={title}
      aria-label={title || ariaLabel}
      {...linkProps}
    >
      {iconPosition === 'before' && iconComponent}
      {title && <span className="button__label">{title}</span>}
      {iconPosition === 'after' && iconComponent}
    </Component>
  );
};

export default Button;