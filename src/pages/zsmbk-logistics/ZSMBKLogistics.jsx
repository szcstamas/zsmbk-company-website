// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import ZSMBKLogisticsLogo from "../../assets/images/logo/zsmbk-logistics-logo.webp";
import ZSMBKLogisticsFirst from "../../assets/images/logistics/zsmbk-logistics-ref1.webp"
import ZSMBKLogisticsSecond from "../../assets/images/logistics/zsmbk-logistics-ref2.webp"

const ZSMBKLogistics = () => {
    const ThomasNumberToCopy = "+38-76-118-5169";

    const handleCopy = async (numberToCopy) => {
        try {
            await navigator.clipboard.writeText(numberToCopy);
            alert("A telefonszám ki lett másolva a vágólapra. Köszönjük! - ZSMBK Logistics")
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
            <div className="w-[200px] rounded-full overflow-hidden border-2 border-zsmbk-green m-auto mt-20">
                <img src={ZSMBKLogisticsLogo} alt="Logo of ZSMBK Performance" />
            </div>
            <h1 className="text-center font-zsmbk-draco block text-6xl max-md:text-2xl text-zsmbk-green mt-12">
                ZSMBK
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg">Logistics</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg">-- - -</span>
            </h1>

            <div className="font-dm-sans-regular text-center mt-12">
                <p>
                    <span className="text-zsmbk-green font-bold">A ZSMBK Logistics</span> egy dinamikusan fejlődő vállalat, amely a bányák és farmok zavartalan működését támogatja professzionális beszállítói szolgáltatásokkal. Célunk, hogy ügyfeleink minden szükséges eszközt és alapanyagot megkapjanak időben és kiváló minőségben, hozzájárulva sikereikhez és hatékony működésükhöz.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: .5, type: "spring" }}
                className="text-center mt-12"
            >
                <div className="flex justify-center items-center gap-4 max-md:flex-col">
                    <div className="border-2 border-zsmbk-green rounded-full overflow-hidden w-[250px] h-[250px] flex justify-center items-center transition-all duration-500 hover:border-white hover:-translate-y-2">
                        <img src={ZSMBKLogisticsFirst} className="w-full h-full object-cover" />
                    </div>
                    <div className="border-2 border-zsmbk-green rounded-full overflow-hidden w-[250px] h-[250px] flex justify-center items-center transition-all duration-500 hover:border-white hover:-translate-y-2">
                        <img src={ZSMBKLogisticsSecond} className="w-full h-full object-cover" />
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: .5, type: "spring" }}
                className="font-dm-sans-regular text-center mt-12">
                <span className="font-dm-sans-black block text-4xl text-white">Szolgáltatásaink</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-green">-- - -</span>
                <h4 className="mt-8 font-dm-sans-black block text-2xl text-white">Ellátás bányáknak</h4>
                <ul className="text-left list-disc pl-[100px] py-4 max-md:pl-0">
                    <li><span className="text-zsmbk-green font-bold">Sínszálak és talpfák:</span> Minőségi anyagok a gördülékeny és biztonságos bányászati munkafolyamatokhoz.</li>
                    <li><span className="text-zsmbk-green font-bold">Lámpák:</span> Kiváló fényerejű világítótestek a bányák biztonságos megvilágításához.</li>
                    <li><span className="text-zsmbk-green font-bold">Üzemanyag:</span> Megbízható és gyors üzemanyag-ellátás, hogy munkagépei mindig rajtra készen állhassanak.</li>
                </ul>

                <h4 className="mt-8 font-dm-sans-black block text-2xl text-white">Ellátás farmoknak</h4>
                <ul className="text-left list-disc pl-[100px] py-4 max-md:pl-0">
                    <li><span className="text-zsmbk-green font-bold">Szalma és táp:</span> Magas minőségű takarmány és szalma a haszonállatok számára.</li>
                    <li><span className="text-zsmbk-green font-bold">Élő állatok:</span> Gondosan válogatott, egészséges állatok a gazdaság bővítéséhez.</li>
                    <li><span className="text-zsmbk-green font-bold">Növénytermesztési kellékek:</span> Minden, ami a hatékony földműveléshez szükséges, beleértve a műtrágyákat, magvakat és eszközöket.</li>
                </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: .5, type: "spring" }}
                className="font-dm-sans-regular text-center mt-12">
                <span className="font-dm-sans-black block text-4xl text-white">Miért válasszon minket?</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-green">-- - -</span>
                <ul className="text-left list-disc pl-[100px] py-4 max-md:pl-0">
                    <li><span className="text-zsmbk-green font-bold">Gyors és pontos kiszállítás:</span> Logisztikai rendszerünk biztosítja, hogy az Ön igényeihez igazodva, határidőre szállítsunk.</li>
                    <li><span className="text-zsmbk-green font-bold">Széles termékválaszték:</span> Mindent megtalál egy helyen, ami a bányászati vagy mezőgazdasági munkafolyamatokhoz szükséges.</li>
                    <li><span className="text-zsmbk-green font-bold">Megbízhatóság:</span> Partnereink hosszú távú bizalmát megbízható szolgáltatásainkkal és ügyfélközpontúságunkkal nyerjük el.</li>
                </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: .5, type: "spring" }}
                className="font-dm-sans-regular text-center mt-12">
                <span className="font-dm-sans-black block text-4xl text-white">Elérhetőségeink</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-green">- - --</span>
                <p className="text-xl mt-6">
                    <span className="font-bold text-2xl">Kérdése van?</span>
                    <br />
                    Vedd fel velünk a kapcsolatot az alábbi módokon:
                </p>
                <br />
                <div className="flex justify-center items-stretch gap-4 w-full mt-8 max-md:flex-col">
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
                </div>
            </motion.div>
        </motion.section>
    );
};

export default ZSMBKLogistics;
