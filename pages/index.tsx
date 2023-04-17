import { useEffect } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Auth as apiAuth } from '@/api/auth';
import { Category as CategoryApi } from '@/api/category';
import { Home } from '@/components/ui';
import { HomeCardItems, MenuSliders } from '@/constants';
import { useStore } from '@/store';
import { EAuth } from '@/types';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let modalType: EAuth = EAuth.null;
  if (ctx.query !== undefined) {
    if (ctx.query.verify_code !== undefined) {
      const { verify_code: code } = ctx.query;
      const res = await apiAuth.emailVerify({ code });
      if (res.data.code === 200) {
        modalType = EAuth.VERIFY;
      } else {
        //error
      }
    } else if (ctx.query.forget_code !== undefined) {
      modalType = EAuth.NEW_PASSWORD;
    }
  }

  const homeCategoryWithCards = await CategoryApi.getAllCategory({
    limit: 8,
  }).then((res) => res.data);

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, ['common'])),
      // Will be passed to the page component as props
      modalType,
      homeCategoryWithCards,
    },
  };
};

function HomePage({
  modalType,
  homeCategoryWithCards,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // This is the place to write your logic codes

  // Any other presentation codes will be written in Home component below 👇

  // Pass your data throught data prop on Home component

  const { setAuthModal } = useStore();
  const { homeCardBuilder, homeCardEvent } = HomeCardItems();
  const { menuSlider } = MenuSliders();

  useEffect(() => {
    if (modalType !== EAuth.null) {
      setAuthModal(modalType);
    }
  }, [modalType]);

  return (
    <Home
      data={homeCategoryWithCards.data}
      slider={menuSlider}
      cards={{ homeCardBuilder, homeCardEvent }}
    />
  );
}
export default HomePage;
