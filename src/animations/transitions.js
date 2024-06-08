import { motion } from "framer-motion/dist/framer-motion";
import React from 'react';

const AnimatedPage = ({ children, fromRight }) => {
  const animations = {
    initial: { opacity: 0, x: fromRight ? 100 : -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: fromRight ? -100 : 100 },
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
