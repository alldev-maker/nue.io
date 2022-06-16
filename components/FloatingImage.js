import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const item = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.5, 0.95],
      duration: 1,
    },
  },
};

export default function FloatingImage({
  classes,
  src,
  alt,
  width,
  height,
  responsive = false,
}) {
  const controls = useAnimation();

  return (
    <motion.div
      animate={controls}
      variants={item}
      initial="hidden"
      className={`${classes}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={`${responsive ? "responsive" : "intrinsic"}`}
        onLoadingComplete={() => {
          controls.start("show");
        }}
      />
    </motion.div>
  );
}
