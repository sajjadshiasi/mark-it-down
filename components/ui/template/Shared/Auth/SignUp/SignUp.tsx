import { useState } from 'react';
import { FormContainer } from '@/components/ui/atoms/Input/FormContainer';
import { Auth } from '@/services';
import { useStore } from '@/store';
import { EAuth } from '@/types';
import { SignUp } from './SignUpComponent';

export const SignUpContainer = () => {
  const { _registerUser: registerUser } = Auth();
  const { setAuthModal } = useStore();

  const initialValues = {
    email: '',
    password: '',
  };
  interface IValues {
    email: string;
    password: string;
  }
  const [birthday, setBirthday] = useState<Date>();
  const registerHandler = (values: IValues) => {
    const year = new Date(birthday!).getFullYear();
    const month = new Date(birthday!).getMonth();
    const date = new Date(birthday!).getDate();

    const convertedDate = `${year}-${
      month + 1 < 10 ? `0${month + 1}` : month + 1
      // eslint-disable-next-line sonarjs/no-nested-template-literals
    }-${date + 1 < 10 ? `0${date + 1}` : date + 1}`;

    const userData = {
      birth_date: convertedDate,
      email: values.email,
      password: values.password,
    };
    registerUser(userData)
      .then((res) => {
        if (res.code === 201) {
          setAuthModal(EAuth.null);
        }
      })
      .catch((err) => {});
  };

  return (
    <FormContainer
      initialValues={initialValues}
      onSubmit={registerHandler}
      component={SignUp}
      birthday={birthday}
      setBirthday={setBirthday}
    />
  );
};
