// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import ZSMBKMiningStationLogo from "../../assets/images/logo/zsmbk-mining-station-logo.jpg";

const ZSMBKMiningStationHome = () => {
    const EricNumberToCopy = "+38-76-260-7738";
    const OliverNumberToCopy = "+38-77-335-6459";

    const handleCopy = async (numberToCopy) => {
        try {
            await navigator.clipboard.writeText(numberToCopy);
            alert("A telefonszám ki lett másolva a vágólapra. Köszönjük! - ZSMBK Mining Station")
        } catch (error) {
            console.error("Hiba a másolás során:", error);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, type: "spring" }}
            className="zsmbk-mining-station-container"
        >
            <div className="w-[200px] rounded-full overflow-hidden border-2 border-zsmbk-golden m-auto mt-20">
                <img src={ZSMBKMiningStationLogo} alt="Logo of ZSMBK Performance" />
            </div>
            <h1 className="text-center font-zsmbk-draco block text-6xl max-md:text-2xl text-zsmbk-golden mt-12">
                ZSMBK
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg">Mining Station</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg">-- - -</span>
            </h1>

            <div className="font-dm-sans-regular text-center mt-12">
                <p>
                    <span className="text-zsmbk-golden font-bold">A ZSMBK Mining Station</span> a bányászat világában kiemelkedő szereplőként elkötelezett a minőségi munka és az emberközpontú hozzáállás mellett. Küldetésünk, hogy folyamatosan bővüljünk, és innovatív megoldásokkal hozzájáruljunk a régió gazdasági fejlődéséhez.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: .5, type: "spring" }}
                className="font-dm-sans-regular text-center mt-12">
                <span className="font-dm-sans-black block text-4xl text-white">Csatlakozz hozzánk, <br /> és építsd velünk Tierra Robada jövőjét!</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-golden mb-10">-- - -</span>
                <span className="text-zsmbk-golden font-bold">Bővülő csapatunkba bányászmunkás vállalkozókat keresünk</span>, akik elhivatottak a kitartó és eredményes munka iránt. Nem csak egy állást kínálunk, hanem egy megbízható és stabil partnert is, aki értékeli kitartó és kemény munkádat.
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: .5, type: "spring" }}
                className="font-dm-sans-regular text-center mt-12">
                <span className="font-dm-sans-black block text-4xl text-white">Amit kínálunk</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-golden">-- - -</span>
                <ul className="text-left list-disc pl-[100px] py-4 max-md:pl-0">
                    <li><span className="text-zsmbk-golden font-bold">Céges autó:</span> Munkatársaink számára céges járművet biztosítunk, hogy könnyebben és kényelmesebben végezhessék mindennapi feladataikat.</li>
                    <li><span className="text-zsmbk-golden font-bold">Fizetésen felüli juttatások:</span> Heti és havi bónuszokkal jutalmazzuk kollégáink kiemelkedő teljesítményét.</li>
                    <li><span className="text-zsmbk-golden font-bold">Kiemelkedő díjazás:</span> Minden csilléért, amelyet megtöltesz majd kiürítesz, 40.000 dollár üti a markodat.</li>
                    <li><span className="text-zsmbk-golden font-bold">Folyamatos fejlődés:</span> Cégünk stabilan növekszik, és folyamatosan új lehetőségeket teremt munkavállalói számára.</li>
                    <li><span className="text-zsmbk-golden font-bold">Céges rendezvények:</span> Remek hangulatú céges rendezvényeinknek köszönhetően gyerekjáték a csapatépítés!</li>
                </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: .5, type: "spring" }}
                className="font-dm-sans-regular text-center mt-12">
                <span className="font-dm-sans-black block text-4xl text-white">Helyszín és elérhetőség</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-golden">-- - -</span>
                <span className="text-zsmbk-golden font-bold">A ZSMBK Mining Station modern bányászati telephelyei</span> stratégiai helyen helyezkednek el, hogy biztosítsák a céghez fűződő, hatékony munkavégzést.
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 200 }}
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
        </motion.section>
    );
};

export default ZSMBKMiningStationHome;
