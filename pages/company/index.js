import { useAnimation } from "framer-motion";
import useInView from "react-cool-inview";

// Next
import Head from "next/head";
import Link from "next/link";

// Components
import Header1 from "@/components/text/Header1";
import Header2 from "@/components/text/Header2";
import HeaderLabel from "@/components/text/HeaderLabel";
import Section from "@/components/Section";
import IconPill from "@/components/IconPill";
import SectionFade from "@/components/SectionFade";
import AboutBubble from "@/components/AboutBubble";
import { MetaTags } from "@/components/MetaTags";

// Blobs
import BlobRed3 from "@/components/blobs/Red3";
import BlobWhite1 from "@/components/blobs/White1";

import BlurRed1 from "@/components/blurs/Red1";
import { Leadership } from "@/data/leadership";
import { HOST_URL } from "@/config/index";

const HighlightCard = () => {
  return (
    <div className="mx-auto shadow-lg mb-6 max-w-[370px] rounded-2xl bg-[#F9F8FA] border border-transparent border-solid hover:border-primary">
      <div className="p-14">
        <img
          src="/images/company/highlight-placeholder.png"
          alt="highlight"
          className="mb-6"
        />
        <p className="text-lg font-anMedium mb-6">Title goes here</p>
        <p className="opacity-70 mb-6">
          “Interesting and positive highlight about Nue from press. Interesting
          and positive highlight about Nue from press.”
        </p>
        <Link href="#">
          <div className="flex items-baseline">
            <span className="text-primary cursor-pointer mr-4">
              {`Read the articles`}
            </span>
            <img src="/icons/right.svg" alt="right arrow" />
          </div>
        </Link>
      </div>
    </div>
  );
};

