import { useEffect, useRef, useState } from "react";

export const Animation = ({ path, fullW }) => {
  const ref = useRef(null);
  const [lottie, setLottie] = useState(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path: path,
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return fullW ? (
    <div ref={ref} className="-m-12 w-full sm:m-0" />
  ) : (
    <div ref={ref} className="-m-12 max-w-[500px] md:w-full sm:m-0" />
  );
};
