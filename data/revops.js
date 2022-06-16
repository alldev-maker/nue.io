import { dummyContent } from "./dummy-content";

const titles = ["Read Next", "with similar topics", "Trending", "New"];

export const revops = [
  {
    header: "Articles",
    type: "articles",
    themes: {
      color: "#FBAE8A",
    },

    featured: {
      label: "Beginners Guide",
      title: "Integrating RevOps into your workplace",
      description:
        "First two sentences of the post go here and are also awesome for people to get a sense of the article",
      btn: {
        text: "Read the article",
        link: "/articles/integrating-revops-into-your-workplace/",
      },
      image: {
        url: "/images/revops/featured-1.jpg",
        width: 680,
        height: 450,
      },
    },
    footer: {
      label: "News",
      title: "Managing RevOps from start to finish",
      description:
        "First two sentences of the post go here and are also awesome for people to get a sense of the article",
      btn: {
        text: "Read the article",
        link: "/articles/managing-revops-from-start-to-finish/",
      },
      image: {
        url: "/images/revops/featured-2.jpg",
        width: 680,
        height: 450,
      },
    },
    items: [
      {
        image: {
          url: "/images/revops/thumb-1.jpg",
          width: 380,
          height: 260,
        },
        label: "beginners guide",
        title: "Managing RevOps from start to finish",
        slug: "managing-revops-from-start-to-finish",
        description:
          "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
        link: "/articles/managing-revops-from-start-to-finish/",
        sidebar: true,
        tags: [
          "Nue",
          "Marketing",
          "New",
          "integrating",
          "Server setup",
          "RevOps",
          "Workplace",
        ],
      },
      {
        image: {
          url: "/images/revops/thumb-2.jpg",
          width: 380,
          height: 260,
        },
        label: "beginners guide",
        title: "Integrating RevOps into your workplace",
        slug: "integrating-revops-into-your-workplace",
        description:
          "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
        link: "/articles/integrating-revops-into-your-workplace/",
        sidebar: true,
        tags: [
          "integrating",
          "Server setup",
          "RevOps",
          "Workplace",
          "Marketing",
        ],
      },
      {
        image: {
          url: "/images/revops/thumb-3.jpg",
          width: 380,
          height: 260,
        },
        label: "beginners guide",
        title: "What is RevOps?",
        slug: "what-is-revops",
        description:
          "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
        link: "/articles/what-is-revops/",
        sidebar: true,
        tags: ["Marketing", "New", "integrating", "Workplace", "Nue"],
      },
      {
        image: {
          url: "/images/revops/thumb-3.jpg",
          width: 380,
          height: 260,
        },
        label: "marketing",
        title: "Introducing Sales to RevOps",
        slug: "introducing-sales-to-revops",
        link: "/articles/introducing-sales-to-revops/",
        sidebar: true,
        tags: ["Nue", "Marketing", "integrating", "Server setup", "RevOps"],
        description:
          "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
      },
      {
        image: {
          url: "/images/revops/thumb-1.jpg",
          width: 380,
          height: 260,
        },
        label: "news",
        title: "Let's talk Nue",
        link: "/articles/lets-talk-nue/",
        slug: "lets-talk-nue",
        sidebar: true,
        tags: ["Nue", "Marketing", "New", "integrating", "RevOps", "Workplace"],
        description:
          "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
      },
    ],
    postFooters: [
      {
        header: titles[0],
        items: dummyContent,
      },
      {
        header: "Articles " + titles[1],
        items: dummyContent,
      },
    ],
    rows: [
      {
        header: titles[2],
        items: [
          {
            image: {
              url: "/images/revops/thumb-1.jpg",
              width: 380,
              height: 260,
            },
            label: "beginners guide",
            title: "What is RevOps?",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
            link: "/articles/what-is-revops/",
          },
          {
            image: {
              url: "/images/revops/thumb-2.jpg",
              width: 380,
              height: 260,
            },
            label: "marketing",
            title: "Introducing Sales to RevOps",
            link: "/articles/introducing-sales-to-revops/",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
          },
          {
            image: {
              url: "/images/revops/thumb-3.jpg",
              width: 380,
              height: 260,
            },
            label: "news",
            title: "Let's talk Nue",
            link: "/articles/lets-talk-nue/",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
          },
        ],
      },
      {
        header: titles[3] + " Articles",
        items: [
          {
            image: {
              url: "/images/revops/thumb-1.jpg",
              width: 380,
              height: 260,
            },
            label: "beginners guide",
            title: "What is RevOps?",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
            link: "/articles/what-is-revops/",
          },
          {
            image: {
              url: "/images/revops/thumb-3.jpg",
              width: 380,
              height: 260,
            },
            label: "news",
            title: "Let's talk Nue",
            link: "/articles/lets-talk-nue/",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
          },
          {
            image: {
              url: "/images/revops/thumb-2.jpg",
              width: 380,
              height: 260,
            },
            label: "marketing",
            title: "Introducing Sales to RevOps",
            link: "/articles/introducing-sales-to-revops/",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
          },
        ],
      },
    ],
  },
  {
    header: "Podcast & Video",
    type: "podcasts",
    themes: {
      color: "#67AAA2",
    },
    featured: {
      label: "Beginners Guide",
      title: "Featured RevOps Podcast",
      description:
        "First two sentences of the post go here and are also awesome for people to get a sense of the article",
      btn: {
        text: "Listen now",
        link: "/podcast-video/integrating-revops-into-your-workplace/",
      },
      image: {
        url: "/images/revops/featured-1.jpg",
        width: 680,
        height: 450,
      },
      duration: "33:20",
    },
    postFooters: [
      {
        header: "Similar podcasts and videos",
        items: [
          {
            image: {
              url: "/images/revops/thumb-1.jpg",
              width: 380,
              height: 260,
            },
            label: "beginners guide",
            title: "Managing RevOps from start to finish",
            slug: "managing-revops-from-start-to-finish",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
            link: "/podcast-video/managing-revops-from-start-to-finishe/",
          },
          {
            image: {
              url: "/images/revops/thumb-3.jpg",
              width: 380,
              height: 260,
            },
            label: "beginners guide",
            title: "Integrating RevOps into your workplace",
            slug: "integrating-revops-into-your-workplace",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
            link: "/podcast-video/integrating-revops-into-your-workplace/",
          },
          {
            image: {
              url: "/images/revops/thumb-2.jpg",
              width: 380,
              height: 260,
            },
            label: "beginners guide",
            title: "What is RevOps?",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
            link: "/podcast-video/what-is-revops/",
            slug: "what-is-revops",
            duration: "14:05",
          },
        ],
      },
    ],
    footer: {
      label: "Beginners Guide",
      title: "Featured RevOps Video",
      description:
        "First two sentences of the post go here and are also awesome for people to get a sense of the article",
      btn: {
        text: "Watch now",
        link: "/podcast-video/managing-revops-from-start-to-finish/",
      },
      image: {
        url: "/images/revops/featured-2.jpg",
        width: 680,
        height: 450,
      },
      duration: "46:15",
    },
    items: [
      {
        image: {
          url: "/images/revops/thumb-3.jpg",
          width: 380,
          height: 260,
        },
        label: "beginners guide",
        title: "Managing RevOps from start to finish",
        slug: "managing-revops-from-start-to-finish",
        description:
          "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
        link: "/podcast-video/managing-revops-from-start-to-finishe/",
      },
      {
        image: {
          url: "/images/revops/thumb-2.jpg",
          width: 380,
          height: 260,
        },
        label: "beginners guide",
        title: "Integrating RevOps into your workplace",
        slug: "integrating-revops-into-your-workplace",
        description:
          "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
        link: "/podcast-video/integrating-revops-into-your-workplace/",
      },
      {
        image: {
          url: "/images/revops/thumb-3.jpg",
          width: 380,
          height: 260,
        },
        label: "beginners guide",
        title: "What is RevOps?",
        description:
          "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
        link: "/podcast-video/what-is-revops/",
        slug: "what-is-revops",
        duration: "14:05",
      },
      {
        image: {
          url: "/images/revops/thumb-1.jpg",
          width: 380,
          height: 260,
        },
        label: "marketing",
        title: "Introducing Sales to RevOps",
        link: "/podcast-video/introducing-sales-to-revops/",
        slug: "introducing-sales-to-revops",
        duration: "22:16",
        description:
          "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
      },
      {
        image: {
          url: "/images/revops/thumb-2.jpg",
          width: 380,
          height: 260,
        },
        label: "news",
        title: "Let's talk Nue",
        slug: "lets-talk-nue",
        link: "/podcast-video/lets-talk-nue/",
        duration: "10:47",
        description:
          "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
      },
    ],

    rows: [
      {
        // header: "Trending",
        items: [
          {
            image: {
              url: "/images/revops/thumb-3.jpg",
              width: 380,
              height: 260,
            },
            label: "beginners guide",
            title: "What is RevOps?",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
            link: "/podcast-video/what-is-revops/",
            slug: "what-is-revops",
            duration: "14:05",
          },
          {
            image: {
              url: "/images/revops/thumb-2.jpg",
              width: 380,
              height: 260,
            },
            label: "marketing",
            title: "Introducing Sales to RevOps",
            link: "/podcast-video/introducing-sales-to-revops/",
            slug: "introducing-sales-to-revops",
            duration: "22:16",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
          },
          {
            image: {
              url: "/images/revops/thumb-1.jpg",
              width: 380,
              height: 260,
            },
            label: "news",
            title: "Let's talk Nue",
            slug: "lets-talk-nue",
            link: "/podcast-video/lets-talk-nue/",
            duration: "10:47",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
          },
        ],
      },
      {
        // header: "New articles",
        items: [
          {
            image: {
              url: "/images/revops/thumb-3.jpg",
              width: 380,
              height: 260,
            },
            label: "beginners guide",
            title: "What is RevOps?",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
            link: "/podcast-video/what-is-revops/",
            slug: "what-is-revops",
            duration: "14:05",
          },
          {
            image: {
              url: "/images/revops/thumb-1.jpg",
              width: 380,
              height: 260,
            },
            label: "marketing",
            title: "Introducing Sales to RevOps",
            link: "/podcast-video/introducing-sales-to-revops/",
            slug: "introducing-sales-to-revops",
            duration: "22:16",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
          },
          {
            image: {
              url: "/images/revops/thumb-2.jpg",
              width: 380,
              height: 260,
            },
            label: "news",
            title: "Let's talk Nue",
            slug: "lets-talk-nue",
            link: "/podcast-video/lets-talk-nue/",
            duration: "10:47",
            description:
              "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
          },
        ],
      },
    ],
  },
  // {
  //     header: "Research",
  //     type: "research",
  //     themes: {
  //         color: "#729CE4",
  //     },
  //     featured: {
  //         label: "Beginners Guide",
  //         title: "Featured Research item 1",
  //         description:
  //             "First two sentences of the post go here and are also awesome for people to get a sense of the article",
  //         btn: {
  //             text: "Learn more",
  //             link: "/research/integrating-revops-into-your-workplace/",
  //         },
  //         image: {
  //             url: "/images/revops/featured-1.jpg",
  //             width: 680,
  //             height: 450,
  //         },
  //     },
  //     footer: {
  //         label: "Beginners Guide",
  //         title: "Featured research item 2",
  //         description:
  //             "First two sentences of the post go here and are also awesome for people to get a sense of the article",
  //         btn: {
  //             text: "Learn more",
  //             link: "/research/managing-revops-from-start-to-finish/",
  //         },
  //         image: {
  //             url: "/images/revops/featured-2.jpg",
  //             width: 680,
  //             height: 450,
  //         },
  //     },
  //     items: [
  //         {
  //             image: {
  //                 url: "/images/revops/thumb-2.jpg",
  //                 width: 380,
  //                 height: 260,
  //             },
  //             label: "beginners guide",
  //             title: "Managing RevOps from start to finish",
  //             slug: "managing-revops-from-start-to-finish",
  //             description:
  //                 "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
  //             link: "/research/managing-revops-from-start-to-finishe/",
  //         },
  //         {
  //             image: {
  //                 url: "/images/revops/thumb-1.jpg",
  //                 width: 380,
  //                 height: 260,
  //             },
  //             label: "beginners guide",
  //             title: "Integrating RevOps into your workplace",
  //             slug: "integrating-revops-into-your-workplace",
  //             description:
  //                 "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
  //             link: "/research/integrating-revops-into-your-workplace/",
  //         },
  //         {
  //             image: {
  //                 url: "/images/revops/thumb-3.jpg",
  //                 width: 380,
  //                 height: 260,
  //             },
  //             label: "beginners guide",
  //             title: "What is RevOps?",
  //             description:
  //                 "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
  //             link: "/research/what-is-revops/",
  //             slug: "what-is-revops",
  //         },
  //         {
  //             image: {
  //                 url: "/images/revops/thumb-2.jpg",
  //                 width: 380,
  //                 height: 260,
  //             },
  //             label: "marketing",
  //             title: "Introducing Sales to RevOps",
  //             link: "/research/introducing-sales-to-revops/",
  //             slug: "introducing-sales-to-revops",

  //             description:
  //                 "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
  //         },
  //         {
  //             image: {
  //                 url: "/images/revops/thumb-1.jpg",
  //                 width: 380,
  //                 height: 260,
  //             },
  //             label: "news",
  //             title: "Let's talk Nue",
  //             slug: "lets-talk-nue",
  //             link: "/research/lets-talk-nue/",

  //             description:
  //                 "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
  //         },
  //     ],
  //     // postFooters: [
  //     //     {
  //     //         header: "Read next",
  //     //         items: dummyContent,
  //     //     },
  //     //     {
  //     //         header: "Articles with similar topics",
  //     //         items: dummyContent,
  //     //     },
  //     // ],
  //     rows: [
  //         {
  //             // header: "Trending",
  //             items: [
  //                 {
  //                     image: {
  //                         url: "/images/revops/thumb-2.jpg",
  //                         width: 380,
  //                         height: 260,
  //                     },
  //                     label: "beginners guide",
  //                     title: "What is RevOps?",
  //                     description:
  //                         "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
  //                     link: "/research/what-is-revops/",
  //                     slug: "what-is-revops",
  //                 },
  //                 {
  //                     image: {
  //                         url: "/images/revops/thumb-3.jpg",
  //                         width: 380,
  //                         height: 260,
  //                     },
  //                     label: "marketing",
  //                     title: "Introducing Sales to RevOps",
  //                     link: "/research/introducing-sales-to-revops/",
  //                     slug: "introducing-sales-to-revops",

  //                     description:
  //                         "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
  //                 },
  //                 {
  //                     image: {
  //                         url: "/images/revops/thumb-1.jpg",
  //                         width: 380,
  //                         height: 260,
  //                     },
  //                     label: "news",
  //                     title: "Let's talk Nue",
  //                     slug: "lets-talk-nue",
  //                     link: "/research/lets-talk-nue/",

  //                     description:
  //                         "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
  //                 },
  //             ],
  //         },
  //         {
  //             // header: "New articles",
  //             items: [
  //                 {
  //                     image: {
  //                         url: "/images/revops/thumb-1.jpg",
  //                         width: 380,
  //                         height: 260,
  //                     },
  //                     label: "beginners guide",
  //                     title: "What is RevOps?",
  //                     description:
  //                         "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
  //                     link: "/research/what-is-revops/",
  //                     slug: "what-is-revops",
  //                 },
  //                 {
  //                     image: {
  //                         url: "/images/revops/thumb-2.jpg",
  //                         width: 380,
  //                         height: 260,
  //                     },
  //                     label: "marketing",
  //                     title: "Introducing Sales to RevOps",
  //                     link: "/research/introducing-sales-to-revops/",
  //                     slug: "introducing-sales-to-revops",

  //                     description:
  //                         "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
  //                 },
  //                 {
  //                     image: {
  //                         url: "/images/revops/thumb-3.jpg",
  //                         width: 380,
  //                         height: 260,
  //                     },
  //                     label: "news",
  //                     title: "Let's talk Nue",
  //                     slug: "lets-talk-nue",
  //                     link: "/research/lets-talk-nue/",

  //                     description:
  //                         "Interesting and positive highlight about Nue from press. Interesting and positive highlight about Nue. “Interesting and positive highlight about Nue.",
  //                 },
  //             ],
  //         },
  //     ],
  // },
];

