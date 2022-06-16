import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import InfiniteScroll from "react-infinite-scroll-component";
import ResourceLabel from "@/components/ResourceLabel";
import ResourceRows from "@/components/ResourceRows";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import SectionFade from "@/components/SectionFade";
import { Content } from "@/components/Content";
import { API_URL, HOST_URL } from "@/config/index";
import Header2 from "@/components/text/Header2";
import Loader from "@/components/Loader";
import PopupVideo from "@/components/PopupVideo";
import useSWR, { SWRConfig } from "swr";
import { useRouter } from "next/router";
import qs from "qs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MetaTags } from "@/components/MetaTags";
import ErrorPage from "next/error";

const themes = new Map();
themes.set("articles", { color: "#FBAE8A" });
themes.set("podcasts", { color: "#67AAA2" });

function TypeChild({ data, type, url, target, theme }) {
  const [play, setPlay] = useState(false);

  const getMetaTitle = (target) => {
    const metaSocial =
      target && data.attributes.seo.metaSocial
        ? data.attributes.seo.metaSocial.find(
            (m) => m.socialNetwork.toLowerCase() === target.toLowerCase()
          )
        : undefined;

    const defaultMetaTitle =
      data.attributes.seo.metaTitle || data.attributes.title || "RevOps Blog";
    if (!target || !metaSocial || !metaSocial.title) {
      return defaultMetaTitle;
    } else {
      return metaSocial.title;
    }
  };

  const getMetaDescription = (target) => {
    const metaSocial =
      target && data.attributes.seo.metaSocial
        ? data.attributes.seo.metaSocial.find(
            (m) => m.socialNetwork.toLowerCase() === target.toLowerCase()
          )
        : undefined;

    const defaultMetaDescription =
      data.attributes.seo.metaDescription ||
      data.attributes.brief ||
      "RevOps Blog";
    if (!target || !metaSocial || !metaSocial.description) {
      return defaultMetaDescription;
    } else {
      return metaSocial.description;
    }
  };

  const getSocialGraph = (target) => {
    const metaSocial =
      target && data.attributes.seo.metaSocial
        ? data.attributes.seo.metaSocial.find(
            (m) => m.socialNetwork.toLowerCase() === target.toLowerCase()
          )
        : undefined;

    const defaultSocialGraph =
      API_URL +
        (data.attributes.seo.metaImage.data.attributes.url ||
          data.attributes.banner_image.data.attributes.url) || undefined;

    if (!target || !metaSocial || !metaSocial.image) {
      return defaultSocialGraph;
    } else {
      return API_URL + metaSocial.image.data.attributes.url;
    }
  };

  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef.current) {
      const imgs = contentRef.current.getElementsByTagName("img");

      for (var i = 0; i < imgs.length; i++) {
        console.log(imgs[i].attributes.src.value);
        imgs[i].setAttribute(
          "src",
          API_URL + "/" + imgs[i].attributes.src.value
        );
      }
    }
  }, []);

  const transcriptionData = data.attributes.transcriptions[0];
  const transcriptionList = transcriptionData.content.split("<p>&nbsp;</p>");

  // Infinte Scroll
  const [transcriptions, setTranscriptions] = useState(
    transcriptionList.slice(0, 10)
  );

  const fetchMoreData = () => {
    setTranscriptions(
      transcriptions.concat(
        transcriptionList.slice(
          transcriptions.length,
          transcriptions.length + 10
        )
      )
    );
  };

  return (
    <>
      {
        <MetaTags
          title={getMetaTitle(target)}
          description={getMetaDescription(target)}
          keywords={data.attributes.seo.metaKeywords || "RevOps Blog"}
          ogURL={`/revops/${type}/${url}`}
          socialGraphFromCMS={getSocialGraph(target)}
        />
      }
      <div className="relative overflow-hidden py-28">
        <SectionFade />
        {!data && <Loader />}
        {data && (
          <>
            <>
              <div className="absolute top-0 left-0 right-0 w-full">
                <svg
                  width="1440"
                  height="857"
                  viewBox="0 0 1440 857"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <path
                    opacity="0.2"
                    d="M1403.47 -475.43C1568.34 -546.958 1768.2 -505.44 1847.52 -475.74C1956.39 -180.938 2173.89 426.703 2172.88 498.851C2171.62 589.035 1960.77 732.748 1479.85 841.056C1095.12 927.703 228.441 639.405 -156.807 484.425L-62.9746 -139.295C-69.8998 -17.615 32.9354 192.826 499.678 61.1534C1083.11 -103.437 1197.39 -386.019 1403.47 -475.43Z"
                    fill="url(#paint0_linear_1225_9635)"
                    className="w-full"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1225_9635"
                      x1="244.825"
                      y1="-295.077"
                      x2="330.78"
                      y2="1240.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.24258" stopColor={theme.color} />
                      <stop
                        offset="0.556021"
                        stopColor={theme.color}
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute top-0 left-0">
                <svg
                  width="547"
                  height="717"
                  viewBox="0 0 547 717"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M502.416 537.205C523.841 513.782 548.257 463.509 546.578 419.999C541.887 298.673 494.891 182.373 413.127 89.7527C331.362 -2.86783 219.567 -66.4429 95.6697 -90.7768C16.1657 -106.398 -67.8741 -105.119 -144.695 -79.9549C-221.516 -54.7905 -290.52 -4.73945 -330.359 63.175C-366.202 124.215 -377.127 195.631 -383.226 265.455C-390.156 344.932 -390.947 428.301 -355.277 500.311C-320.708 570.097 -254.908 621.853 -183.144 656.801C-70.0112 711.514 58.6312 729.283 183.242 707.408C306.773 685.357 442.214 603.044 502.416 537.205Z"
                    fill="url(#paint0_linear_1175_5976)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1175_5976"
                      x1="-387"
                      y1="-278"
                      x2="242.521"
                      y2="766.411"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0.147475"
                        stopColor={theme.color}
                        stopOpacity="0.56"
                      />
                      <stop
                        offset="0.750483"
                        stopColor={theme.color}
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </>
            <div className="container relative z-10">
              <div className="flex justify-center">
                <div className="w-11/12 mx-auto xl:w-10/12">
                  <div className="flex items-center mb-6">
                    <div>
                      <Link href={`/revops/${type}`}>
                        <a className="text-sm text-black text-opacity-70 hover:underline hover:text-primary">
                          RevOps Review
                        </a>
                      </Link>
                    </div>
                    <div className="px-3">
                      <svg
                        width="5"
                        height="9"
                        viewBox="0 0 5 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.978835 0.671412L3.83125 3.58568C3.88472 3.63986 3.92716 3.70432 3.95613 3.77535C3.98509 3.84638 4 3.92256 4 3.9995C4 4.07645 3.98509 4.15263 3.95613 4.22365C3.92716 4.29468 3.88472 4.35914 3.83125 4.41333L0.978835 7.32759C0.925801 7.38222 0.862705 7.42558 0.793186 7.45517C0.723667 7.48477 0.649102 7.5 0.573791 7.5C0.498481 7.5 0.423915 7.48477 0.354397 7.45517C0.284878 7.42558 0.221782 7.38222 0.168748 7.32759C0.115278 7.27341 0.072837 7.20894 0.0438743 7.13792C0.0149116 7.06689 0 6.99071 0 6.91377C0 6.83682 0.0149116 6.76064 0.0438743 6.68962C0.072837 6.61859 0.115278 6.55413 0.168748 6.49994L2.62183 3.9995L0.168748 1.49906C0.0613239 1.38931 0.000973859 1.24045 0.000973859 1.08524C0.000973859 1.00838 0.0157899 0.932281 0.0445766 0.861277C0.0733634 0.790273 0.115557 0.725757 0.168748 0.671412C0.276172 0.561659 0.421871 0.5 0.573791 0.5C0.649015 0.5 0.723502 0.515138 0.792999 0.544549C0.862497 0.57396 0.925644 0.617068 0.978835 0.671412Z"
                          fill="black"
                          fillOpacity="0.8"
                        />
                      </svg>
                    </div>
                    <div>
                      <Link href={`/revops/${type}`}>
                        <a className="text-sm text-black text-opacity-70 hover:underline hover:text-primary">
                          {type.charAt(0).toUpperCase() +
                            type.slice(1).toLowerCase()}
                        </a>
                      </Link>
                    </div>
                    <div className="px-3">
                      <svg
                        width="5"
                        height="9"
                        viewBox="0 0 5 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.978835 0.671412L3.83125 3.58568C3.88472 3.63986 3.92716 3.70432 3.95613 3.77535C3.98509 3.84638 4 3.92256 4 3.9995C4 4.07645 3.98509 4.15263 3.95613 4.22365C3.92716 4.29468 3.88472 4.35914 3.83125 4.41333L0.978835 7.32759C0.925801 7.38222 0.862705 7.42558 0.793186 7.45517C0.723667 7.48477 0.649102 7.5 0.573791 7.5C0.498481 7.5 0.423915 7.48477 0.354397 7.45517C0.284878 7.42558 0.221782 7.38222 0.168748 7.32759C0.115278 7.27341 0.072837 7.20894 0.0438743 7.13792C0.0149116 7.06689 0 6.99071 0 6.91377C0 6.83682 0.0149116 6.76064 0.0438743 6.68962C0.072837 6.61859 0.115278 6.55413 0.168748 6.49994L2.62183 3.9995L0.168748 1.49906C0.0613239 1.38931 0.000973859 1.24045 0.000973859 1.08524C0.000973859 1.00838 0.0157899 0.932281 0.0445766 0.861277C0.0733634 0.790273 0.115557 0.725757 0.168748 0.671412C0.276172 0.561659 0.421871 0.5 0.573791 0.5C0.649015 0.5 0.723502 0.515138 0.792999 0.544549C0.862497 0.57396 0.925644 0.617068 0.978835 0.671412Z"
                          fill="black"
                          fillOpacity="0.8"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm underline font-anMedium text-primary">
                        {data.attributes.title}
                      </p>
                    </div>
                  </div>
                  {type == "podcasts" && (
                    <div>
                      <div
                        className="relative rounded-xl w-full md:max-h-[400px] md:min-h-[300px] max-h-[300px] min-h-[200px] overflow-hidden"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPlay(true);
                        }}
                      >
                        <img
                          className="object-cover w-full"
                          src={
                            API_URL +
                            data.attributes.banner_image.data.attributes.url
                          }
                          alt={data.attributes.title}
                        />
                        <div className="absolute inset-0 z-20 flex flex-col justify-between w-full h-full p-6">
                          <div
                            className="flex items-center justify-center h-full cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlay(true);
                            }}
                          >
                            <div>
                              <img
                                src={`/images/customers/icons/play-button.png`}
                                alt={`Featured graphic`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {type == "articles" && data.attributes.banner_image.data && (
                    <img
                      className="rounded-xl w-full md:max-h-[400px] md:min-h-[300px] max-h-[300px] min-h-[200px] object-cover"
                      src={
                        API_URL +
                        data.attributes.banner_image.data.attributes.url
                      }
                      alt={data.attributes.title}
                    />
                  )}
                  <div className="flex flex-col-reverse flex-wrap justify-start py-6 -mx-6 lg:flex-row">
                    {type == "articles" && data.attributes.article_topic.data && (
                      <div className="w-full px-6 lg:w-3/12">
                        <>
                          <div className="hidden mb-12 lg:block">
                            <p className="mb-2 text-lg font-anMedium">Topic</p>
                            <ResourceLabel>
                              {
                                data.attributes.article_topic.data.attributes
                                  .topic
                              }
                            </ResourceLabel>
                          </div>

                          <div className="hidden mb-12 lg:block">
                            <p className="mb-2 text-lg font-anMedium">
                              Table of Contents
                            </p>
                            <div>
                              {data.attributes.contents
                                .filter((content) => content.header)
                                .map((content, i) => {
                                  return (
                                    <ReactScrollLink
                                      key={i}
                                      to={`${content.header
                                        .toLowerCase()
                                        .replace(/[^A-Z0-9]/gi, "")}`}
                                      smooth={true}
                                      duration={200}
                                      className="block mb-2 text-sm transition-colors duration-200 cursor-pointer text-grey-600 last:mb-0 hover:text-blue"
                                    >
                                      {content.header}
                                    </ReactScrollLink>
                                  );
                                })}
                            </div>
                          </div>

                          {data.attributes.article_tags.data && (
                            <>
                              <p className="mb-2 text-lg font-anMedium">
                                Related tags
                              </p>
                              <div className="flex flex-wrap justify-start -mx-1">
                                {data.attributes.article_tags.data.map(
                                  (tag, i) => {
                                    return (
                                      <div className="px-1 mb-2 " key={i}>
                                        <div className="p-2 text-sm rounded-lg bg-grey-100 text-grey-600">
                                          {tag.attributes.tag}
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </>
                          )}
                        </>
                      </div>
                    )}
                    <div className="px-6 mx-auto lg:w-9/12">
                      {type == "podcasts" && (
                        <>
                          <iframe
                            className="w-full h-[320px] rounded-lg mb-12  shadow-lg"
                            src={`https://open.spotify.com/embed/track/${data.attributes.podcast_id}?utm_source=generator`}
                            frameBorder="0"
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          ></iframe>
                          <ResourceLabel>{data.attributes.topic}</ResourceLabel>
                        </>
                      )}
                      <div>
                        {type == "podcasts" && (
                          <ResourceLabel>
                            {
                              data.attributes.article_topic.data.attributes
                                .topic
                            }
                          </ResourceLabel>
                        )}
                        <Header2>{data.attributes.title}</Header2>
                      </div>
                      <div className="flex flex-col-reverse flex-wrap justify-between py-6 border-b lg:flex-row">
                        <div className="flex flex-wrap justify-start w-full md:flex-nowrap md:justify-between">
                          <div className="flex items-center order-2 w-full md:w-auto md:order-1">
                            <div className="w-12">
                              {data.attributes.author_img.data && (
                                <div className="w-8 h-8 overflow-hidden rounded-full">
                                  <img
                                    src={
                                      API_URL +
                                      data.attributes.author_img.data.attributes
                                        .url
                                    }
                                    alt={data.attributes.author}
                                  />
                                </div>
                              )}
                            </div>

                            <div>
                              <p>{data.attributes.author}</p>
                            </div>
                          </div>
                          <div className="flex order-1 w-full mb-6 md:w-auto h-7 md:md-0">
                            <FacebookShareButton
                              url={`${HOST_URL}/revops/${type}/${url}?target=facebook`}
                              quote={getMetaTitle("facebook")}
                              className="mr-5"
                            >
                              <img
                                src="/icons/social/facebook-share.svg"
                                alt="facebook share"
                                className="w-7 h-7"
                              />
                            </FacebookShareButton>
                            <LinkedinShareButton
                              url={`${HOST_URL}/revops/${type}/${url}?target=linkedin`}
                              title={data.attributes.title}
                              summary={data.attributes.brief}
                              source={`${HOST_URL}/${type}/${url}`}
                              className="mr-5"
                            >
                              <img
                                src="/icons/social/linkedin-share.svg"
                                alt="facebook share"
                                className="w-7 h-7"
                              />
                            </LinkedinShareButton>
                            <TwitterShareButton
                              url={`${HOST_URL}/revops/${type}/${url}?target=twitter`}
                              twitter={getMetaTitle(target)}
                              description={data.attributes.brief}
                              className="mr-5"
                            >
                              <img
                                src="/icons/social/twitter-share.svg"
                                alt="facebook share"
                                className="w-7 h-7 mb-[1px]"
                              />
                            </TwitterShareButton>
                            <CopyToClipboard
                              text={`${HOST_URL}/revops/${type}/${url}`}
                              onCopy={() => {
                                alert("Link copied to clipboard");
                              }}
                            >
                              <img
                                src="/icons/social/link-share.svg"
                                alt="copy to clipboard"
                                className="w-7 h-7"
                              />
                            </CopyToClipboard>
                          </div>
                        </div>
                        <div className="hidden w-full mb-6 lg:w-1/2 lg:mb-0">
                          <div className="flex justify-between lg:justify-around">
                            <div className="w-8 h-8 bg-indigo-300 rounded-full"></div>
                            <div className="w-8 h-8 bg-indigo-300 rounded-full"></div>
                            <div className="w-8 h-8 bg-indigo-300 rounded-full"></div>
                            <div className="w-8 h-8 bg-indigo-300 rounded-full"></div>
                            <div className="w-8 h-8 bg-indigo-300 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      {type == "articles" && (
                        <Content>
                          <>
                            {data.attributes.contents.map((content, i) => {
                              return (
                                <div
                                  key={i}
                                  id={
                                    content.header
                                      ? content.header
                                          .toLowerCase()
                                          .replace(/[^A-Z0-9]/gi, "")
                                      : ""
                                  }
                                  className="mb-12"
                                >
                                  {content.header && (
                                    <div className="content-header">
                                      {content.header}
                                    </div>
                                  )}
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: content.content,
                                    }}
                                    ref={contentRef}
                                  ></div>
                                </div>
                              );
                            })}
                          </>
                        </Content>
                      )}
                      {type == "podcasts" && (
                        <>
                          <div className="mt-8">
                            <p className="mb-4 text-2xl font-anMedium">
                              Description
                            </p>
                            <p className="text-lg">{data.attributes.brief}</p>
                          </div>
                          <div className="mt-16">
                            <p className="mb-4 text-2xl font-anMedium">
                              Transcription
                            </p>
                            <div
                              className="rounded-xl bg-[#FDFDFD] md:p-12 p-2"
                              style={{ border: "1px solid #F4F4F4" }}
                            >
                              <div className="flex mb-12">
                                {transcriptionData.header && (
                                  <p className="mb-4 mr-4 text-lg font-anMedium whitespace-nowrap">
                                    {transcriptionData.header + ":"}
                                  </p>
                                )}
                                <InfiniteScroll
                                  dataLength={transcriptions.length}
                                  next={fetchMoreData}
                                  hasMore={true}
                                >
                                  {transcriptions.map(
                                    (transcription, index) => (
                                      <div
                                        className="mb-4"
                                        key={index}
                                        dangerouslySetInnerHTML={{
                                          __html: transcription,
                                        }}
                                      ></div>
                                    )
                                  )}
                                </InfiniteScroll>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {type == "podcasts" && (
        <PopupVideo
          videoUrl={`https://www.youtube.com/embed/${data.attributes.video_id}?modestbranding=1&showinfo=0&rel=0&fs=0`}
          play={play}
          setPlay={setPlay}
        />
      )}
    </>
  );
}

export default function Page({ data, error }) {
  const router = useRouter();

  if (error) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <TypeChild
      data={data}
      type={router.query.type}
      url={router.query.url}
      target={router.query.target}
      theme={themes.get(router.query.type)}
    />
  );
}

export const getServerSideProps = async (context) => {
  const { type, url } = context.params;

  const query = qs.stringify({
    sort: ["id:asc"],
    populate: {
      banner_image: { populate: "*" },
      article_topic: { populate: "*" },
      article_tags: { populate: "*" },
      contents: { populate: "*" },
      transcriptions: { populate: "*" },
      author_img: { populate: "*" },
      seo: {
        populate: {
          metaSocial: { populate: "*" },
          metaImage: { populate: "*" },
        },
      },
    },
  });

  const res = await fetch(
    `${API_URL}/api/${type}?${query}&filters[url][$eq]=${url}`
  );
  const data = await res.json();

  if (!data || data.data.length == 0) {
    context.res.statusCode = 404;
    return {
      props: {
        error: "oops",
      },
    };
  }

  return {
    props: {
      data: data.data[0],
    },
  };
};
