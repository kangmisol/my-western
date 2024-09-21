import Layout from "@/src/components/layout";
import "@/styles/globals.css";
import '@/styles/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
