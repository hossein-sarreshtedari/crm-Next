import '@/styles/globals.css';
import '@/styles/buttons.css';
import Layout from '@/pages/components/layout/layout';

export default function App({ Component, pageProps }) {
  return (

    <>

      <Layout>

        <Component {...pageProps} />

      </Layout>


    </>
  )
}
