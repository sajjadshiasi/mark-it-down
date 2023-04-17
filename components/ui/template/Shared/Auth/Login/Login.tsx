/* eslint-disable @typescript-eslint/naming-convention */
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { FormContainer } from '@/components/ui/atoms/Input/FormContainer';
import { Auth } from '@/services';
import { useStore } from '@/store';
import { EAuth } from '@/types';
import { Login } from './LoginComponent';

export const LoginContainer = () => {
  const router = useRouter();
  const { _loginWithCredential } = Auth();
  const { setAuthModal } = useStore();

  const initialValues = {
    email: '',
    password: '',
  };
  const signInHandler = (values: IValues) => {
    signIn('credentials', {
      redirect: false,
      callbackUrl: window.location.origin,
      email: values.email,
      password: values.password,
    })
      .then((res) => setAuthModal(EAuth.null))
      .catch((err) => console.log(err, 'err'));
  };

  interface IValues {
    email: string;
    password: string;
  }

  return (
    <FormContainer
      initialValues={initialValues}
      onSubmit={(values: IValues) => signInHandler(values)}
      component={Login}
    />
  );
};
