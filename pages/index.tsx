import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import { getRentals } from "../apis";

const Home: NextPage = () => {
  const { data } = useQuery("rentals", () => getRentals("trailer", 8, 8));

  return (
    <div>
      <Head>
        <title>Outdoorsy - Search</title>
        <meta name="description" content="Outdoorsy Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello world</h1>
      </main>
    </div>
  );
};

export default Home;
