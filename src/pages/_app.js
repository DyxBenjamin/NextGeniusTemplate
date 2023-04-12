import '@styles/main.scss'
import Layout from "@components/layout";

export default function App({Component, pageProps, router}) {
    if (router.pathname.startsWith('/app')) {
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        );
    }
    return <Component {...pageProps} />;
}
