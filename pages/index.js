import Head from "next/head";
import Header from "../components/Header/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>GetaJob | Job portal</title>
        <meta name="description" content="Job portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
