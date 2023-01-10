import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fintan.io - Start your career in Fintech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="pt-10 md:pt-20">
        <div className="w-full px-5 md:px-0">
          <div className="max-w-4xl mx-auto">
            <h1 className="mx-15 my-5 text-center font-sans text-6xl md:text-6xl font-semibold tracking-tight">
              Your career in fintech starts here.
            </h1>
            <p className="text-center text-gray-600 text-xl md:w-2/3 mx-auto">
              Gain the essential skills to launch a successful software
              developer career in the fintech industry.
            </p>
          </div>
        </div>
        <div className="container my-5 mx-auto">
          <img
            className="w-2/3 mx-auto mt-5"
            src="/assets/start_building.svg"
            alt="Start building"
          />
        </div>
        <Subscribe />
      </main>

      <Footer />
    </>
  );
}
