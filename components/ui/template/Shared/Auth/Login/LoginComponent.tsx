import { useEffect } from 'react';
import { Field, Form } from 'formik';
import { Button, Input, Text } from '@/components/ui/atoms';
import { useStore } from '@/store';
import { EAuth } from '@/types';
import styles from '../Auth.module.scss';

export const Login = (props: any) => {
  const { setAuthModal } = useStore();
  return (
    <Form action="">
      <Input
        name="email"
        type="email"
        haveLabel={true}
        haveInfo={false}
        label="Email"
        error={props.errors.email}
      />
      <div className={styles.boxPassInput}>
        <div className={styles.forgetBtn}>
          <Button
            variant="text"
            className={styles.forgotBtnInner}
            onClick={() => setAuthModal(EAuth.FORGET)}
          >
            <Text size={18}>Forgot password?</Text>
          </Button>
        </div>
        <Input
          name="password"
          type="password"
          haveLabel={true}
          haveInfo={false}
          label="Password"
          error={props.errors.password}
        />
      </div>
      <div className={styles.componentBtn}>
        <Button rounded={14} variant="purple">
          <Text fontWeight="font-bold" size={28}>
            Sign in
          </Text>
        </Button>
      </div>
    </Form>
  );
};
