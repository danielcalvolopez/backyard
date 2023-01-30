import Head from "next/head";
import classes from "@/styles/Home.module.scss";
import Header from "@/components/header/Header";

const Home = () => {
  return (
    <>
      <Head>
        <title>Backyard Surf</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
};

export default Home;
