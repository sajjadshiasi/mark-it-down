import { useRouter } from 'next/router';
import { FormContainer } from '@/components/ui/atoms/Input/FormContainer';
import { Auth } from '@/services';
import { useStore } from '@/store';
import { EAuth } from '@/types';
import { NewPassword } from './NewPasswordComponent';

export const NewPasswordContainer = () => {
  const router = useRouter();
  const { setAuthModal } = useStore();
  const { _resetPassword: resetPassword } = Auth();
  const initialValues = {
    code: router.query.forget_code,
    password: '',
  };
  interface IValues {
    code: string;
    password: string;
  }
  const createNewPasswordHandler = (values: IValues) => {
    resetPassword(values).then((res) => {
      if (res.code === 200) {
        setAuthModal(EAuth.SIGN_IN);
      }
    });
  };

  return (
    <FormContainer
      initialValues={initialValues}
      onSubmit={createNewPasswordHandler}
      component={NewPassword}
    />
  );
};
