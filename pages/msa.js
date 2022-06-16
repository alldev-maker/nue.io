import Head from "next/head";

import PageDefault from "@/layouts/PageDefault";

// Strapi API config
import { API_URL } from "@/config/index";

export default function Msa({ post }) {
    // console.log(post);
    return (
        <>
            <SeoMetas metas={post.data.attributes.metas} />

            <PageDefault>
                <div className="content">
                    <h1 className="mb-6">{post.data.attributes.Title}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.data.attributes.Content,
                        }}
                    ></div>
                </div>
            </PageDefault>
        </>
    );
}

export async function getStaticProps(context) {
    const res = await fetch(`${API_URL}/api/msa?populate=*`);
    const post = await res.json();

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: { post },
        revalidate: 1,
    };
}

function SeoMetas({ metas }) {
    console.log("metas", metas);
    return (
        <Head>
            <title>{metas.title}</title>
            <meta
                key="robots"
                name="robots"
                content={`${metas.robotsIndex ? "index" : "noindex"},${
                    metas.robotsFollow ? "follow" : "nofollow"
                }`}
            />
        </Head>
    );
}
