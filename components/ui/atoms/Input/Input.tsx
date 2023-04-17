import { useState } from 'react';
import cn from 'classnames';
import { Field } from 'formik';
import { EyeClose, EyeOpen } from '@/components/svg';
import { Button } from '../Button';
import { Text } from '../Text';
import styles from './Input.module.scss';
import { IInputProps } from './Interface';

const Input = (props: IInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    name,
    className,
    haveInfo,
    haveLabel,
    type,
    onBlur,
    label,
    error,
    style,
  } = props;
  const rootClassName = cn(styles.wrapper, {
    [styles.search]: type === 'search',
    [styles.password]: type === 'password',
  });
  return (
    <div className={styles.input}>
      <>
        <div className={styles.headInput}>
          <div>
            {haveLabel && (
              <label className={styles.label} htmlFor={name}>
                <Text size={24}>{label}</Text>
              </label>
            )}
          </div>
          {haveInfo && (
            <div className={styles.info}>
              <Text size={20}>!</Text>
            </div>
          )}
        </div>
        <div className={styles.fieldWrapper}>
          <div>
            {type === 'password' && (
              <span
                onClick={() => setShowPassword(!showPassword)}
                className={styles.eyeIcon}
              >
                {type === 'password' && showPassword ? (
                  <EyeOpen width="100%" height="100%" />
                ) : (
                  <EyeClose width="100%" height="100%" />
                )}
              </span>
            )}
          </div>
          <div className={styles.fieldInner}>
            <Field
              id={name}
              type={type === 'password' && showPassword ? 'text' : type}
              name={name}
              style={style}
              className={cn(
                className,
                rootClassName,
                error !== undefined ? 'border-red border-2' : ''
              )}
              onBlur={onBlur}
            />
          </div>
        </div>

        <div className={styles.textError}>
          <Text size={18}>{error}</Text>
        </div>
      </>
    </div>
  );
};
export default Input;
