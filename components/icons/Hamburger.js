import { motion } from "framer-motion";
export const HamburgerIcon = () => {
    return (
        <motion.svg
            initial={{
                rotate: 0,
                opacity: 0,
            }}
            animate={{
                rotate: 180,
                opacity: 1,
            }}
            exit={{
                rotate: 0,
                opacity: 0,
            }}
            width="27"
            height="14"
            viewBox="0 0 27 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="1.94238"
                y1="7"
                x2="25.1521"
                y2="7"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="1.94238"
                y1="1"
                x2="25.1521"
                y2="1"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="1.94238"
                y1="13"
                x2="25.1521"
                y2="13"
                stroke="#151515"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </motion.svg>
    );
};
