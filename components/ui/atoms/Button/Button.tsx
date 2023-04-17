import cn from 'classnames';
import styles from './Button.module.scss';
import { IButtonProps } from './Interface';

const Button = (props: IButtonProps) => {
  const {
    children,
    type,
    onClick,
    className,
    variant,
    rounded,
    hasHover = false,
    ...restProps
  } = props;

  const rootClassName = cn(
    styles.wrapper,
    {
      [styles.text]: variant === 'text',
      [styles.default]: variant === undefined,
      [styles.action]: variant === 'action',
      [styles.outline]: variant === 'outline',
      [styles.gradient]: variant === 'gradient',
      [styles.purple]: variant === 'purple',
      [styles.event]: variant === 'event',
      [styles.hover]: hasHover,
      [styles.roundedSix]: rounded == undefined,
      [styles.roundedTwelve]: rounded == 12,
      [styles.roundedFourteen]: rounded == 14,
    },
    className
  );

  return (
    <button
      type={type}
      className={rootClassName}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
