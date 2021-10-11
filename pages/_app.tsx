import '../styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/dist/shared/lib/router/router'


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return <>
        <Head>
            <title>Top-app</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="preconnect" href="https://mc.yandex.ru" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
            {/*<meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />*/}
            <meta property="og:locale" content="ru_RU" />
        </Head>
        <Component { ...pageProps } />
    </>

}

export default MyApp
