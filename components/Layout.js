import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ socialGraph, ogURL, children }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/nue-logo-in.png" />
                <link
                  href="/fonts/AvenirNext/index.css"
                  rel="stylesheet"
                />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="nue" />
            </Head>
            <Navbar />
            <main className="overflow-x-hidden">{children}</main>

            <Footer />
        </>
    );
}
