import { motion } from "framer-motion";
export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                rotate: 0,
                opacity: 0,
            }}
            animate={{
                rotate: -180,
                opacity: 1,
            }}
            exit={{
                rotate: 0,
                opacity: 0,
            }}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="1.41421"
                y1="1"
                x2="16.9706"
                y2="16.5564"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="1"
                y1="-1"
                x2="23"
                y2="-1"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 17.9707 1)"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </motion.svg>
    );
};
