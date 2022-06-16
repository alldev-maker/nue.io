import React from "react";
import { AuthProvider } from "@/context/AuthContext";
import "../styles/globals.css";
import Layout from "@/components/Layout";
import TagManager from "react-gtm-module";

function NueApp({ Component, pageProps }) {
  React.useEffect(() => {
    if (process.env.BUILD_ENV === 'prod' && process.env.GTM_ID) {
      const tagManagerArgs = {
        gtmId: process.env.GTM_ID,
      }
      TagManager.initialize(tagManagerArgs)
    }
  }, [])

    return (
        <AuthProvider>
            <Layout
                {...pageProps}
                onClick={() => {
                    console.log("click");
                }}
            >
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    );
}

export default NueApp;
