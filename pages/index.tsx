import type { NextPage } from "next";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const variant = {
  Left: {
    x: "-100vw",
  },
  Right: {
    x: "100vw",
  },
};

const Home: NextPage = () => {
  const db = [1, 2, 3, 4, 5];
  const [number, setNumber] = useState(0);
  const [isLeft, setIsLeft] = useState(false);
  const moveLeft = () => {
    setIsLeft(true);
    setNumber((prev) => (prev = prev + 1));
  };
  const moveRight = () => {
    setIsLeft(false);
    setNumber((prev) => (prev = prev - 1));
  };

  return (
    <div>
      <div className="relative">
        <AnimatePresence>
          <motion.div
            key={number}
            className=" bg-blue-400 absolute top-10 h-40 aspect-square flex justify-center items-center text-white text-xl font-bold"
            initial={isLeft ? "Right" : "Left"}
            animate={{ x: "0vw" }}
            exit={isLeft ? "Left" : "Right"}
            variants={variant}
            transition={{ duration: 1 }}
          >
            {number}
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={moveLeft}
        className="px-2 shadow-md  bg-amber-400 m-2 rounded-md text-white"
      >
        left
      </button>
      <button
        onClick={moveRight}
        className="px-2 shadow-md  bg-amber-400 m-2 rounded-md text-white"
      >
        right
      </button>
    </div>
  );
};

export default Home;