const a = [
  "<p><strong>Kate McCullough</strong></p>\n<p><span style=\"font-weight: 400;\">I'm here today for RevOps review with two folks that are RevOps gurus. We have Eric Portugal Welsh. He is currently at Demostack rapidly scaling an ex-FiveTran. And then I have Lisa Kelly who has run RevOps, and been in sales leadership for companies that are tens of millions in revenue, but also billions. So we have different perspectives here, and we're here to talk about how you scale RevOps, when you're rapidly growing, like you are just 3X and 4Xing, maybe 5Xing in growth, and just really what the challenges are in that.</span></p>\n",
  '\n<p><strong>Kate McCullough</strong></p>\n<p><span style="font-weight: 400;">And so before I kick off with that whole conversation, Eric, you want to add a little bit of color on your background and your journey with RevOps and then Lisa, maybe the same?</span></p>\n',
  "\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style=\"font-weight: 400;\">Yeah. So I started in roles that could be classified as RevOps business operations, systems operations in the nonprofit sector about 10 years ago. Transitioned over, my first tech company was FiveTran, which got unicorn status right after I left. We grew while I was there supporting the sales team from about 15 reps to 150 in about a year and a half, year and six months. So I'm pretty familiar with the hyper growth mode. Currently at Demostack where we're at very early stages, but our growth projecting for the next year is about 5X over last year. So, right now we're in set foundation mode and I'm anticipating a lot of growth in the back half of the year.</span></p>\n",
  '\n<p><strong>Kate McCullough</strong></p>\n<p><span style="font-weight: 400;">Yeah. Then Lisa is actually a co-host of this podcast, but for this one we\'re actually interviewing her. But Lisa, tell us about your background?</span></p>\n',
  '\n<p><strong>Lisa Kelly</strong></p>\n<p><span style="font-weight: 400;">Yeah, I got started in operations via the sales leadership route. So I was a sales leader, went into sales enablement, then moved into full operations, ended up running operations for companies like NICE inContact, Talkdesk, LogMeIn, what now is known as GoTo and both in healthcare. And then I\'d made a shift over to consulting and got to work with a lot of companies, companies that were in that rapid growth stage all the way up to companies that are starting to see that growth curve flatten out. And the fun stuff is definitely the rapid growth.</span></p>\n',
  "\n<p><strong>Kate McCullough&nbsp;</strong></p>\n<p><span style=\"font-weight: 400;\">So, we're going to start with this table stakes question. What is RevOps? This is maybe one of the most interesting terms that everyone has a different answer for. So I'm curious, how do you define RevOps? What does it encompass? For the purposes of this conversation, what do we mean? Eric, how would you color it?</span></p>\n",
  "\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style=\"font-weight: 400;\">I've always just called it, go-to market operations. I think it's like the operational support of your marketing sales, customer success, all the way through that handoff process with finance. So, it's really the support function for your customer lifecycle.</span></p>\n",
  '\n<p><strong>Kate McCullough</strong></p>\n<p><span style="font-weight: 400;">Lisa, what do you think about that answer?</span></p>\n',
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">Yeah. I think revenue ops has a lot of clarity needed around that title itself. And I do agree with Eric that go-to market operations is a great way to define it. I think when you look at it, it touches the entire revenue cycle and how that gets operationalized from the point where it's entering the pipeline all the way to where you're recognizing the revenue and finance and everything in between from a new logo and upsell perspective.</span></p>\n",
  "\n<p><strong>Kate McCullough</strong></p>\n<p><span style=\"font-weight: 400;\">Yeah. I think that the word has emerged and we have it. People have different definitions. I think you're more spanning all the full flow of the lifecycle. Some people shorten it down the sales and marketing, but in the definition that you just said, which I love it, we're just in agreement here. How would you say that the tech stack has actually changed over the last few years of just trends and how does that work itself out? I don't know, Lisa, you start.</span></p>\n",
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">Okay. Well, I think there's been a general acknowledgement of how interconnected that full revenue lifecycle is. And so you're starting to see more products instead of being fully siloed to perform a singular function, you're seeing more products pulling in different areas that they can become a little bit more complex, but at the same time they become multifunctional. So, that's definitely been a trend that you're seeing as more companies are incorporating more parts of the revenue lifecycle into their products.</span></p>\n",
  '\n<p><strong>Kate McCullough</strong></p>\n<p><span style="font-weight: 400;">Yeah. Eric, I know that you\'ve worked on companies with direct sales and omnichannel motions. In that consideration, how would you also answer how the tech stack has changed and living both those worlds?</span></p>\n',
  '\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style="font-weight: 400;">Yeah. I pretty hardly agree with Lisa on this one. So if we think of systems like Syncari, FiveTran. It\'s all about getting product data and in the most actionable met system possible.</span></p>\n',
  '\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style="font-weight: 400;">So, Census, FiveTran, Syncari, it\'s all about getting data into the right places.</span></p>\n',
  '\n<p><strong>Kate McCullough</strong></p>\n<p><span style="font-weight: 400;">Yeah. Then in consideration, Lisa, did you want to chime in there on more?</span></p>\n',
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">Well, I was just going to say to Eric's point about the data focus, there are so many companies that are focused on this data integration and being able to surface insights that I think there's been a impact of almost becoming data drunk, where people have too much information coming at them from multiple sources and multiple places. So you start to see these complex BI tools being put in to pull it all together and try and make sense of it. And even once you do that, it doesn't speak to the right audience most of the time, the executives care about vastly different things than the frontline sales leadership and everything in between. So I think that what we'll probably see is more people focusing on the metrics that truly matter.</span></p>\n",
  '\n<p><strong>Lisa Kelly&nbsp;</strong></p>\n<p><span style="font-weight: 400;">And being able to look at the analytics that drive efficiencies and are truly important because, some things are important in real-time and some things are important retroactively. And I think that you see them all together, all at once being thrown at people. I think it\'s something that we will continue to see as a better optimization of that data presentation.</span></p>\n',
  '\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style="font-weight: 400;">I love the term data drunk by the way, that resonates.</span></p>\n',
  "\n<p><strong>Kate McCullough</strong></p>\n<p><span style=\"font-weight: 400;\">It's so true. In looking at the data, I think we're at data aggregation, and people trying to solve it from that angle's like, can we pull the data together? I was just curious, going a little bit of a tangent, what are the pitfalls with looking at it that way from maybe a customer journey cohesion problem?</span></p>\n",
  '\n<p><strong>Eric Portugal Welsh&nbsp;</strong></p>\n<p><span style="font-weight: 400;">Sorry. The pitfalls of aggregating our data?</span></p>\n',
  '\n<p><strong>Kate McCullough</strong></p>\n<p><span style="font-weight: 400;">Yeah. Do you think that really solves what needs to happen in today\'s world?</span></p>\n',
  "\n<p><strong>Eric Portugal Welsh&nbsp;</strong></p>\n<p><span style=\"font-weight: 400;\">To piggyback off of Lisa, we at some point have too much, so it's really deciphering what's valuable for us. What are we actually trying to get to? At this point in most RevOps tech stacks, you can track just about everything and anything and everything you could possibly think of. Is it valuable? No. Are all the dashboards in every system that I have, do I use them look at them or care about them? No. I maybe care about four metrics from this one system and two data points from this other system. And then three data points from my product that I pipe back in. Those are the things I care about. Those are the things I think leadership cares about, reps and the users might care about other things, but getting to a point where those key metrics are in a system of record, that's the important piece.</span></p>\n",
  '\n<p><strong>Lisa Kelly</strong></p>\n<p><span style="font-weight: 400;">Yeah. I\'d agree with that, and I also think that as operations leaders, we get hit a ton of times with curiosity. So you end up building dashboards to satisfy curiosity. At a frustration, and I won\'t mention the company name, but I came back to my sales leaders and I said, "What are you going to do about it? If I build this dashboard for you and it says this, what action are you going to take?" Because I saw a lot of times where my team would be scrambling to put together these beautiful dashboards or reports, and then they would be presented and it would be like, interesting. And there wasn\'t anything that was changed because of it.</span></p>\n',
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">So, by forcing that discipline within the sales leadership to say, \"What are you going to do with this information? What action are you going to take? How are you going to hold people accountable if you don't like what you see?\"Because as much as we like to think that you inspect what you expect. A lot of times people don't take the action associated with that to drive behavior change because we present the data good, bad or otherwise. But we need that other partner that's going to drive that accountability. So I think it's important to have data that you can take action on, as well as identifying what those key metrics are that are truly important rather than curious where you're just going to get the response of interesting.</span></p>\n<p><br /><br /></p>\n<p><strong>Kate McCullough</strong></p>\n<p><span style=\"font-weight: 400;\">I'm guessing this is so significant when you're scaling. You have to be looking at the right metrics for that scale journey. I guess that dovetails into whether it's data and the collection of data, or really trying to understand the trends with how your customer is evolving or what the product market fit is and how you're setting up operations at RevOps. What would you say is the biggest challenge or the biggest challenge is to scaling your tech stacks within RevOps? Because there's so many different requirements for what you meet out of them in terms of data collection, enabling your sales team, bridging that full lifecycle. So Eric, what do you think of when you're thinking challenges and the challenges that you're facing right now?</span></p>\n",
  "\n<p><strong>Eric Portugal Welsh&nbsp;</strong></p>\n<p><span style=\"font-weight: 400;\">Yeah, there's a few different challenges. One is, overbuying, it's really easy to just stick a tool on it and call it good. I was thinking of Portlandia, stick a bird on it. Stick a tool on it. You can say yes to everything. That's something we should never do is say yes to everything. But, just implementing to solve a problem that can be solved another way. That's a big issue. And what that creates is shelf ware if it's not used. And then if you don't have the bandwidth because you're scaling and oftentimes RevOps teams at this stage are teams of one, and we don't have the bandwidth to admin or maintain every system that's implemented.</span></p>\n",
  "\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style=\"font-weight: 400;\">So it's really understanding what the need is. How can you support the ongoing need with the solution that you're providing? That's the big challenge I would say in building out your tech stack. I think you got to look at your ... yeah go.</span></p>\n",
  '\n<p><strong>Kate McCullough</strong></p>\n<p><span style="font-weight: 400;">When you\'re thinking of what you\'re building out, how far in the future are you thinking?</span><strong> </strong><span style="font-weight: 400;">Are you thinking a hundred million in revenue? Because some of the systems you put in place are really hard to put in or they set a structure and a framework to start out with. You may not want to redo later. So how far in advance do you think when you\'re sticking things in and prioritizing them?</span></p>\n',
  "\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style=\"font-weight: 400;\">Right now I'm thinking about a year out. I can't physically think or mentally think past that at the moment. So, I think it's important to get at one, systems that you're familiar and most comfortable with that are going to do the job that you know they can do and be flexible enough to grow with you. So I think if we're looking at sales, marketing, customer success, you need a system that's going to support each one of those teams as they grow.&nbsp;</span></p>\n",
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">You're building up pipeline. And so you tend to see a lot of those products like Outreach, Gong, things like that are really focused on getting more business through the door. And the things that often get neglected that become incredibly painful are the back half of the sales process. The things where, when the rubber has actually met the road, yeah, they've closed all these deals. And when you have an Excel spreadsheet that you're doing, you're quoting in, and you don't have any place to look for a contract, oh, they're stored on that shared drive. You start to see stuff that really creates huge inefficiencies for an organization.</span></p>\n",
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">It was fine when you had 10 sales reps, but when you get to 25, 50, 100, all of a sudden they've all put their own little flare on the Excel spreadsheet. They've all decided that they're going to have this special thing that they do to win more business. They'll be driving whatever your deal desk looks like crazy, because sales people, the good sales people are often very creative and you want to be able to enable that creativity, but keep it within a box, right? You have to have gates around the creativity. So I think that it's finding that balance between technology that allows you to get the business done.</span></p>\n",
  '\n<p><strong>Lisa Kelly</strong></p>\n<p><span style="font-weight: 400;">But doesn\'t put you in a choke hold in a year, year and a half, as many products do because the problems that you have on year three and the problems you have on year 10 are very different. A lot of times the year 10 problems can be prevented with the year three decisions.</span></p>\n',
  "\n<p><strong>Kate McCullough</strong></p>\n<p><span style=\"font-weight: 400;\">Yeah. Eric, I know that you've stuck in quite a bit of sales process and sales tools early within the back half of that process per Lisa's comment. What was your thinking in that? Because I think that is rare. A lot of people try to keep themselves out of systems to give sales reps a ton of leeway to close logos. But I think you were thinking you had a different approach to that. I'm curious what informed that from previous experiences or how you thought about that?</span></p>\n",
  "\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style=\"font-weight: 400;\">Yeah. I've seen the mess that creating too much chaos early gets you in a year, two years from now. So we've put in quite a bit of system process, rules, loose rules, light rains, if you will, on things to give people guidelines like bumpers, we haven't put the choke hold on them yet. And we're implementing obviously new CPQ and the goal there is to just start tracking our pricing. Get it in the system, get it tracked accurately. And the way I'm going to want it in a year from now, when we have 15, 30 reps and we need a real standard process with complex or semi complex workflows. But right now, we're in the let's test the waters and see what the market can bear with our pricing?</span></p>\n",
  "\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style=\"font-weight: 400;\">And to Lisa your point, doing that in Excel spreadsheet just doesn't allow us to dig in and analyze the data in a year from now. As well as we're about to come up against our first renewals. We want to get a system in place so we make that process easy for our CSM team and our expansion team. So, yeah it just creates less headache, we're still going to have headaches a year from now, two years from now with some of this, but I think we're going to have less headaches, different headaches if you will.</span></p>\n",
  '\n<p><strong>Lisa Kelly&nbsp;</strong></p>\n<p><span style="font-weight: 400;">Yeah. To that point, when you are bringing a product to market, there\'s a lot of discussion around, what do we do with pricing? And eventually someone throws a dart at the wall and says, "This is what we\'re going to do with pricing." And then you start going, "Well, did we get it right? How do we know? What could we do elsewhere? How could we change this? Would our customers buy more if we did this?" We have all these questions. And oftentimes when things are being done outside of the system or in a clunky system, or highly structured, difficult to change system, you\'ll see that nobody has the option to experiment.</span></p>\n',
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">This is the dart we threw at the wall and we have to just stick with it because we don't have a choice, our tools won't allow us to be agile enough. So I think that's an important thing to think about that almost every organization goes through a stage in their early stages, just like what Eric's talking about when you start coming up against renewals and looking at that and saying, \"Did we get it right? Could we have charged more? Could we have made more revenue out of these customers if we just did this a little differently?\" And oftentimes those companies don't have the ability to see the right information, to be able to make those decisions.</span></p>\n",
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">You can't see discounting patterns, you can't take cohorts of people and say, \"We're going to sell it in a tiered model.\" You can't build that into a system with a lot of the systems that are out there today. So, yeah. That's an important consideration in pricing complexity.</span></p>\n",
  "\n<p><strong>Kate McCullough&nbsp;</strong></p>\n<p><span style=\"font-weight: 400;\">Yeah. So I'm curious, when you both think about the balance of what you do manually versus not manually, I'm hearing get Salesforce in place. Yeah, it's painful to customize but it's worth doing, having quoting and pricing and Salesforce and making sure that's a flexible process that can grow with you as you're maybe monetizing new features or adjusting your pricing to be usage-based or throwing different discount strategies on it, have that flexibility, but a system. So those are two things that are put in place. What would you put in? Yes. Still keep it manual versus put in the system.</span></p>\n",
  "\n<p><strong>Kate McCullough</strong></p>\n<p><span style=\"font-weight: 400;\">If you were to say these three things I put in the system for these three things, I'm okay not doing that for. I'm curious to how you think about that. Lisa, maybe you start with that, because I think Eric [inaudible 00:22:19] all already.</span></p>\n<p><br /><br /></p>\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">Well, I think for manual process, it's got to be things that are not going to be business-crucial data that you're going to need to have access to large datasets for. So I think that is probably the first place that I look is, am I going to need to know what this behavior looks like in mass? The answer is at some point probably, but do I need to have that right now? Is this going to become incredibly relevant now today? The answer in a lot of cases when it's things that are sales rep efficiency, like needing to know how many hours in a week they're spending in meetings, things like that you don't necessarily need to have systems or products or tools to do that.</span></p>\n",
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">But I think the ones that truly tell you conversion rates, you've got to have things, you've got to have systems in place that are going to be really, really watertight conversion rates. Because if you think about those conversion rates or pivot points for how much spend we need for marketing, how many demos we're going to have to do to be able to close this much business? And so when Eric's pacing down a 5X growth number, you've got to look at that and say, \"Oh gosh, we have to get a heck of a lot better at this particular thing.\" As long as you have a way of looking at the information and understanding the behavior that's happening in mass, doing those things manually is okay at first.</span></p>\n",
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">But over time, you're going to want to make sure that not necessarily you have a tool, you just have a system that can monitor it. For example, what I was talking about with the meetings, putting meetings into Salesforce, holding reps accountable to actually tag that contact with a meeting, this is what we had, we had this specific type of meeting. We had a pre-qualification meeting. We had a demo meeting, whatever that looks like. Being able to track some of that information within Salesforce has to be done. What happened in that meeting? Note taking, things like that doesn't necessarily need to be done in a system. It can be done manually at first.</span></p>\n",
  "\n<p><strong>Kate McCullough</strong></p>\n<p><span style=\"font-weight: 400;\">If I hear you correctly, I really like this point of view, is you're starting with your metrics, your hierarchy of needs of metrics and saying, what are these top metrics that I need to know the results for? And then I'm going to base my system choices off of those metrics. Is that accurately what you're saying Lisa?</span></p>\n",
  '\n<p><strong>Lisa Kelly</strong></p>\n<p><span style="font-weight: 400;">Yeah, it is, because I\'m a very metrics ... When I was a sales leader, I was a very metrics-driven sales leader. I would sit down with my reps and I would tell them, "This is how many emails and calls you made this week. And this is how many opportunities you got out of it. Your conversion rate is here and you are above or below the baseline of expectation for the team or whatever it is, or you\'re really doing great. What is it that you\'re doing different?" But I believe that metrics are the number one topic of one-on-ones and what they should be talking about. I have to as an operations leader, give my sales leadership the metrics that matter.</span></p>\n',
  "\n<p><strong>Lisa Kelly&nbsp;</strong></p>\n<p><span style=\"font-weight: 400;\">I have to be able to give them the metrics that matter. Otherwise we end up with this chit chat for the one-on-one, which is fine. I think it's important to obviously have that chit chat. But when you're trying to drive performance, you have to have the key metrics that you know we're going to look at together every single week, month, whatever that is. Gamification is becoming so important these days that I think that looking at the things that actually change behavior, because if you know your manager's going to call you out for not sending enough emails or calls or doing enough demos or your conversion rates, you've done 25 demos and you've only progressed five of them, what's going on?</span></p>\n",
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">We need to work on your demo skills, knowing what they're coaching on. I think, yeah. I start with the metrics almost always, but that's the type of operations that I run is very heavy metrics driven.</span></p>\n",
  "\n<p><strong>Kate McCullough</strong></p>\n<p><span style=\"font-weight: 400;\">I'm curious Eric, there's multiple ways to skin the cat. You could start with metrics. How do you think about it? What is your paradigm of how do I choose my tools first? It can also change company to company. I don't think every GTM motion is the same, but do you start with metrics or do you have a different way of thinking about it in terms of what you're accomplishing with tools?</span></p>\n",
  "\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style=\"font-weight: 400;\">Yeah. I think of it pretty, pretty similarly, which is probably why we're in very similar ... I've taken very similar career paths. Yeah, metrics first. Everything you do should have some sort of output that's reportable and actionable. The second way I think about things is process. So, can I make this more efficient? Everything to me when I'm building new process to get to those metrics is always with automation in mind. How can I get the most reliable data out of this? And that's always through automate. To me that's always through out an automation. If I require somebody to enter data into a field that requires human input and sales reps are notoriously not great at it.</span></p>\n",
  "\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style=\"font-weight: 400;\">So if you can make things simple and automated, it usually works best. But my approach here is always to build it manually, automate it after, after it's working and after I've proven the metrics are valuable, if it's something new.</span></p>\n",
  '\n<p><strong>Kate McCullough</strong></p>\n<p><span style="font-weight: 400;">Would you say there are just the table stakes metrics that you go to of like, I definitely need to know how the pricing [crosstalk 00:28:03] looking or what the discounting practices are. I guess that would be my next question is, what are the big fails that you see with people putting tech or not putting tech in, or trying to grow by just manually doing everything themselves? Because they\'re just afraid of the changing processes. What should they be prioritizing or where have you seen them deprioritize something that they should have?</span></p>\n',
  "\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style=\"font-weight: 400;\">Definitely when something is brand new, like new to this space and you don't know how to utilize it properly. I'll revert back to one of my first answers to an earlier question, which is, if you just don't have time, if you don't have time to take full advantage of a system or of a process, if your enablement didn't happen or you failed, you didn't need everybody where they are, things aren't going to work. If you're not creating a critical, like in operations, sales are our customers. We are sales people to sales people sometimes, with new process, with new systems, new tech, you have to sell the why to the rep, or the why to the marketing.</span></p>\n",
  "\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style=\"font-weight: 400;\">You have to tell them what's it for them. So if you don't do that, everything falls short.</span></p>\n",
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">Yeah. I'd agree. I would definitely agree with that. I think you have to make a case, right? What's in it for them?</span></p>\n",
  '\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style="font-weight: 400;">Yeah.</span></p>\n',
  '\n<p><strong>Lisa Kelly</strong></p>\n<p><span style="font-weight: 400;">But to touch on something you said earlier about administration, I think those are things that don\'t get investigated enough during sales processes. Especially when the sales leaders are leading the sale, like, "Hey, I found this cool tool. It does this cool thing." And so they bring in their RevOps leader and they say, "Great, can we do this?" "Well, yes, of course we can do this." But the revenue operations person doesn\'t often ask enough questions about how difficult is this to administer? What does this look like when you\'re thinking about the different situations. If someone wants to change the process or the pricing or whatever that is, what am I going to have to do?</span></p>\n',
  '\n<p><strong>Lisa Kelly&nbsp;</strong></p>\n<p><span style="font-weight: 400;">I worked with a company where adding a skew had about a 90 day tail on it. And it was one of those things where I\'m like, "What? Excuse me, what is happening?" And it was mind boggling, but that\'s when you see these over the administration of the tools that have been cobbled together, are so bad because the administration wasn\'t a consideration during the purchase. Yes, it does cool stuff if the operations person is truly in a backseat, you\'re going to have problems. That person needs to be really involved in the sales process because ultimately if you say, "Yes, we can do this, but I need two analysts to run it."</span></p>\n',
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">All of a sudden the ROI looks really different on that product. So, it's a good call out about the administration, because I think a lot of early stage RevOps leaders are less experienced oftentimes. And they don't always know and they're super excited and like, \"Yes, I can do this. I'm going to take on the world.\" And then they get themselves in trouble because you can't possibly meet the needs of the entire organization when they get to ... Now instead of having two sales leaders, you now have 25 and they all have their special flavor of whatever that they want to do.</span></p>\n",
  '\n<p><strong>Lisa Kelly</strong></p>\n<p><span style="font-weight: 400;">So, administration is very important when you\'re considering what tools to put into a rapid growth company.</span></p>\n',
  "\n<p><strong>Kate McCullough&nbsp;</strong></p>\n<p><span style=\"font-weight: 400;\">Yeah. I would argue though, as well, is that the sword cuts both ways. I think there's a lot of people afraid of administration. Oftentimes when I'm talking to RevOps people, they're like, \"Oh, I don't know if I want to put a tool in, because I'm afraid of the administration of it.\" But then I'm like, we'll stay with our spreadsheet exercise for this. So I think that on the scale of flexibility is spreadsheet is imminently flexible, because it's a personal productivity tool, but from a scale challenge, it's when you're growing in revenue, there's a lot of errors, a lot of things that can happen in that process if you're staying with those things.</span></p>\n",
  '\n<p><strong>Kate McCullough</strong></p>\n<p><span style="font-weight: 400;">So, I guess the question I would have is, what flexibility does a company actually need as they scale? And how do you balance that flexibility against administration for sales and CS specifically?</span></p>\n',
  "\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style=\"font-weight: 400;\">That's where we get into Salesforce's imminent flexibility. You can do everything with it. And that's just my opinion. I know there are other CRMs out there that do a lot and are equally as flexible. But in terms of when thinking about that, you can still implement your core systems, but you don't have to take full advantage of everything they have to offer. You don't have to go buy enterprise everything and put a tech stack in place that's ready to be at the enterprise level tomorrow. You can start small with many systems, and get the core functionality in place now, and then slowly develop that over time. That's tends to be the approach I take.</span></p>\n",
  '\n<p><strong>Kate McCullough</strong></p>\n<p><span style="font-weight: 400;">Yeah.</span></p>\n',
  "\n<p><strong>Lisa Kelly&nbsp;</strong></p>\n<p><span style=\"font-weight: 400;\">I think you see a ton of change in rapid growth, a ton of change. Change in process, change in leaders, change in everything. So I think the flexibility of those tools, and I would agree Salesforce can be very flexible, as long as you are not getting over complex to encourage flexibility because, you end up with some pretty big debt in Salesforce instances in companies that have made changes without truly making the change. They'll just add a field, that they won't take away the old one, because somebody needs it. So there has to be true thoughtful change and that flexibility can be dangerous. To Eric's point earlier about Salesforce's flexibility is the best thing about it and the worst thing about it at times.</span></p>\n",
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">But I think finding tools that are equally as flexible and work and play nice with Salesforce, I think is a really important thing. Because if you're comfortable administering Salesforce, you want to be comfortable administering the other tools because it feels similar to Salesforce in some way. So I think there's some benefit to having tools that are built to work with Salesforce specifically, if you're on a Salesforce instance.</span></p>\n",
  "\n<p><strong>Kate McCullough</strong></p>\n<p><span style=\"font-weight: 400;\">Yeah. So if I hear you correctly, if I were to start building a story here, it's like start with metrics and make sure that you're prioritizing against the most needed metrics against your lifecycle and your process, and then look at tools specifically for flexibility and then administration, but also the flexibility to change as you grow.</span></p>\n",
  '\n<p><strong>Eric Portugal Welsh&nbsp;</strong></p>\n<p><span style="font-weight: 400;">Yep.</span></p>\n',
  "\n<p><strong>Kate McCullough</strong></p>\n<p><span style=\"font-weight: 400;\">You're weighing that. And then also be considerate of the fact that no tool is not necessarily a better solution, depending on how it fits in that metrics evaluation. So am I hearing that right as this is how you would progress and the balance if you're going to look at all the different attributes to think through?</span></p>\n",
  '\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style="font-weight: 400;">I think so. I missed one I think key point that just came to mind and it\'s really consider the pricing and how easy it is to add usage, add seats to whatever system you\'re going with, because there are some tools out there that make it really difficult to buy and really are not flexible with their growth pricing models. So if one particular infamous one comes to mind that requires emails back and forth for a week before you can add one seat to it. And it\'s a system everybody wants,&nbsp;</span></p>\n<p><span style="font-weight: 400;">everybody uses. And it is a nightmare from a growing startup to work with.</span></p>\n',
  '\n<p><strong>Kate McCullough</strong></p>\n<p><span style="font-weight: 400;">Yeah. So in addition to the metrics, you\'re saying, making sure the ability to innovate pricing is there is critical. Is that a ... top three or top one in your mind?</span></p>\n',
  '\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style="font-weight: 400;">It\'s definitely in the top three.</span></p>\n',
  "\n<p><strong>Kate McCullough</strong></p>\n<p><span style=\"font-weight: 400;\">Yeah. I guess Eric, how are you expecting your pricing strategy to change in the next year? How many different variations do you think are going to happen? How many new skews and how many things, there are add ons, discounting strategy. I'm just curious what you're expecting?</span></p>\n",
  "\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style=\"font-weight: 400;\">Oh gosh. We're launching our CPQ tomorrow, so I don't know what to expect in terms of how the pricing is going to change. I'm sure our list pricing is going to change a couple times. Like I said before, giving control to the rep to figure out what the market can bear is what we're doing and I'm wanting to see their strategies. Like the best asset you have at a early stage startup is a good startup sales rep. Somebody who understands that they're the person on the front lines and it's their job to figure this stuff out for you. That's what I'm looking at. I don't think we're going to be adding new SKUs. I think we're going to be adding in maybe another pricing tier and starting to develop a PLG motion out of it.</span></p>\n",
  "\n<p><strong>Lisa Kelly</strong></p>\n<p><span style=\"font-weight: 400;\">Well, Kate McCullough, I think we're going to have to have Eric back in six to nine months and ask him that question again, after the CPQ is in and he's made seven changes or 17 changes between now and then. I think we'll have to have him on another RevOps review and get the retrospective.</span></p>\n",
  '\n<p><strong>Eric Portugal Welsh</strong></p>\n<p><span style="font-weight: 400;">Yeah, I will say I did ask about the administration of new, when we made the purchasing decision and one of those selling points to me was how easy it was to update and change skews and have it all native, like reflect natively in Salesforce because doing that work just in Salesforce is a nightmare.</span></p>\n',
  "\n<p><strong>Kate McCullough</strong></p>\n<p><span style=\"font-weight: 400;\">There you go. I don't have too many more questions, but ... it's been a pleasure to have both of you and we're going to bring you back number one, and then there will be more questions. We'll make you do an update for us of where you're at, but thank you so much for your time , both of you.</span></p>\n",
  '\n<p><strong>Lisa Kelly</strong></p>\n<p><span style="font-weight: 400;">Thank you, Kate McCullough. Thank Eric.</span></p>\n',
  '\n<p><strong>Eric Portugal Welsh&nbsp;</strong></p>\n<p><span style="font-weight: 400;">Thanks Lisa.</span></p>\n',
  "",
];
