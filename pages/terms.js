import Head from "next/head";
import PageDefault from "@/layouts/PageDefault";
// Strapi API config
import { API_URL } from "@/config/index";
export default function Terms({ data }) {
    return (
        <>
            <Head>
                <title>Website terms of use</title>
            </Head>
            <PageDefault>
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.data.attributes.body,
                    }}
                ></div>
            </PageDefault>
        </>
    );
}
export async function getStaticProps(context) {
    const res = await fetch(`${API_URL}/api/term`);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { data },
        revalidate: 1,
    };
}
