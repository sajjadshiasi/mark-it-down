import cn from 'classnames';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { ITextProps } from './Interface';
import styles from './Text.module.scss';

const Text = (props: ITextProps) => {
  const {
    children,
    className,
    size,
    dangerouslySetInnerHTML,
    fontWeight,
    isItalic,
    type,
    noWrap,
  } = props;
  const router = useRouter();
  const { t: translate } = useTranslation('');

  const rootClassName = cn(
    styles.wrapper,
    {
      [styles.sixteen]: size === 16,
      [styles.eighteen]: size === 18,
      [styles.twenty]: size === 20,
      [styles.twentyFour]: size === 24,
      [styles.twentyEight]: size === 28,
      [styles.thirtyTwo]: size === 32,
      [styles.fourty]: size === 40,
      [styles.fourtyEight]: size === 48,
      [styles.fiftyEight]: size === 58,
      [styles.noWrap]: noWrap,
      [`${fontWeight}`]: fontWeight !== undefined,
      ['italic']: isItalic !== undefined,
    },
    className
  );

  const typeHandler = () => {
    switch (type) {
      case 'h1':
        return <h1 className={rootClassName}>{translate(children)}</h1>;
      case 'h2':
        return <h2 className={rootClassName}>{translate(children)}</h2>;
      case 'h3':
        return <h3 className={rootClassName}>{translate(children)}</h3>;
      case 'p':
        return <p className={rootClassName}>{translate(children)}</p>;
      default:
        return <div className={rootClassName}>{translate(children)}</div>;
    }
  };

  return (
    <>
      {dangerouslySetInnerHTML !== undefined ? (
        type === 'p' ? (
          <p
            className={rootClassName}
            dangerouslySetInnerHTML={{ __html: dangerouslySetInnerHTML }}
          />
        ) : (
          <div
            className={rootClassName}
            dangerouslySetInnerHTML={{ __html: dangerouslySetInnerHTML }}
          />
        )
      ) : (
        typeHandler()
      )}
    </>
  );
};

export default Text;
