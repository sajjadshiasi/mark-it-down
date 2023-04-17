import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
    // Will be passed to the page component as props
  },
});

export default function Inventory() {
  // This is the place to write your logic codes

  // Any other presentation codes will be written in Home component below 👇

  // Pass your data throught data prop on Home component
  return <div>Inventory</div>;
}
