import { motion, useAnimation } from "framer-motion";
import useInView from "react-cool-inview";
export default function IconPill({ children, color, svg }) {
    const controls = useAnimation();

    const { observe, unobserve, inView, scrollDirection, entry } = useInView({
        threshold: 0.5, // Default is 0
        onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
            // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]

            unobserve(); // To stop observing the current target element
            observe(); // To re-start observing the current target element
        },
        onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
            // console.log("observe");
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
    const item = {
        hidden: {
            opacity: 0,
            x: -50,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <motion.div
            className={`${color} px-3 py-2 rounded-full text-center mr-4 mb-4 h-9 flex`}
            variants={item}
            initial="hidden"
            animate={controls}
            ref={observe}
        >
            <div className="flex items-center">
                <div className="w-8">{svg}</div>
                <div className="">
                    <p className="whitespace-nowrap font-anMedium text-sm">
                        {children}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
