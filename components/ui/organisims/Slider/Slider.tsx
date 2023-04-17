import { useState } from 'react';
import cn from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { PlaySvg } from '@/components/svg';
import { Button, Text } from '../../atoms';
import { ISliderProps } from './Interface';
import styles from './Slider.module.scss';
import 'keen-slider/keen-slider.min.css';

const Slider = (props: ISliderProps) => {
  const { items } = props;
  const [currentSlider, setCurrentSlider] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlider(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div className={cn('navigation-wrapper', styles.wrapper)}>
      <div ref={sliderRef} className={cn('keen-slider', styles.inner)}>
        {items.map((item, index) => (
          <div key={index} className={cn('keen-slider__slide', styles.slide)}>
            <div className={styles.imageSlider}>
              <div className={styles.overlay} />
              <Image
                src={item.image}
                alt="slider"
                fill
                sizes="(max-width: 480px) 350px"
              />
            </div>
            <div className={styles.textAndBtn}>
              <div className={styles.textAndBtnInner}>
                <div className={styles.text}>
                  <Text
                    size={48}
                    fontWeight="font-bold"
                    className={styles.title}
                  >
                    {item.title}
                  </Text>
                  <div className={styles.subTitle}>
                    <Text size={28} className={styles.subStatic}>
                      by
                    </Text>
                    <Text size={32} className={styles.subInner}>
                      @ {item.subTitle}
                    </Text>
                  </div>
                </div>
                <Button
                  rounded={12}
                  variant="purple"
                  onClick={() => {}}
                  className={styles.boxBtn}
                >
                  <div className={styles.playButton}>
                    <div className={styles.btnSvg}>
                      <PlaySvg />
                    </div>
                    <Text
                      size={28}
                      fontWeight="font-bold"
                      className="flex items-center"
                    >
                      {item.btnText}
                    </Text>
                  </div>
                </Button>
              </div>
            </div>

            {loaded && instanceRef.current && (
              <div className={cn('dots', styles.dots)}>
                {[
                  //@ts-ignore
                  ...Array(
                    instanceRef.current.track.details.slides.length
                  ).keys(),
                ].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={'dot' + (currentSlider === idx ? ' active' : '')}
                  ></button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
