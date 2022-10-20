import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import dynamic from "next/dynamic";

const Cesium = dynamic(() => import("../components/Cesium"), { ssr: false });

const Home: NextPage = () => {
  return (
    <>
      <Head>
        {/* // eslint-disable-next-line @next/next/no-css-tags  */}
        <link rel="stylesheet" href="cesium/Widgets/widgets.css" />
      </Head>
      <Cesium />
    </>
  );
};

export default Home;
