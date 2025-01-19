import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2, type: "spring" }}
    >
      <div>
        <h1 className="mt-14 text-6xl max-md:text-2xl text-center font-zsmbk-draco">
          404
        </h1>
        <h4 className="mt-6 text-center text-lg max-w-[700px] w-full m-auto font-dm-sans-regular">
          Hm, a keresett oldal nem található...
        </h4>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 2, type: "spring" }}
          className="flex justify-center gap-6 w-full"
        >
          <Link to="/" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PageNotFound;
