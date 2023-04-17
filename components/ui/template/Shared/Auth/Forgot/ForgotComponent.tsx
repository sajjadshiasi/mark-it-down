import { Form } from 'formik';
import { Button, Input, Text } from '@/components/ui';
import { useStore } from '@/store';
import { EAuth } from '@/types';
import styles from '../Auth.module.scss';

export const Forgot = () => {
  const { setAuthModal } = useStore();
  return (
    <Form action="">
      <Input
        name="email"
        type="text"
        haveLabel={true}
        haveInfo={false}
        label="Email"
      />
      <div className={styles.resetBtn}>
        <div className={styles.componentBtn}>
          <Button rounded={14} variant="purple">
            <Text fontWeight="font-bold" size={28}>
              Reset Password
            </Text>
          </Button>
        </div>
        <Button
          variant="text"
          className="underline text-gray-700 mt-12"
          onClick={() => setAuthModal(EAuth.SIGN_IN)}
        >
          <Text size={20}> Return to login</Text>
        </Button>
      </div>
    </Form>
  );
};
