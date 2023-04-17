import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';
import { Layout } from '@/components/ui/template/Shared';
import '@/styles/globals.scss';
import 'keen-slider/keen-slider.min.css';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
  <>
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  </>
);
export default appWithTranslation(App);
