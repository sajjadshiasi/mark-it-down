/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from 'react';
import cn from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
import { AngleLeft, AngleRight } from '@/components/svg';
import { Text } from '../../atoms';
import { KitCard } from '../../molecules';
import { IKitCardsWrapperProps } from './Interface';
import styles from './KitCardsWrapper.module.scss';

const KitCardsWrapper = (props: IKitCardsWrapperProps) => {
  const { data, title, isWrap, type, className } = props;
  const rootClassName = cn(styles.wrapper, className);
  const [currentSlider, setCurrentSlider] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlider(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },

    slides: {
      perView: 2,
    },
    breakpoints: {
      '(min-width: 500px)': {
        slides: {
          perView: 3,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 4,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 5,
        },
      },
      '(min-width: 1440px)': {
        slides: {
          perView: 6,
        },
      },
      '(min-width: 1920px)': {
        slides: {
          perView: 7,
        },
      },
    },
  });

  const NextPageHandler = (e: any) => {
    e.stopPropagation() || instanceRef.current?.next();
  };

  return (
    <div className={rootClassName}>
      {isWrap ? (
        <>
          <div className={styles.headCard}>
            <div className={styles.boxText}>
              <Text size={32} fontWeight={'font-bold'}>
                {title}
              </Text>
            </div>
            <div className={styles.arrowWrapper}>
              {loaded && instanceRef.current && (
                <div className={styles.arrowsBtn}>
                  <button
                    type="button"
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlider === 0}
                  >
                    <AngleLeft disable={currentSlider === 0 ? true : false} />
                  </button>
                  <button
                    type="button"
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                      currentSlider ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                  >
                    <AngleRight
                      disable={
                        currentSlider ===
                        instanceRef.current.track.details.slides.length - 1
                          ? true
                          : false
                      }
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div ref={ref} className="keen-slider">
            {data.map((item, index) => (
              <div className="keen-slider__slide number-slide1" key={index}>
                <KitCard item={item} type={type} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={styles.headCard}>
            <div className={styles.boxText}>
              <Text size={32} fontWeight={'font-bold'}>
                {title}
              </Text>
            </div>
          </div>
          <div className={styles.isWrapContainer}>
            {data.map((item, index) => (
              <KitCard item={item} key={index} type={type} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default KitCardsWrapper;
