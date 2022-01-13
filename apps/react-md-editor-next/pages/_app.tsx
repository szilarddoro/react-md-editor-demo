import { CacheProvider, EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import createEmotionCache from '../lib/create-emotion-cache';

const clientSideEmotionCache = createEmotionCache();

export type EnhancedAppProps = AppProps & {
  /**
   * Emotion cache provided by the framework.
   */
  emotionCache?: EmotionCache;
};

function CustomApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: EnhancedAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Welcome to react-md-editor-next!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </CacheProvider>
  );
}

export default CustomApp;
