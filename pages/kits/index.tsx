import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Kitblock as KitblockApi } from '@/api';
import { Kits } from '@/components/ui';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const kitblocks = await KitblockApi.getAllKitblocks().then((res) => res.data);

  return {
    props: {
      ...(await serverSideTranslations(ctx.locale!, ['common'])),
      kitblocks,
      // Will be passed to the page component as props
    },
  };
};

const KitsPage = ({
  kitblocks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Kits kitblocks={kitblocks.data} />
);

export default KitsPage;