const LeadCard = ({
  clipPath,
  bgColor,
  imagePath,
  imageStyle,
  name,
  title,
  brief,
  about,
  linkedin,
}) => {
  return (
    <div className="flex flex-col items-center h-full bg-[#F9F8FA] rounded-xl drop-shadow-xl pb-4">
      <div className="flex flex-col justify-center items-start p-6">
        <div className="flex justify-center w-full">
          <div
            style={{ clipPath: `path('${clipPath}')`, background: bgColor }}
            className="flex justify-center w-[270px] h-[280px] items-end scale-90"
          >
            <img
              src={imagePath}
              alt={name}
              className="h-full"
              style={imageStyle}
            />
          </div>
        </div>
        <p className="text-xl font-anDemi my-4">{name}</p>
        <div className="flex justify-between w-full items-start">
          <p className="text-lg font-anMedium mb-4 text-primary">{title}</p>
          <a href={linkedin}>
            <img
              src="/images/company/linkedin.svg"
              alt={name + " linkedin link"}
              className="w-[24px]"
            />
          </a>
        </div>
        <p className="text-lg font-anDemi mb-4">{brief}</p>
        <div>
          {about.map((item, index) => (
            <p key={index} className="mb-4">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const icons = {
  headphones: () => {
    return (
      <svg
        width="37"
        height="38"
        viewBox="0 0 37 38"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-indigo-200"
      >
        <path d="M37 27.326C36.9992 29.817 36.1344 32.2331 34.5488 34.1742C32.9632 36.1153 30.7519 37.465 28.281 38L27.1007 34.5137C28.1815 34.3384 29.2094 33.9292 30.1102 33.3156C31.0111 32.7021 31.7625 31.8994 32.3102 30.9654H27.75C26.7687 30.9654 25.8276 30.5816 25.1337 29.8984C24.4398 29.2152 24.05 28.2886 24.05 27.3224V20.0364C24.05 19.0702 24.4398 18.1436 25.1337 17.4604C25.8276 16.7773 26.7687 16.3934 27.75 16.3934H33.1853C32.7338 12.8723 30.9929 9.63438 28.2891 7.28721C25.5854 4.94004 22.1046 3.64495 18.5 3.64495C14.8954 3.64495 11.4146 4.94004 8.71086 7.28721C6.0071 9.63438 4.26616 12.8723 3.8147 16.3934H9.25C10.2313 16.3934 11.1724 16.7773 11.8663 17.4604C12.5602 18.1436 12.95 19.0702 12.95 20.0364V27.3224C12.95 28.2886 12.5602 29.2152 11.8663 29.8984C11.1724 30.5816 10.2313 30.9654 9.25 30.9654H3.7C2.7187 30.9654 1.77759 30.5816 1.0837 29.8984C0.38982 29.2152 0 28.2886 0 27.3224V18.2149C0 8.15483 8.28245 0 18.5 0C28.7176 0 37 8.15483 37 18.2149V27.326ZM33.3 27.3224V20.0364H27.75V27.3224H33.3ZM3.7 20.0364V27.3224H9.25V20.0364H3.7Z" />
      </svg>
    );
  },
  shoppingCart: () => {
    return (
      <svg
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-indigo-200"
      >
        <path d="M6.0518 8.54978L0 2.5978L2.64055 0L8.69048 5.95382H37.1338C37.4246 5.9538 37.7115 6.02067 37.9714 6.1491C38.2313 6.27753 38.4571 6.46395 38.6308 6.6935C38.8045 6.92304 38.9212 7.18935 38.9717 7.47117C39.0222 7.75298 39.005 8.0425 38.9215 8.31662L34.4428 23.0038C34.3276 23.3822 34.0914 23.7139 33.7694 23.9497C33.4473 24.1855 33.0566 24.3128 32.6551 24.3128H9.78402V27.9846H30.3113V31.6564H7.91791C7.42299 31.6564 6.94834 31.463 6.59837 31.1187C6.24841 30.7744 6.0518 30.3074 6.0518 29.8205V8.54978ZM9.78402 9.62562V20.641H31.2667L34.6257 9.62562H9.78402ZM8.85097 39C8.10858 39 7.3966 38.7099 6.87166 38.1934C6.34671 37.677 6.0518 36.9765 6.0518 36.2462C6.0518 35.5158 6.34671 34.8153 6.87166 34.2989C7.3966 33.7824 8.10858 33.4923 8.85097 33.4923C9.59335 33.4923 10.3053 33.7824 10.8303 34.2989C11.3552 34.8153 11.6501 35.5158 11.6501 36.2462C11.6501 36.9765 11.3552 37.677 10.8303 38.1934C10.3053 38.7099 9.59335 39 8.85097 39ZM31.2443 39C30.5019 39 29.7899 38.7099 29.265 38.1934C28.7401 37.677 28.4451 36.9765 28.4451 36.2462C28.4451 35.5158 28.7401 34.8153 29.265 34.2989C29.7899 33.7824 30.5019 33.4923 31.2443 33.4923C31.9867 33.4923 32.6987 33.7824 33.2236 34.2989C33.7486 34.8153 34.0435 35.5158 34.0435 36.2462C34.0435 36.9765 33.7486 37.677 33.2236 38.1934C32.6987 38.7099 31.9867 39 31.2443 39Z" />
      </svg>
    );
  },
  profile: () => {
    return (
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-200"
      >
        <path d="M15.1931 4.05951C17.2822 4.05951 18.9914 5.76874 18.9914 7.85779C18.9914 9.94685 17.2822 11.6561 15.1931 11.6561C13.1041 11.6561 11.3948 9.94685 11.3948 7.85779C11.3948 5.76874 13.1041 4.05951 15.1931 4.05951ZM15.1931 21.1518C20.3208 21.1518 26.2081 23.6017 26.588 24.9501V26.8492H3.79828V24.969C4.17811 23.6017 10.0654 21.1518 15.1931 21.1518ZM15.1931 0.26123C10.996 0.26123 7.59656 3.66069 7.59656 7.85779C7.59656 12.0549 10.996 15.4544 15.1931 15.4544C19.3902 15.4544 22.7897 12.0549 22.7897 7.85779C22.7897 3.66069 19.3902 0.26123 15.1931 0.26123ZM15.1931 17.3535C10.1224 17.3535 0 19.8983 0 24.9501V30.6475H30.3862V24.9501C30.3862 19.8983 20.2638 17.3535 15.1931 17.3535Z" />
      </svg>
    );
  },
  timeline: () => {
    return (
      <svg
        width="39"
        height="21"
        viewBox="0 0 39 21"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-200"
      >
        <path d="M38.146 3.46782C38.146 5.37513 36.5855 6.93565 34.6782 6.93565C34.3661 6.93565 34.0714 6.90097 33.7939 6.81427L27.6212 12.9697C27.7079 13.2471 27.7426 13.5592 27.7426 13.8713C27.7426 15.7786 26.1821 17.3391 24.2748 17.3391C22.3675 17.3391 20.8069 15.7786 20.8069 13.8713C20.8069 13.5592 20.8416 13.2471 20.9283 12.9697L16.5068 8.54818C16.2294 8.63488 15.9173 8.66956 15.6052 8.66956C15.2931 8.66956 14.981 8.63488 14.7036 8.54818L6.81427 16.4548C6.90097 16.7322 6.93565 17.027 6.93565 17.3391C6.93565 19.2464 5.37513 20.8069 3.46782 20.8069C1.56052 20.8069 0 19.2464 0 17.3391C0 15.4318 1.56052 13.8713 3.46782 13.8713C3.77993 13.8713 4.07469 13.906 4.35212 13.9927L12.2588 6.10337C12.1721 5.82594 12.1374 5.51384 12.1374 5.20173C12.1374 3.29443 13.6979 1.73391 15.6052 1.73391C17.5125 1.73391 19.073 3.29443 19.073 5.20173C19.073 5.51384 19.0383 5.82594 18.9517 6.10337L23.3731 10.5248C23.6506 10.4381 23.9627 10.4035 24.2748 10.4035C24.5869 10.4035 24.899 10.4381 25.1764 10.5248L31.3318 4.35212C31.2451 4.07469 31.2104 3.77993 31.2104 3.46782C31.2104 1.56052 32.7709 0 34.6782 0C36.5855 0 38.146 1.56052 38.146 3.46782Z" />
      </svg>
    );
  },
  inAppSelfService: () => {
    return (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.358 19.858C4.91342 19.858 0.5 15.4446 0.5 10.0001C0.5 4.55551 4.91342 0.14209 10.358 0.14209C15.8025 0.14209 20.216 4.55551 20.216 10.0001C20.216 15.4446 15.8025 19.858 10.358 19.858ZM5.4418 16.1672C6.83725 17.2828 8.57139 17.8893 10.358 17.8865C12.3 17.8865 14.0774 17.1846 15.4516 16.0213C14.1545 14.6904 12.3741 13.9409 10.5157 13.9433C8.58753 13.941 6.74686 14.7478 5.4418 16.1672ZM10.5157 11.9717C8.07387 11.9684 5.73924 12.9745 4.06464 14.7516V14.7526C1.62767 11.525 2.02719 6.97709 4.98956 4.22382C7.95193 1.47055 12.5169 1.4044 15.5578 4.07069C18.5987 6.73698 19.1298 11.2714 16.7874 14.5683C15.1254 12.903 12.8684 11.9686 10.5157 11.9717ZM10.358 10.9859C8.18021 10.9859 6.41479 9.22044 6.41479 7.04268C6.41479 4.86491 8.18021 3.09948 10.358 3.09948C12.5357 3.09948 14.3012 4.86491 14.3012 7.04268C14.3012 9.22044 12.5357 10.9859 10.358 10.9859ZM12.3296 7.04268C12.3296 8.13156 11.4469 9.01427 10.358 9.01427C9.2691 9.01427 8.38638 8.13156 8.38638 7.04268C8.38638 5.95379 9.2691 5.07108 10.358 5.07108C11.4469 5.07108 12.3296 5.95379 12.3296 7.04268Z"
          fill="#823EF2"
        />
      </svg>
    );
  },
  directSales: () => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.85796 19.8579C4.41636 19.8579 -1.48727e-05 15.4415 -1.4397e-05 9.99993C-1.39213e-05 4.55832 4.41636 0.141951 9.85797 0.141952C15.2996 0.141952 19.7159 4.55833 19.7159 9.99993C19.7159 15.4415 15.2996 19.8579 9.85796 19.8579ZM9.85797 2.11355C5.50074 2.11355 1.97158 5.6427 1.97158 9.99993C1.97158 14.3572 5.50074 17.8863 9.85796 17.8863C14.2152 17.8863 17.7443 14.3572 17.7443 9.99993C17.7443 5.6427 14.2152 2.11355 9.85797 2.11355ZM5.91477 9.99993L8.87217 9.99993L8.87217 13.9431L10.8438 13.9431L10.8438 9.99993L13.8012 9.99993L9.85796 6.05674L5.91477 9.99993Z"
          fill="#823EF2"
        />
      </svg>
    );
  },
  websiteSales: () => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1" className="text-white fill-current">
          <rect y="0.14209" width="19.716" height="16.3624" rx="1" />
        </mask>
        <rect
          y="0.14209"
          width="19.716"
          height="16.3624"
          rx="1"
          stroke="#823EF2"
          strokeWidth="4"
          mask="url(#path-1-inside-1)"
        />
        <rect
          x="6.08728"
          y="14.9619"
          width="7.53858"
          height="4.89596"
          className="text-indigo-200 fill-current"
        />
      </svg>
    );
  },
  partnerSales: () => {
    return (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-indigo-200 fill-current"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.358 19.858C4.91342 19.858 0.5 15.4446 0.5 10.0001C0.5 4.55551 4.91342 0.14209 10.358 0.14209C15.8025 0.14209 20.216 4.55551 20.216 10.0001C20.216 15.4446 15.8025 19.858 10.358 19.858ZM2.91816 12.6223C4.35791 11.5568 6.10237 10.9831 7.89349 10.9859C8.92167 10.9859 9.90747 11.1712 10.8183 11.5103C11.6839 11.1722 12.716 10.9859 13.8083 10.9859C15.4447 10.9859 16.948 11.4038 17.9545 12.1255C18.8677 8.85148 17.5806 5.36075 14.7605 3.46336C11.9405 1.56596 8.22203 1.68883 5.53338 3.76825C2.84473 5.84766 1.79082 9.41575 2.91816 12.6223ZM5.72473 7.28913C5.72473 8.51412 6.71778 9.50717 7.94278 9.50717C9.16777 9.50717 10.1608 8.51412 10.1608 7.28913C10.1608 6.06413 9.16777 5.07108 7.94278 5.07108C6.71778 5.07108 5.72473 6.06413 5.72473 7.28913ZM8.38638 14.3376V17.638V17.639C6.52336 17.1563 4.90067 16.0101 3.82312 14.4155C5.20696 13.2729 7.00796 12.7658 8.78465 13.0186C8.52834 13.4139 8.38638 13.8565 8.38638 14.3376ZM13.8083 12.9575C15.4555 12.9575 16.7519 13.5026 17.1393 14.028H17.1403C15.7193 16.4214 13.1414 17.888 10.358 17.8865V14.3376C10.358 13.7431 11.8308 12.9575 13.8083 12.9575ZM11.8367 8.52137C11.8367 9.61026 12.7194 10.493 13.8083 10.493C14.8972 10.493 15.7799 9.61026 15.7799 8.52137C15.7799 7.43249 14.8972 6.54978 13.8083 6.54978C12.7194 6.54978 11.8367 7.43249 11.8367 8.52137Z"
        />
      </svg>
    );
  },
  upgradeDowngrades: () => {
    return (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-200"
      >
        <path d="M6.70613 10.5171H9.85812L5.65547 14.7198L1.45282 10.5171H4.60481V6.31445H6.70613V10.5171Z" />
        <path d="M16.1111 9.4829H19.2631L15.0604 5.28025L10.8578 9.4829H14.0098V13.6855H16.1111V9.4829Z" />
      </svg>
    );
  },
  renewals: () => {
    return (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-200"
      >
        <path d="M10.358 0.142102C7.95068 0.138309 5.62585 1.01885 3.82509 2.61645L3.82608 2.61744L4.7133 4.49242C6.95323 2.19671 10.3604 1.48626 13.3312 2.69547C16.3019 3.90468 18.2444 6.79264 18.2443 10.0001H15.7799L18.4484 15.6339C19.602 13.982 20.2192 12.0149 20.2159 10.0001C20.2159 4.55551 15.8025 0.142102 10.358 0.142102ZM10.358 19.858C12.7653 19.8618 15.0901 18.9813 16.8909 17.3837L16.8899 17.3827L16.0027 15.5077C13.7627 17.8034 10.3555 18.5139 7.38478 17.3047C4.41402 16.0955 2.47154 13.2075 2.47159 10.0001H4.93609L2.26753 4.36624C1.15358 5.96323 0.5 7.90525 0.5 10.0001C0.5 15.4446 4.91342 19.858 10.358 19.858Z" />
      </svg>
    );
  },
  upsells: () => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-200"
      >
        <path d="M0.845822 14.0133L0.85568 14.0231C2.3955 17.4626 5.84579 19.858 9.85798 19.858C15.3025 19.858 19.716 15.4446 19.716 10.0001C19.716 4.55551 15.3025 0.14209 9.85798 0.14209C4.41342 0.14209 8.06951e-06 4.55551 8.06951e-06 10.0001C-0.00176231 11.3814 0.287791 12.7475 0.849766 14.0093L0.845822 14.0133ZM5.72552 9.13355L2.37184 12.4872V12.4882C1.05998 8.54804 3.02849 4.26563 6.87317 2.69577C10.7179 1.12591 15.1212 2.80656 16.9422 6.53887C18.7631 10.2712 17.3777 14.7761 13.7742 16.8402C10.1706 18.9043 5.58383 17.8202 3.28567 14.3612L5.72552 11.9224L8.51336 14.7102L13.0194 10.2041L14.787 11.9717V7.04268H9.85798L11.6255 8.81021L8.51336 11.9224L5.72552 9.13355Z" />
      </svg>
    );
  },
  usageConsumption: () => {
    return (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-200"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.75319 0.181522C9.05581 0.154928 9.36118 0.14209 9.67021 0.14209C15.4942 0.14209 20.216 4.86383 20.216 10.6878C20.216 10.9969 20.2031 11.3022 20.1765 11.6049H18.7955C18.3351 16.2386 14.425 19.858 9.67021 19.858C4.6055 19.858 0.5 15.7525 0.5 10.6878C0.5 5.93308 4.11948 2.0229 8.75319 1.56347V0.181522ZM8.75393 11.6049V3.40853C4.91463 3.89705 2.115 7.28372 2.35735 11.1464C2.59971 15.009 5.80069 18.0192 9.67095 18.024C13.3681 18.024 16.4877 15.273 16.9503 11.6049H8.75393ZM10.587 2.0238C14.6727 2.45702 17.9008 5.68511 18.334 9.7708H10.587V2.0238Z"
        />
        <path
          d="M9.64551 10.0518C9.77071 7.25554 10.0341 1.57532 10.0845 1.22474L11.2109 0.849121L15.1549 2.66462L18.1599 5.35656L18.7233 10.0518H9.64551Z"
          fillOpacity="0.58"
        />
      </svg>
    );
  },
  landExpands: () => {
    return (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-200"
      >
        <path d="M10.358 0.14209C15.7996 0.14209 20.216 4.55846 20.216 10.0001C20.216 15.4417 15.7996 19.858 10.358 19.858C4.91638 19.858 0.5 15.4417 0.5 10.0001C0.5 4.55846 4.91638 0.14209 10.358 0.14209ZM10.358 17.8865C14.7152 17.8865 18.2444 14.3573 18.2444 10.0001C18.2444 5.64284 14.7152 2.11369 10.358 2.11369C6.00075 2.11369 2.4716 5.64284 2.4716 10.0001C2.4716 14.3573 6.00075 17.8865 10.358 17.8865ZM11.3438 10.0001V13.9433H9.37218V10.0001H6.41479L10.358 6.05688L14.3012 10.0001H11.3438Z" />
      </svg>
    );
  },
  amendments: () => {
    return (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-blue-200"
      >
        <path d="M17.0992 0.14209C17.6382 0.14209 18.0756 0.583727 18.0756 1.12789V4.83153L16.1228 6.80313V2.11369H2.45285V17.8865H16.1228V15.1676L18.0756 13.196V18.8723C18.0756 19.4164 17.6382 19.858 17.0992 19.858H1.47642C0.937438 19.858 0.5 19.4164 0.5 18.8723V1.12789C0.5 0.583727 0.937438 0.14209 1.47642 0.14209H17.0992ZM18.8353 6.8534L20.216 8.24732L12.6213 15.9149L11.2387 15.9129L11.2407 14.5209L18.8353 6.8534V6.8534ZM10.2642 10.0001V11.9717H5.38212V10.0001H10.2642ZM13.1935 6.05688V8.02847H5.38212V6.05688H13.1935Z" />
      </svg>
    );
  },
  percent: () => {
    return (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2271_6066)">
          <path
            d="M15.0184 17.3934C14.2559 17.3934 13.5245 17.0905 12.9853 16.5513C12.4461 16.0121 12.1432 15.2807 12.1432 14.5182C12.1432 13.7556 12.4461 13.0243 12.9853 12.4851C13.5245 11.9459 14.2559 11.6429 15.0184 11.6429C15.781 11.6429 16.5123 11.9459 17.0515 12.4851C17.5907 13.0243 17.8937 13.7556 17.8937 14.5182C17.8937 15.2807 17.5907 16.0121 17.0515 16.5513C16.5123 17.0905 15.781 17.3934 15.0184 17.3934V17.3934ZM15.0184 15.7504C15.3452 15.7504 15.6587 15.6206 15.8897 15.3895C16.1208 15.1584 16.2507 14.845 16.2507 14.5182C16.2507 14.1914 16.1208 13.8779 15.8897 13.6468C15.6587 13.4157 15.3452 13.2859 15.0184 13.2859C14.6916 13.2859 14.3782 13.4157 14.1471 13.6468C13.916 13.8779 13.7862 14.1914 13.7862 14.5182C13.7862 14.845 13.916 15.1584 14.1471 15.3895C14.3782 15.6206 14.6916 15.7504 15.0184 15.7504ZM5.98193 8.35693C5.60435 8.35693 5.23047 8.28256 4.88163 8.13807C4.53278 7.99357 4.21582 7.78179 3.94883 7.51479C3.68184 7.2478 3.47005 6.93084 3.32555 6.582C3.18106 6.23316 3.10669 5.85927 3.10669 5.48169C3.10669 5.10411 3.18106 4.73022 3.32555 4.38138C3.47005 4.03254 3.68184 3.71558 3.94883 3.44858C4.21582 3.18159 4.53278 2.9698 4.88163 2.82531C5.23047 2.68082 5.60435 2.60645 5.98193 2.60645C6.7445 2.60645 7.47583 2.90937 8.01504 3.44858C8.55425 3.9878 8.85718 4.71913 8.85718 5.48169C8.85718 6.24425 8.55425 6.97558 8.01504 7.51479C7.47583 8.05401 6.7445 8.35693 5.98193 8.35693V8.35693ZM5.98193 6.71394C6.30875 6.71394 6.62217 6.58411 6.85326 6.35302C7.08436 6.12193 7.21418 5.8085 7.21418 5.48169C7.21418 5.15488 7.08436 4.84145 6.85326 4.61036C6.62217 4.37927 6.30875 4.24944 5.98193 4.24944C5.65512 4.24944 5.34169 4.37927 5.1106 4.61036C4.87951 4.84145 4.74969 5.15488 4.74969 5.48169C4.74969 5.8085 4.87951 6.12193 5.1106 6.35302C5.34169 6.58411 5.65512 6.71394 5.98193 6.71394V6.71394ZM16.309 3.02952L17.4706 4.19112L4.69218 16.9703L3.53058 15.8087L16.3082 3.02952H16.309Z"
            fill="#52CD99"
          />
        </g>
        <defs>
          <clipPath id="clip0_2271_6066">
            <rect
              width="19.716"
              height="19.716"
              fill="white"
              transform="translate(0.64209 0.14209)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  },
  milestone: () => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2271_5645)">
          <path
            d="M9.85788 15.3273L13.3435 11.8425C14.0327 11.1532 14.5021 10.2749 14.6922 9.31878C14.8823 8.36268 14.7847 7.37166 14.4116 6.47106C14.0385 5.57045 13.4067 4.8007 12.5962 4.25913C11.7856 3.71756 10.8327 3.4285 9.85788 3.4285C8.88305 3.4285 7.93012 3.71756 7.11957 4.25913C6.30901 4.8007 5.67725 5.57045 5.30417 6.47106C4.93108 7.37166 4.83342 8.36268 5.02354 9.31878C5.21365 10.2749 5.68301 11.1532 6.37226 11.8425L9.85788 15.3273ZM14.5051 13.0041L9.85788 17.6513L5.21066 13.0041C4.29159 12.085 3.6657 10.914 3.41215 9.63915C3.15859 8.36432 3.28876 7.04293 3.78619 5.84207C4.28361 4.64122 5.12596 3.61484 6.20671 2.89271C7.28746 2.17059 8.55808 1.78516 9.85788 1.78516C11.1577 1.78516 12.4283 2.17059 13.509 2.89271C14.5898 3.61484 15.4321 4.64122 15.9296 5.84207C16.427 7.04293 16.5572 8.36432 16.3036 9.63915C16.0501 10.914 15.4242 12.085 14.5051 13.0041V13.0041ZM4.10739 18.2149H15.6084V19.8579H4.10739V18.2149Z"
            fill="#52CD99"
          />
        </g>
        <defs>
          <clipPath id="clip0_2271_5645">
            <rect
              width="19.716"
              height="19.716"
              fill="white"
              transform="translate(0 0.14209)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  },
  payAsYouGo: () => {
    return (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2271_5692)">
          <path
            d="M5.15881 3.63943C8.38565 0.995023 13.1544 1.17904 16.1669 4.19147C19.3748 7.39942 19.3748 12.6011 16.1669 15.8091C12.9589 19.0171 7.75721 19.0171 4.54926 15.8091C3.5648 14.826 2.84635 13.6088 2.46138 12.2718C2.07642 10.9349 2.03756 9.52199 2.34846 8.16588L2.41172 7.90875L4.00049 8.32772C3.60662 9.8247 3.75379 11.4127 4.41607 12.8118C5.07835 14.2109 6.21323 15.3313 7.6207 15.9756C9.02817 16.6199 10.6179 16.7467 12.1097 16.3337C13.6015 15.9207 14.8997 14.9943 15.7754 13.7179C16.6511 12.4415 17.0481 10.8969 16.8966 9.35644C16.745 7.81595 16.0545 6.3784 14.9469 5.29713C13.8392 4.21586 12.3854 3.56029 10.8417 3.44593C9.29797 3.33158 7.76344 3.7658 6.50853 4.67205L6.32698 4.80842L7.16244 5.64388L3.38684 6.51467L4.25762 2.73906L5.15799 3.63943H5.15881ZM11.1796 5.0713V6.71429H13.2333V8.35729H8.71507C8.61243 8.3571 8.51344 8.39535 8.43759 8.4645C8.36173 8.53366 8.31452 8.6287 8.30525 8.73093C8.29597 8.83315 8.32531 8.93514 8.38748 9.01682C8.44964 9.09849 8.54014 9.15393 8.64114 9.17222L8.71507 9.17879H12.0011C12.5458 9.17879 13.0681 9.39517 13.4533 9.78032C13.8384 10.1655 14.0548 10.6878 14.0548 11.2325C14.0548 11.7772 13.8384 12.2996 13.4533 12.6848C13.0681 13.0699 12.5458 13.2863 12.0011 13.2863H11.1796V14.9293H9.53657V13.2863H7.48283V11.6433H12.0011C12.1037 11.6435 12.2027 11.6052 12.2786 11.5361C12.3544 11.4669 12.4016 11.3719 12.4109 11.2696C12.4202 11.1674 12.3908 11.0654 12.3287 10.9838C12.2665 10.9021 12.176 10.8466 12.075 10.8284L12.0011 10.8218H8.71507C8.17039 10.8218 7.64801 10.6054 7.26286 10.2203C6.8777 9.83511 6.66133 9.31273 6.66133 8.76804C6.66133 8.22335 6.8777 7.70097 7.26286 7.31582C7.64801 6.93067 8.17039 6.71429 8.71507 6.71429H9.53657V5.0713H11.1796Z"
            fill="#52CD99"
          />
        </g>
        <defs>
          <clipPath id="clip0_2271_5692">
            <rect
              width="19.716"
              height="19.716"
              fill="white"
              transform="translate(0.5 0.14209)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  },
  recurring: () => {
    return (
      <svg
        width="25"
        height="27"
        viewBox="0 0 25 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="25" height="27" fill="#D4FBEA" />
        <rect x="5" y="2" width="15" height="24" rx="2.1348" fill="#52CD99" />
        <rect
          x="6.60718"
          y="3.71436"
          width="11.7857"
          height="18.2857"
          rx="1.4232"
          fill="#A9E6CC"
        />
        <ellipse
          cx="12.5004"
          cy="23.7141"
          rx="1.07143"
          ry="1.14286"
          fill="#F0FBF6"
        />
      </svg>
    );
  },
  oneTime: () => {
    return (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2271_5823)">
          <path
            d="M15.287 5.89244H17.7515C17.9694 5.89244 18.1784 5.97899 18.3324 6.13305C18.4865 6.28711 18.573 6.49606 18.573 6.71394V16.5719C18.573 16.7898 18.4865 16.9987 18.3324 17.1528C18.1784 17.3069 17.9694 17.3934 17.7515 17.3934H2.96456C2.74669 17.3934 2.53774 17.3069 2.38368 17.1528C2.22962 16.9987 2.14307 16.7898 2.14307 16.5719V3.42794C2.14307 3.21007 2.22962 3.00112 2.38368 2.84706C2.53774 2.693 2.74669 2.60645 2.96456 2.60645H15.287V5.89244ZM3.78606 7.53544V15.7504H16.93V7.53544H3.78606ZM3.78606 4.24944V5.89244H13.644V4.24944H3.78606ZM12.8225 10.8214H15.287V12.4644H12.8225V10.8214Z"
            fill="#52CD99"
          />
        </g>
        <defs>
          <clipPath id="clip0_2271_5823">
            <rect
              width="19.716"
              height="19.716"
              fill="white"
              transform="translate(0.5 0.14209)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  },
  subscription: () => {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.0018 4C18.6635 4 13.8092 6.24663 10.2973 9.86718L6.5473 5.99999V16H16.2443L13.0359 12.6914C15.8448 9.79194 19.7163 7.99999 24.0018 7.99999C32.5729 7.99999 39.517 15.161 39.517 24.0001H43.3957C43.3957 12.991 34.6773 4 24.0018 4ZM23.445 11.1992V14.0547C22.7876 14.1407 19.1079 14.8575 19.1079 19.4375C19.1079 26.1196 25.8162 24.1397 25.8162 28.5977C25.8162 30.8297 24.4157 30.8828 24.1306 30.8828C23.8708 30.8828 22.1648 31.0253 22.1648 27.6094H18.498C18.498 33.3934 22.5672 33.8554 23.1723 33.9415V36.6016H25.1154V33.9415C25.771 33.8575 29.4791 33.2263 29.4791 28.5703C29.4791 22.1603 22.7728 23.3872 22.7707 19.4531C22.7707 17.1991 23.973 17.1289 24.233 17.1289C24.708 17.1289 25.8389 17.5627 25.8389 20.3086H29.5057C29.5057 15.0547 26.0221 14.2353 25.3995 14.1133V11.1992H23.445ZM4.60791 24.0001C4.60791 35.009 13.3264 44 24.0018 44C29.3402 44 34.1946 41.7533 37.7064 38.1328L41.4564 42.0001V32H31.7594L34.9678 35.3086C32.1589 38.2081 28.2874 40 24.0018 40C15.4308 40 8.4867 32.839 8.4867 24.0001H4.60791Z"
          fill="#67D5CA"
        />
      </svg>
    );
  },
  complexity: () => {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4242 6C8.30432 6 6.54541 7.81387 6.54541 10V37.9999C6.54541 40.1862 8.30432 42 10.4242 42H37.5757C39.6957 42 41.4545 40.1862 41.4545 37.9999V10C41.4545 7.81387 39.6957 6 37.5757 6H10.4242ZM10.4242 10H37.5757V37.9999H10.4242V25.9999H18.1818V18H22.0606V30H29.8181V34.0001L35.6363 28.0001L29.8181 22.0001V25.9999H25.9393V14H14.303V22.0001H10.4242V10Z"
          fill="#67D5CA"
        />
      </svg>
    );
  },
};

