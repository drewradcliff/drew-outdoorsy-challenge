import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { useQuery } from "react-query";
import { getRentals } from "../apis";
import Item from "../components/Item";

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useQuery("rentals", () =>
    getRentals("trailer", 8, 8)
  );

  const getImageURL = (id: string) => {
    return data.included.find((item: any) => item.id === id).attributes.url;
  };

  return (
    <div>
      <Head>
        <title>Outdoorsy - Search</title>
        <meta name="description" content="Outdoorsy Search" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto mt-4 container max-w-xl">
        <input
          className="border rounded-lg min-w-full text-lg p-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {!isLoading ? (
          data?.data.map((item: any) => (
            <Item
              key={item.id}
              url={getImageURL(item.relationships.primary_image.data.id)}
              text={item.attributes.name}
            />
          ))
        ) : (
          <>Loading...</>
        )}
      </main>
    </div>
  );
};

export default Home;
