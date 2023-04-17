/* eslint-disable @typescript-eslint/naming-convention */
import { FormContainer } from '@/components/ui/atoms/Input/FormContainer';
import { Auth } from '@/services';
import { useStore } from '@/store';
import { EAuth } from '@/types';
import { Forgot } from './ForgotComponent';

export const ForgotContainer = () => {
  const { _forgotPassword } = Auth();
  const { setAuthModal } = useStore();

  const initialValues = {
    email: '',
  };
  interface IValues {
    email: string;
  }
  const emailForgotPassword = (values: IValues) => {
    _forgotPassword(values).then((res) => {
      if (res.code === 200) {
        setAuthModal(EAuth.null);
      }
    });
  };
  return (
    <FormContainer
      initialValues={initialValues}
      onSubmit={emailForgotPassword}
      component={Forgot}
    />
  );
};