export default function About() {
  const controls = useAnimation();

  const { observe, unobserve, inView, scrollDirection, entry } = useInView({
    threshold: 0.25, // Default is 0
    onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
      // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]

      unobserve(); // To stop observing the current target element
      observe(); // To re-start observing the current target element
    },
    onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
      controls.start("show");
      unobserve();
      // Triggered when the target enters the viewport
    },
    onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
      // Triggered when the target leaves the viewport
      // controls.start("leave");
    },
    // More useful options...
  });
  return (
    <>
      <MetaTags
        title="Nue: Modern Business Starts with Empowering RevOps"
        decription="Accelerate business results by selling how you want, when you want, with end-to-end revenue visibility. No more cobbling together solutions. Just hit go."
        ogURL="/company"
        socialGraph="/images/company/social-graph.png"
      />
      <Section bgColor="bg-gradient-to-br from-white via-red-50 to-red-100 ">
        <SectionFade />
        <div className="absolute top-0 right-0 ">
          <BlobRed3 />
        </div>
        <div className="absolute -top-0 left-0 ">
          <BlobWhite1 />
        </div>
        <div className="absolute -top-96 right-0">
          <BlurRed1 />
        </div>

        <div className="container relative pt-32 lg:pt-40">
          <div className="flex justify-center mb-12">
            <div className="w-11/12 md:w-full lg:w-11/12 xl:w-9/12 text-center">
              <HeaderLabel>About Nue</HeaderLabel>
              <Header1>Modern business starts with empowering RevOps</Header1>
            </div>
          </div>
          <div className="flex justify-center mb-24">
            <div className="w-11/12 md:w-10/12 xl:w-8/12 text-xl lg:text-3xl font-anMedium">
              <p className="mb-6 leading-normal">
                “Go-to-market motions today have seen a collision of new
                requirements. At Nue we believe that the right way to accelerate
                business results is by giving RevOps teams the agility to sell
                however they want and wherever they want – with complete revenue
                visibility end-to-end.
              </p>
              <p className="mb-12 leading-normal">
                No more cobbling together solutions. No more coding projects. No
                more systems integrators. Just hit go. Nue enables every
                go-to-mark market motion expected of the modern business.”
              </p>
            </div>
          </div>

          <div className="flex justify-center relative ">
            <div className="flex justify-center w-full absolute top-0 left-0 transform -translate-x-20 md:-translate-x-32 lg:-translate-x-72">
              <div className="relative w-full h-48 md:h-72 lg:h-80 xl:h-88 flex justify-center flex-row-reverse ">
                <AboutBubble color="indigo">Channels</AboutBubble>
                <div className=" flex-col justify-center hidden lg:flex">
                  <div className="flex items-center flex-row-reverse mb-2 relative transform translate-x-20 ">
                    <div className="w-28 h-0.5 bg-indigo-200 mt-3"></div>

                    <div className="relative px-2 ">
                      <div className="flex items-center w-full justify-start -mx-2 mb-2">
                        <div className="mx-2">{icons.headphones()}</div>
                        <div className="ml-1">
                          <p className="text-indigo-200 text-lg font-anMedium">
                            +
                          </p>
                        </div>
                        <div className="mx-2">{icons.shoppingCart()}</div>
                      </div>
                      <div className="">
                        <p className="font-anMedium">
                          Convergence of B2B <br />
                          and B2C
                        </p>
                      </div>
                      <div className="absolute flex flex-col items-start mt-6">
                        <IconPill
                          color="bg-indigo-100"
                          svg={icons.inAppSelfService()}
                        >
                          In-app self-service
                        </IconPill>
                        <IconPill
                          color="bg-indigo-100"
                          svg={icons.directSales()}
                        >
                          Direct sales
                        </IconPill>

                        <IconPill
                          color="bg-indigo-100"
                          svg={icons.websiteSales()}
                        >
                          Website sales
                        </IconPill>

                        <IconPill
                          color="bg-indigo-100"
                          svg={icons.partnerSales()}
                        >
                          Partner sales
                        </IconPill>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full flex justify-center translate-x-20 md:translate-x-24 md:translate-x-32 lg:translate-x-72">
              <AboutBubble color="blue">Changes</AboutBubble>
              <div className="flex-col justify-center hidden lg:flex">
                <div className="flex items-center mb-2 relative transform -translate-x-20">
                  <div className="w-28 h-0.5 bg-blue-200 mt-3 "></div>

                  <div className="relative px-2">
                    <div className="flex items-center w-full justify-start -mx-2 mb-2">
                      <div className="mx-2">{icons.profile()}</div>
                      <div className="mx-2">{icons.timeline()}</div>
                    </div>
                    <div className="">
                      <p className="font-anMedium">
                        Dynamic Customer <br />
                        Journeys
                      </p>
                    </div>
                    <div className="absolute flex flex-col items-start mt-6">
                      <IconPill
                        color="bg-blue-100"
                        svg={icons.upgradeDowngrades()}
                      >
                        Upgrades / Downgrades
                      </IconPill>
                      <IconPill color="bg-blue-100" svg={icons.renewals()}>
                        Renewals
                      </IconPill>

                      <IconPill color="bg-blue-100" svg={icons.upsells()}>
                        Upsells
                      </IconPill>
                      <IconPill
                        color="bg-blue-100"
                        svg={icons.usageConsumption()}
                      >
                        Usage Consumption
                      </IconPill>

                      <IconPill color="bg-blue-100" svg={icons.landExpands()}>
                        Land &amp; Expands
                      </IconPill>

                      <IconPill color="bg-blue-100" svg={icons.amendments()}>
                        Amendments
                      </IconPill>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center transform -translate-y-20 md:-translate-y-24 lg:-translate-y-36">
            <div className="w-full flex flex-col items-center">
              <AboutBubble color="green">Complexity</AboutBubble>
              <div className="w-6/12 mx-auto -translate-y-28 hidden lg:block flex">
                <div className="h-28 w-0.5 bg-green-200 mx-auto mb-6"></div>
                <div className="text-center">
                  <div></div>
                  <div className="">
                    <div className="flex items-center w-full justify-center  mb-2">
                      <div className="mx-2">{icons.subscription()}</div>
                      <div className="mx-2">{icons.complexity()}</div>
                    </div>
                    <p className="font-anMedium w-64 mx-auto">
                      Subscription + Consumption + Physical Goods + Services
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center mt-6">
                    <IconPill color="bg-green-100" svg={icons.recurring()}>
                      Subscription (user, feature, freemium)
                    </IconPill>

                    <IconPill color="bg-green-100" svg={icons.oneTime()}>
                      One-time fees
                    </IconPill>
                    <IconPill color="bg-green-100" svg={icons.payAsYouGo()}>
                      Pay as you go
                    </IconPill>
                    <IconPill color="bg-green-100" svg={icons.milestone()}>
                      Milestone model
                    </IconPill>
                    <IconPill color="bg-green-100" svg={icons.percent()}>
                      Tiered, dynamic discounting
                    </IconPill>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container relative pb-40 lg:hidden">
            <div className="flex justify-center">
              <div className="w-11/12">
                <div className="mb-12">
                  <div className="flex items-center justify-center w-full  mb-2">
                    <div className="mx-2">{icons.headphones()}</div>
                    <div className="ml-1">
                      <p className="text-indigo-200 text-lg font-anMedium">+</p>
                    </div>
                    <div className="mx-2">{icons.shoppingCart()}</div>
                  </div>
                  <div className="text-center mb-6">
                    <p className="text-center mb-2 text-xl lg:text-2xl font-anMedium ">
                      Channels
                    </p>
                    <p className="font-anMedium">Convergence of B2B and B2C</p>
                  </div>
                  <div className="flex flex-wrap justify-center ">
                    <IconPill
                      color="bg-indigo-100"
                      svg={icons.inAppSelfService()}
                    >
                      In-app self-service
                    </IconPill>
                    <IconPill color="bg-indigo-100" svg={icons.directSales()}>
                      Direct sales
                    </IconPill>

                    <IconPill color="bg-indigo-100" svg={icons.websiteSales()}>
                      Website sales
                    </IconPill>

                    <IconPill color="bg-indigo-100" svg={icons.partnerSales()}>
                      Partner sales
                    </IconPill>
                  </div>
                </div>

                <div className="mb-12">
                  <div className="flex items-center w-full justify-center  mb-2">
                    <div className="mx-2">{icons.profile()}</div>
                    <div className="mx-2">{icons.timeline()}</div>
                  </div>
                  <div className="text-center mb-6">
                    <p className="text-center mb-2 text-xl lg:text-2xl font-anMedium ">
                      Changes
                    </p>
                    <p className="font-anMedium">Dynamic Customer Journeys</p>
                  </div>

                  <div className="flex flex-wrap justify-center">
                    <IconPill
                      color="bg-blue-100"
                      svg={icons.upgradeDowngrades()}
                    >
                      Upgrades / Downgrades
                    </IconPill>
                    <IconPill color="bg-blue-100" svg={icons.renewals()}>
                      Renewals
                    </IconPill>

                    <IconPill color="bg-blue-100" svg={icons.upsells()}>
                      Upsells
                    </IconPill>
                    <IconPill
                      color="bg-blue-100"
                      svg={icons.usageConsumption()}
                    >
                      Usage Consumption
                    </IconPill>

                    <IconPill color="bg-blue-100" svg={icons.landExpands()}>
                      Land &amp; Expands
                    </IconPill>

                    <IconPill color="bg-blue-100" svg={icons.amendments()}>
                      Amendments
                    </IconPill>
                  </div>
                </div>
                <div>
                  <div className="text-center mb-6">
                    <div className="flex items-center w-full justify-center  mb-2">
                      <div className="mx-2">{icons.subscription()}</div>
                      <div className="mx-2">{icons.complexity()}</div>
                    </div>
                    <p className="text-center mb-2 text-xl lg:text-2xl font-anMedium">
                      Complexity
                    </p>
                    <p className="font-anMedium">
                      Subscription + Consumption + Physical + Goods + Services
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center">
                    <IconPill color="bg-green-100" svg={icons.recurring()}>
                      Subscription (user, feature, freemium)
                    </IconPill>
                    <IconPill color="bg-green-100" svg={icons.oneTime()}>
                      One-time fees
                    </IconPill>
                    <IconPill color="bg-green-100" svg={icons.milestone()}>
                      Milestone model
                    </IconPill>
                    <IconPill color="bg-green-100" svg={icons.payAsYouGo()}>
                      Pay as you go
                    </IconPill>
                    <IconPill color="bg-green-100" svg={icons.percent()}>
                      Tiered, dynamic discounting
                    </IconPill>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-24 md:-mt-48 mb-48 hidden">
            <Header2 className="mb-12 mx-auto text-center">
              Press highlights
            </Header2>
            <div className="flex justify-between flex-wrap md:flex-nowrap md:max-w-[780px] mx-auto">
              <HighlightCard />
              <HighlightCard />
            </div>
          </div>
          <div className="flex justify-center mb-6 -mt-20 lg:-mt-32">
            <div className="w-11/12 md:w-10/12 xl:w-6/12">
              <div className="text-center">
                <Header2>About the team</Header2>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-16">
            <div className="w-11/12 md:w-10/12 xl:w-6/12">
              <div className="text-center">
                <p className="font-anRegular leading-normal text-xl">
                  Nue was founded by a team that built Zuora, Anaplan, and
                  Salesforce Steelbrick (now Salesforce CPQ). Our investors
                  include Information Venture Partners, NextWorld Capital, and
                  SV Technology.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-16">
            <div className="w-11/12 md:w-10/12 xl:w-9/12 flex flex-wrap md:justify-between">
              {Leadership.map((lead, i) => (
                <div
                  key={i}
                  className="lg:w-[calc(50%-64px)]  xl:w-[calc(33%-24px)] mb-12"
                >
                  <LeadCard {...lead} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
