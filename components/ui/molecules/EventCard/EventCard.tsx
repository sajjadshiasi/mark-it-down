import { animated, useSpring } from '@react-spring/web';
import Image from 'next/image';
import { Button, Text } from '../../atoms';
import styles from './EventCard.module.scss';

const EventCard = () => {
  const stylesSpring = useSpring({
    from: {
      transform: 'translateY(20px)',
    },
    to: {
      transform: 'translateY(-10px)',
    },
    config: { duration: 2500 },
    loop: { reverse: true },
    reverse: true,
    // delay: 450,
    // loop: false,
  });
  const textStyles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 1000,
  });
  return (
    <div className={styles.wrapper}>
      <animated.div style={stylesSpring} className={styles.topImage}>
        <Image src="/images/homeEvent/top-image.png" fill alt="bg-card" />
      </animated.div>
      <div className={styles.content}>
        <animated.div style={textStyles} className={styles.eventText}>
          <Text type="h3" size={40}>
            Create A Space &
          </Text>
          <Text type="h2" size={58} fontWeight="font-bold">
            Win Prizes!
          </Text>
        </animated.div>
        <Button className={styles.eventBtn} onClick={() => {}} variant="event">
          <Text size={28} fontWeight="font-bold">
            Lets Go...
          </Text>
        </Button>
      </div>
    </div>
  );
};
export default EventCard;
