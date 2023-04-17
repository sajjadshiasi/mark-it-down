import cn from 'classnames';
import Image from 'next/image';
import { Button, Text } from '../../atoms';
import styles from './Card.module.scss';
import { ICardProps } from './Interface';

const Card = (props: ICardProps) => {
  const { className, variant, bgColor, data } = props;

  const rootClassName = cn(
    styles.wrapper,
    {
      [styles.defaultBg]: bgColor === 'default',
      [styles.transparentBG]: bgColor === 'transparent',
      [styles.eventBg]: variant === 'event',
    },
    className
  );

  return (
    <div className={rootClassName}>
      {variant === 'mobileProfile' ? (
        <>
          <div className={styles.cardImage}>
            <Image src={data.imageSrc} alt={variant} fill={true} />
          </div>
          <div className={styles.cardDetailMobile}>
            <Text size={40} fontWeight="font-bold" className={styles.username}>
              {data.h2Text}
            </Text>
            <div className={styles.btnGroup}>
              <Button onClick={data.onClickBtnOne} variant="text">
                <Text size={32}>{data.btnTextOne}</Text>
              </Button>
              <Button onClick={data.onClickBtnTwo} variant="text">
                <Text size={32}>{data.btnTextTwo}</Text>
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.cardDetail}>
            {variant === 'event' ? (
              <>
                <div className={styles.cardTexts}>
                  <Text type="h3" size={24} className={styles.eventTitle}>
                    {data.h3Text}
                  </Text>
                  <Text
                    type="h2"
                    size={40}
                    fontWeight="font-bold"
                    className={styles.eventSubtitle}
                  >
                    {data.h2Text}
                  </Text>
                </div>
                <Button onClick={data.onClickBtnOne} variant="text">
                  <Text size={18} className={styles.eventBtn}>
                    {data.btnTextOne}
                  </Text>
                </Button>
              </>
            ) : (
              <>
                <div className={styles.cardTexts}>
                  <Text
                    type="h2"
                    size={32}
                    fontWeight="font-bold"
                    className={styles.title}
                  >
                    {data.h2Text}
                  </Text>
                  <Text type="h3" size={24} noWrap>
                    {data.h3Text}
                  </Text>
                </div>
                {variant === 'profile' ? (
                  <div className={styles.btnGroup}>
                    <Button onClick={data.onClickBtnOne} variant="gradient">
                      <Text size={20} fontWeight="font-bold">
                        {data.btnTextOne}
                      </Text>
                    </Button>
                    <Button onClick={data.onClickBtnTwo} variant="outline">
                      <Text size={20}>{data.btnTextTwo}</Text>
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={data.onClickBtnOne}
                    variant="gradient"
                    className={styles.builderBtn}
                  >
                    <Text size={20} fontWeight="font-bold">
                      {data.btnTextOne}
                    </Text>
                  </Button>
                )}
              </>
            )}
          </div>
          <div className={styles.cardImage}>
            <Image src={data.imageSrc} alt={variant} fill={true} />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
