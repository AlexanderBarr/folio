import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import MyWork from "../components/MyWork";
import MySkills from "../components/MySkills";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center bg-brownish">
      <Head>
        <title>alex barr</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <MyWork />
      <MyWork />
      <MyWork />
      <MySkills />
      <Contact />
    </div>
  );
};

export default Home;
