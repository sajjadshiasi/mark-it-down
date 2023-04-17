/* eslint-disable sonarjs/cognitive-complexity */
import { useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { Facebook, GoogleSvg } from '@/components/svg';
import { Button, Icon, Modal, Text } from '@/components/ui';
import { useStore } from '@/store';
import { EAuth } from '@/types';
import { hiddenScroll } from '@/utils';
import styles from './Auth.module.scss';
import { ForgotContainer } from './Forgot/Forgot';
import { LoginContainer } from './Login/Login';
import { NewPasswordContainer } from './NewPassword/NewPassword';
import { SignUpContainer } from './SignUp/SignUp';
import { VerifyContainer } from './Verify/Verify';

const Auth = () => {
  const { authModal, setAuthModal } = useStore();
  const authHandler = () => {
    switch (authModal) {
      case EAuth.SIGN_IN:
        return <LoginContainer />;
      case EAuth.SIGN_UP:
        return <SignUpContainer />;
      case EAuth.FORGET:
        return <ForgotContainer />;
      case EAuth.NEW_PASSWORD:
        return <NewPasswordContainer />;
      case EAuth.VERIFY:
        return <VerifyContainer />;
      default:
        return null;
    }
  };
  useEffect(() => {
    hiddenScroll(true);
    return () => {
      hiddenScroll(false);
    };
  }, []);

  const changeFlowHandler = () => {
    if (authModal === 1) {
      setAuthModal(EAuth.SIGN_IN);
    }
    if (authModal === 2) {
      setAuthModal(EAuth.SIGN_UP);
    }
  };

  const onCloseHandler = () => {
    setAuthModal(EAuth.null);
  };
  return (
    <Modal onClose={onCloseHandler}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <Text size={40} className={styles.title}>
            {authModal === EAuth.SIGN_UP
              ? 'Create an account'
              : authModal === EAuth.SIGN_IN
              ? 'Sign in'
              : authModal === EAuth.FORGET
              ? 'Forgot Password'
              : authModal === EAuth.NEW_PASSWORD
              ? 'Enter your New Password'
              : null}
          </Text>
          <div className={styles.subtitle}>
            <Text size={24}>
              {authModal === EAuth.SIGN_UP
                ? 'Already have a Kitblock Account?'
                : authModal === EAuth.SIGN_IN
                ? 'Do Not have an Account?'
                : null}
            </Text>
            {authModal === EAuth.SIGN_UP ? (
              <div className={styles.headBtn}>
                <Button
                  onClick={changeFlowHandler}
                  className=""
                  variant="outline"
                >
                  <Text size={20}>Log in</Text>
                </Button>
              </div>
            ) : authModal === EAuth.SIGN_IN ? (
              <div className={styles.headBtn}>
                <Button
                  onClick={changeFlowHandler}
                  className=""
                  variant="outline"
                >
                  <Text size={20}>Sign Up</Text>
                </Button>
              </div>
            ) : null}
          </div>
        </div>

        {authHandler()}

        {authModal === EAuth.SIGN_IN || authModal === EAuth.SIGN_UP ? (
          <div className={styles.footer}>
            <div className={styles.footerText}>
              <Text size={24}>
                {authModal === EAuth.SIGN_UP
                  ? 'Or sign up with'
                  : 'Or continue with'}
              </Text>
            </div>
            <div className={styles.socialBtnWrapper}>
              <Button rounded={14} onClick={() => signIn('google')}>
                <Icon className={styles.socialIcon}>
                  <GoogleSvg width="100%" height="100%" />
                </Icon>
                <Text
                  size={28}
                  fontWeight="font-bold"
                  className="text-gray-800"
                >
                  Google
                </Text>
              </Button>
              <Button rounded={14} onClick={() => signIn('facebook')}>
                <Icon className={styles.socialIcon}>
                  <Facebook width="100%" height="100%" />
                </Icon>
                <Text fontWeight="font-bold" size={28}>
                  Facebook
                </Text>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </Modal>
  );
};
export default Auth;
