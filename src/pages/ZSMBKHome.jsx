// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ZSMBKHome = () => {

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2, type: "spring" }}
      className="zsmbk-home-container"
    >
      <motion.h1
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: .25, type: "spring" }}
        className="mt-20 text-7xl max-md:text-4xl text-beige text-center uppercase font-zsmbk-draco">
        ZSMBK
        <span className="text-xl font-zsmbk-draco block">
          Corporation
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: .5, type: "spring" }}
        className="text-center mt-10 mb-20"
      >
        <strong>A ZSMBK Corporation</strong> egy innovatív, sokoldalú vállalatcsoport, amely két különálló leányvállalattal szolgálja ki ügyfeleit az autóipar és bányász-technológia területén. Célunk, hogy egyedi megoldásokat kínáljunk a kreativitás és a teljesítmény iránt érdeklődők számára, miközben elkötelezetten támogatjuk a fenntartható fejlődést és az iparági kiválóságot.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 1, type: "spring" }}
        className="border-2 border-zsmbk-blue rounded-lg p-12 mt-20">
        <p className="text-center">
          <span className="font-zsmbk-draco block text-6xl max-md:text-2xl text-zsmbk-blue">ZSMBK</span>
          <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-blue">Performance</span>
          <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-blue my-4">-- - -</span>
          <span className="text-zsmbk-blue font-bold">A ZSMBK Performance</span> a kreatív autósok és a stílus szerelmeseinek tökéletes partnere. Autómatricázási szolgáltatásainkkal olyan egyedi megjelenést biztosítunk, amely kiemeli ügyfeleink járműveinek személyiségét és karakterességét. Precizitás, minőség és kreativitás jellemzi munkánkat, legyen szó sportautóról, családi autóról vagy akár céges flottáról.
        </p>
        <Link to="zsmbk-performance" className="p-4 flex items-center justify-center gap-4 font-dm-sans-bold max-w-[300px] mx-auto mt-8 rounded-lg transition-all bg-transparent text-white stroke-white border-2 border-zsmbk-blue hover:bg-zsmbk-blue hover:text-black hover:stroke-black">
          Bővebb információ
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: .25, type: "spring" }}
        className="border-2 border-zsmbk-golden rounded-lg p-12 mt-20">
        <p className="text-center">
          <span className="font-zsmbk-draco block text-6xl max-md:text-2xl text-zsmbk-golden">ZSMBK</span>
          <span className="font-zsmbk-draco block text-2xl max-md:text-lgtext-zsmbk-golden">Mining Station</span>
          <span className="font-zsmbk-draco block text-2xl max-md:text-lgtext-zsmbk-golden my-4">-- - -</span>
          <span className="text-zsmbk-golden font-bold">A ZSMBK Mining Station</span> a bányászati szektorban tevékenykedik, innovatív megoldásokat kínálva az érc- és egyéb nyersanyag-kitermelés terén. A modern technológia és a fenntartható folyamatok iránti elkötelezettségünk révén hatékony és környezettudatos megoldásokat nyújtunk partnereink számára.
        </p>
        <Link to="zsmbk-mining-station" className="p-4 flex items-center justify-center gap-4 font-dm-sans-bold max-w-[300px] mx-auto mt-8 rounded-lg transition-all bg-transparent text-white stroke-white border-2 border-zsmbk-golden hover:bg-zsmbk-golden hover:text-black hover:stroke-black">
          Bővebb információ
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </Link>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: .5, type: "spring" }}
        className="text-center mt-20">
        <span className="font-dm-sans-black block text-4xl my-4">Miért a ZSMBK Corporation?</span>

        Cégcsoportunk erőssége a diverzitásban és az innovációban rejlik. Különböző iparágakat összekötve hozzuk létre a jövő megoldásait, ügyfeleink elégedettsége és a minőségi szolgáltatások iránti elkötelezettségünk révén.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: .5, type: "spring" }}
      >
        <p className="text-center mt-20">
          <span className="font-dm-sans-black block text-4xl my-4">Csatlakozz hozzánk, és fedezd fel,</span><span className="text-zsmbk-golden">hogyan válhat cégünk a sikereid részesévé!</span>
        </p>
        <Link to="zsmbk-mining-station" className="p-4 flex items-center justify-center gap-4 font-dm-sans-bold max-w-[200px] mx-auto mt-8 rounded-lg transition-all bg-transparent text-white stroke-white border-2 border-zsmbk-golden hover:bg-zsmbk-golden hover:text-black hover:stroke-black">
          Kapcsolat
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </Link>
      </motion.div>
    </motion.section >
  );
};

export default ZSMBKHome;
