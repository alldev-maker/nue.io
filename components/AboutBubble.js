import { motion, useAnimation } from "framer-motion";
import useInView from "react-cool-inview";

export default function AboutBubble({ children, color }) {
    const controls = useAnimation();
    const { observe, unobserve, inView, scrollDirection, entry } = useInView({
        threshold: 0.7, // Default is 0
        onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
            // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]
            // unobserve(); // To stop observing the current target element
            // observe(); // To re-start observing the current target element
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
            y: -100,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
    };
    return (
        <motion.div
            ref={observe}
            variants={item}
            initial="hidden"
            animate={controls}
            className="relative w-48 md:w-72 md:h-72 lg:w-80 xl:w-88 h-48 lg:h-80 xl:h-88 flex items-center justify-center"
        >
            <div
                className={`absolute inset-0 w-full h-full ellipse-${color} opacity-50 rounded-full`}
            ></div>

            <div className="relative">
                <div>
                    <p className="text-center text-xl lg:text-2xl font-anMedium font-semibold">
                        {children}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
