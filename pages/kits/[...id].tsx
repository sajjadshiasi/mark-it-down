import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Kitblock as KitblockApi } from '@/api';
import { KitDetails } from '@/components/ui';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (ctx.params !== undefined) {
    const kitDetails = await KitblockApi.getKitblockDetails({
      id: ctx.params.id!,
    });
    const latestBuildings = await KitblockApi.getLatestBuildings({
      id: ctx.params.id!,
    })
      .then((res) => res.data.data)
      .catch(() => null);

    if (kitDetails === null) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        //TODO fix translation on kit details page
        // ...(await serverSideTranslations(ctx.locale!, ['common'])),

        kitDetails,
        latestBuildings,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const KitDetailsPage = ({
  kitDetails,
  latestBuildings,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data } = latestBuildings;
  const latestData = {
    data,
    title: 'Latest With This Kitblock',
  };

  return (
    // This is the place to write your logic codes

    // Any other presentation codes will be written in presentation component below 👇

    // Pass your data throught data prop on presentation component

    <KitDetails latestData={latestData} kitDetails={kitDetails} />
  );
};
export default KitDetailsPage;
