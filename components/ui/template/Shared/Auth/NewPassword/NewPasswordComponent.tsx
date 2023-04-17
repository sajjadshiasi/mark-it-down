/* eslint-disable @typescript-eslint/no-redeclare */
import { Form } from 'formik';
import { Button, Input, Text } from '@/components/ui/atoms';
import styles from '../Auth.module.scss';

export const NewPassword = (props: any) => (
  <Form>
    <Input
      name="password"
      type="password"
      haveLabel={true}
      haveInfo={false}
      label="New Password"
      error={props.errors.password}
    />
    <div className={styles.space}></div>
    <Input
      name="renewPassword"
      type="password"
      haveLabel={true}
      haveInfo={false}
      label="Confirm New Password"
      error={props.errors.renewPassword}
    />
    <div className={styles.componentBtn}>
      <Button rounded={14} onClick={() => {}} variant="purple">
        <Text fontWeight="font-bold" size={28}>
          Reset Password
        </Text>
      </Button>
    </div>
  </Form>
);
