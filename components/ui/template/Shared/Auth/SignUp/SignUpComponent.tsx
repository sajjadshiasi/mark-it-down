/* eslint-disable @typescript-eslint/no-redeclare */
import { useCallback } from 'react';
import { SelectDatepicker } from 'react-select-datepicker';
import { Form } from 'formik';
import { Button, Input, Text } from '@/components/ui/atoms';
import styles from '../Auth.module.scss';

export const SignUp = (props: any) => {
  const { birthday, setBirthday } = props;

  const onDateChange: any = useCallback((date: Date) => {
    setBirthday(date);
  }, []);

  return (
    <Form>
      <Input
        name="email"
        type="text"
        haveLabel={true}
        haveInfo={false}
        label="Email"
        error={props.errors.email}
      />
      <div className={styles.space} />
      <Input
        name="password"
        type="password"
        haveLabel={true}
        haveInfo={true}
        label="Password"
        error={props.errors.password}
      />
      <div className={styles.space} />
      <div className={styles.birthdayBox}>
        <Text size={24} fontWeight="font-bold" className={styles.title}>
          Birthday
        </Text>
        <SelectDatepicker
          className={styles.datePicker}
          selectedDate={birthday}
          onDateChange={onDateChange}
          hideLabels={true}
          maxDate={new Date()}
        />
      </div>
      <div className={styles.componentBtn}>
        <Button rounded={14} onClick={() => {}} variant="purple">
          <Text fontWeight="font-bold" size={28}>
            Sign up
          </Text>
        </Button>
      </div>
    </Form>
  );
};
