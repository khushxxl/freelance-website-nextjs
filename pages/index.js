import Head from "next/head";
import Business from "../components/Business";
import Contact from "../components/Contact";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import VideosPart from "../components/VideosPart";

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center py-5 mx-auto max-w-6xl my-7"
    >
      <Head>
        <title>Khushaal Choithramani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Hero />
      <Business />
      <Projects />

      <Contact />
    </div>
  );
}
