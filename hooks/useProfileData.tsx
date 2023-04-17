/* eslint-disable sonarjs/no-duplicate-string */
import { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { ICardDataProps } from '@/components/ui/molecules/Card/Interface';
import { useStore } from '@/store';
import { EAuth } from '@/types';

const useProfileData = () => {
  const { data } = useSession();
  const { setAuthModal } = useStore();
  const [profile, setProfile] = useState<ICardDataProps>({
    h2Text: 'profile.guest',
    h3Text: 'profile.before-login',
    btnTextOne: 'auth.signin',
    btnTextTwo: 'auth.signup',
    imageSrc: '/images/avatar.png',
    onClickBtnOne: () => {
      console.log('EAuth.SIGN_IN');
      setAuthModal(EAuth.SIGN_IN);
    },
    onClickBtnTwo: () => {
      setAuthModal(EAuth.SIGN_UP);
      console.log('EAuth.SIGN_UP');
    },
  });

  // TODO update commented sections
  useEffect(() => {
    if (data !== null) {
      setProfile({
        h2Text: 'Username', // this should be changed
        h3Text: 'profile.after-login',
        btnTextOne: 'auth.profile',
        btnTextTwo: 'auth.signout',
        imageSrc: '/images/avatar.png', // this should be changed
        onClickBtnOne: () => {
          //   router.push('/profile'); redirect to profile page
        },
        onClickBtnTwo: (e) => {
          signOut();
        },
      });
    } else {
      setProfile({
        h2Text: 'profile.guest',
        h3Text: 'profile.before-login',
        btnTextOne: 'auth.signin',
        btnTextTwo: 'auth.signup',
        imageSrc: '/images/avatar.png',
        onClickBtnOne: () => {
          console.log('EAuth.SIGN_UP1');
          setAuthModal(EAuth.SIGN_IN);
        },
        onClickBtnTwo: () => {
          console.log('EAuth.SIGN_UP2');
          setAuthModal(EAuth.SIGN_UP);
        },
      });
    }
  }, [data]);

  return { profile };
};

export default useProfileData;
