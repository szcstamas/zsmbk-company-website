// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

const ZSMBKContact = () => {
    const ThomasNumberToCopy = "+38-76-118-5169";
    const EricNumberToCopy = "+38-76-260-7738";
    const OliverNumberToCopy = "+38-77-335-6459";

    const handleCopy = async (numberToCopy) => {
        try {
            await navigator.clipboard.writeText(numberToCopy);
            alert("A telefonszám ki lett másolva a vágólapra. Köszönjük! - ZSMBK Corporation")
        } catch (error) {
            console.error("Hiba a másolás során:", error);
        }
    };

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
                className="mt-20 text-7xl max-md:text-4xl max-sm:text-2xl text-beige text-center uppercase font-zsmbk-draco">
                ZSMBK
                <span className="text-xl max-md:text-lg max-sm:text-sm font-zsmbk-draco block">
                    Corporation
                </span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: .5, type: "spring" }}
                className="font-dm-sans-regular text-center mt-20">
                <span className="font-dm-sans-black block text-4xl text-white">Elérhetőségeink</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-blue">- - --</span>

                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: .5, type: "spring" }}
                >
                    <span className="font-zsmbk-draco block text-6xl max-md:text-2xl text-zsmbk-blue mt-20">ZSMBK</span>
                    <span className="font-zsmbk-draco block text-xl max-md:text-lg max-sm:text-sm text-zsmbk-blue">Performance</span>

                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: .5, type: "spring" }}
                        className="flex justify-center items-stretch gap-4 w-full mt-8 max-md:flex-col">
                        <div className="flex-1 border-2 border-zsmbk-blue p-8 rounded-lg">
                            <span className="text-gray-400 block mb-4">EMAIL</span>
                            <a href="mailto:info.zsmbkperformance@gmail.com" className="font-bold text-lg transition-all hover:text-zsmbk-blue">info.zsp@gmail.com</a>
                        </div>
                        <div className="flex-1 border-2 border-zsmbk-blue p-8 rounded-lg">
                            <span className="text-gray-400 block mb-4">TELEFON</span>
                            <span className="text-2xl font-bold">Thomas Russell</span> <br /> (tulajdonos, ügyvezető igazgató):
                            <p onClick={() => handleCopy(ThomasNumberToCopy)} className="mt-4 text-2xl max-md:text-lg font-bold cursor-pointer transition-all hover:text-zsmbk-blue">{ThomasNumberToCopy} <span className="p-4 bg-zsmbk-blue text-black mt-5 block rounded-lg">Másolás</span></p>
                        </div>
                        <div className="flex-1 border-2 border-zsmbk-blue p-8 rounded-lg">
                            <span className="text-gray-400 block mb-4">CÍMÜNK</span>
                            <p className="text-2xl max-md:text-lgfont-bold">2250 Los Santos, Docks, Monica str. 25 </p>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: .5, type: "spring" }}
                >
                    <span className="font-zsmbk-draco block text-6xl max-md:text-2xl text-zsmbk-golden mt-20">ZSMBK</span>
                    <span className="font-zsmbk-draco block text-xl max-md:text-lg max-sm:text-sm text-zsmbk-golden">Mining Station</span>

                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: .5, type: "spring" }}
                        className="flex justify-center items-stretch gap-4 w-full mt-8 max-md:flex-col text-center">
                        <div className="flex-1 border-2 border-zsmbk-golden p-8 rounded-lg">
                            <span className="text-gray-400 block mb-4">EMAIL</span>
                            <a href="mailto:info.zsmbkperformance@gmail.com" className="font-bold text-lg transition-all hover:text-zsmbk-golden">zsms.application@gmail.com</a>
                        </div>
                        <div className="flex-1 border-2 border-zsmbk-golden p-8 rounded-lg font-dm-sans-regular">
                            <span className="text-gray-400 block mb-4">TELEFON</span>
                            <span className="text-2xl font-bold">Eric Russell</span> <br /> (bányavezető igazgató, 1-es bánya):
                            <p onClick={() => handleCopy(EricNumberToCopy)} className="mt-4 text-2xl max-md:text-lg font-bold cursor-pointer transition-all hover:text-zsmbk-golden mb-12">{EricNumberToCopy} <span className="p-4 bg-zsmbk-golden text-black mt-5 block rounded-lg">Másolás</span></p>
                            <span className="text-2xl font-bold">Oliver Everett</span> <br /> (bányavezető igazgató, 2-es bánya):
                            <p onClick={() => handleCopy(OliverNumberToCopy)} className="mt-4 text-2xl max-md:text-lg font-bold cursor-pointer transition-all hover:text-zsmbk-golden">{OliverNumberToCopy} <span className="p-4 bg-zsmbk-golden text-black mt-5 block rounded-lg">Másolás</span></p>
                        </div>
                        <div className="flex-1 border-2 border-zsmbk-golden p-8 rounded-lg">
                            <span className="text-gray-400 block mb-4">CÍMÜNK</span>
                            <p className="text-2xl max-md:text-lgfont-bold">1040 Tierra Robada, Silver Vein</p>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: .5, type: "spring" }}
                >
                    <span className="font-zsmbk-draco block text-6xl max-md:text-2xl text-zsmbk-green mt-20">ZSMBK</span>
                    <span className="font-zsmbk-draco block text-xl max-md:text-lg max-sm:text-sm text-zsmbk-green">Logistics</span>

                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: .5, type: "spring" }}
                        className="flex justify-center items-stretch gap-4 w-full mt-8 max-md:flex-col"
                    >
                        <div className="flex-1 border-2 border-zsmbk-green p-8 rounded-lg">
                            <span className="text-gray-400 block mb-4">EMAIL</span>
                            <a href="mailto:info.zsmbkperformance@gmail.com" className="font-bold text-lg transition-all hover:text-zsmbk-green">info.zslog@gmail.com</a>
                        </div>
                        <div className="flex-1 border-2 border-zsmbk-green p-8 rounded-lg">
                            <span className="text-gray-400 block mb-4">TELEFON</span>
                            <span className="text-2xl font-bold">Thomas Russell</span> <br /> (tulajdonos, ügyvezető igazgató):
                            <p onClick={() => handleCopy(ThomasNumberToCopy)} className="mt-4 text-2xl max-md:text-lg font-bold cursor-pointer transition-all hover:text-zsmbk-green">{ThomasNumberToCopy} <span className="p-4 bg-zsmbk-green text-black mt-5 block rounded-lg">Másolás</span></p>
                        </div>
                        <div className="flex-1 border-2 border-zsmbk-green p-8 rounded-lg">
                            <span className="text-gray-400 block mb-4">CÍMÜNK</span>
                            <p className="text-2xl max-md:text-lgfont-bold">2250 Los Santos, Docks, Monica str. 25 </p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section >
    );
};

export default ZSMBKContact;
