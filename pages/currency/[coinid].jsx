import React from "react";
import Head from "next/head";
import Charts from "../../components/Chart/chart";
import CoinDetails from "../../components/Coin Details/coinDetails";
function Coin_id({ data, chart }) {
  return (
    <>
      <Head>
        <title>Crypto App</title>
        <title>{data?.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={data?.image.small} />
      </Head>
      <main style={{ margin: "auto" }}>
        <CoinDetails data={data} />
        <Charts coinid={data?.id} chartData={chart} />
      </main>
    </>
  );
}

export default Coin_id;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { coinid: "bitcoin" },
      },
      {
        params: { coinid: "ethereum" },
      },
      {
        params: { coinid: "binancecoin" },
      },
    ],
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  let res2 = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.coinid}?localization=false&tickers=false&market_data=true&community_data=false`
  );
  let data = await res2.json();
  let res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${params.coinid}/market_chart?vs_currency=usd&days=7&interval=hourly`
  );
  let chart = await res.json();
  return {
    props: {
      data,
      chart,
    },
    revalidate: 43200,
  };
}
