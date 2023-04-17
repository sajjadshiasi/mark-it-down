import { Button, Text } from '@/components/ui/atoms';
import { useStore } from '@/store';
import { EAuth } from '@/types';
import styles from '../Auth.module.scss';

export const VerifyContainer = () => {
  const { setAuthModal } = useStore();
  return (
    <div>
      <Text size={28} fontWeight="font-bold">
        You have successfully verified your email address.
      </Text>

      <div className={styles.componentBtn}>
        <Button
          rounded={14}
          onClick={() => setAuthModal(EAuth.SIGN_IN)}
          variant="purple"
        >
          <Text fontWeight="font-bold" size={28}>
            Login
          </Text>
        </Button>
      </div>
    </div>
  );
};
