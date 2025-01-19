// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import ZSMBKPerformanceLogo from "../../assets/images/logo/zsmbk-performance-logo.jpg";
import Cyberpunk01 from "../../assets/images/references/cyberpunk/1.webp";
import Cyberpunk02 from "../../assets/images/references/cyberpunk/2.webp";
import Cyberpunk03 from "../../assets/images/references/cyberpunk/3.webp";
import Cyberpunk04 from "../../assets/images/references/cyberpunk/4.webp";
import Cyberpunk05 from "../../assets/images/references/cyberpunk/5.webp";
import Cyberpunk06 from "../../assets/images/references/cyberpunk/6.webp";
import Cyberpunk07 from "../../assets/images/references/cyberpunk/7.webp";
import Cyberpunk08 from "../../assets/images/references/cyberpunk/8.webp";
import Cyberpunk09 from "../../assets/images/references/cyberpunk/9.webp";
import Cyberpunk010 from "../../assets/images/references/cyberpunk/10.webp";
import Cyberpunk011 from "../../assets/images/references/cyberpunk/11.webp";
import Drift001 from "../../assets/images/references/drift001/1.webp";
import Drift002 from "../../assets/images/references/drift001/2.webp";
import Drift003 from "../../assets/images/references/drift001/3.webp";
import Jinx001 from "../../assets/images/references/jinx/1.webp";
import Jinx002 from "../../assets/images/references/jinx/2.webp";
import Jinx003 from "../../assets/images/references/jinx/3.webp";
import Jinx004 from "../../assets/images/references/jinx/4.webp";
import Jinx005 from "../../assets/images/references/jinx/5.webp";
import Miami001 from "../../assets/images/references/miamibeach/1.webp";
import Miami002 from "../../assets/images/references/miamibeach/2.webp";
import Miami003 from "../../assets/images/references/miamibeach/3.webp";
import Nikola001 from "../../assets/images/references/nikolatesla/1.webp";
import Nikola002 from "../../assets/images/references/nikolatesla/2.webp";
import Nikola003 from "../../assets/images/references/nikolatesla/3.webp";
import Panda001 from "../../assets/images/references/panda/1.webp";
import Panda002 from "../../assets/images/references/panda/2.webp";
import Panda003 from "../../assets/images/references/panda/3.webp";
import Panda004 from "../../assets/images/references/panda/4.webp";
import Panda005 from "../../assets/images/references/panda/5.webp";
import Panda006 from "../../assets/images/references/panda/6.webp";
import Retro001 from "../../assets/images/references/retrooreg/1.webp";
import Retro002 from "../../assets/images/references/retrooreg/2.webp";
import Retro003 from "../../assets/images/references/retrooreg/3.webp";
import Retro004 from "../../assets/images/references/retrooreg/4.webp";
import Retro005 from "../../assets/images/references/retrooreg/5.webp";
import Retro006 from "../../assets/images/references/retrooreg/6.webp";

const ZSMBKPerformanceHome = () => {
    const ThomasNumberToCopy = "+38-76-118-5169";

    const designReferences = [
        {
            name: "CYBERPUNK-001",
            images: [
                Cyberpunk01,
                Cyberpunk02,
                Cyberpunk03,
                Cyberpunk04,
                Cyberpunk05,
                Cyberpunk06,
                Cyberpunk07,
                Cyberpunk08,
                Cyberpunk09,
                Cyberpunk010,
                Cyberpunk011,
            ]
        },
        {
            name: "DRIFT-001",
            images: [
                Drift001,
                Drift002,
                Drift003,
            ]
        },
        {
            name: "JINXIFIED",
            images: [
                Jinx001,
                Jinx002,
                Jinx003,
                Jinx004,
                Jinx005,
            ]
        },
        {
            name: "MIAMI",
            images: [
                Miami001,
                Miami002,
                Miami003
            ]
        },
        {
            name: "NIKOLA",
            images: [
                Nikola001,
                Nikola002,
                Nikola003,
            ]
        },
        {
            name: "PANDA",
            images: [
                Panda001,
                Panda002,
                Panda003,
                Panda004,
                Panda005,
                Panda006,
            ]
        },
        {
            name: "RETRO-001",
            images: [
                Retro001,
                Retro002,
                Retro003,
                Retro004,
                Retro005,
                Retro006,
            ]
        },

    ];

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(ThomasNumberToCopy);
            alert("A telefonszám ki lett másolva a vágólapra. Köszönjük! - ZSMBK Performance")
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
            <div className="w-[200px] rounded-full overflow-hidden border-2 border-zsmbk-blue m-auto mt-20">
                <img src={ZSMBKPerformanceLogo} alt="Logo of ZSMBK Performance" />
            </div>
            <h1 className="text-center font-zsmbk-draco block text-6xl max-md:text-2xl text-zsmbk-blue mt-12">
                ZSMBK
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg">Performance</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg">-- - -</span>
            </h1>

            <div className="font-dm-sans-regular text-center mt-12">
                <p>
                    <span className="text-zsmbk-blue font-bold">A ZSMBK Performance</span> az a pont, ahol a stílus és kreativitás találkozik egymással. Cégünk elkötelezetten dolgozik azon, hogy ügyfeleink autói ne csak mint járművek legyenek jelen a mindennapokban, hanem egyedülálló önkifejezési formaként is megállják helyüket. Munkánkat a modern technológia vívmányaival ötvözzük, hogy egyedi megjelenést és prémium minőséget nyújthassunk minden ügyfelünk számára.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: .5, type: "spring" }}
                className="font-dm-sans-regular text-center mt-12">
                <span className="font-dm-sans-black block text-4xl text-white">Referenciamunkáink</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-blue">-- - -</span>
                <span className="text-zsmbk-blue font-bold">Büszkék vagyunk ügyfeleink elégedettségére</span> és a bizalmuknak köszönhetően megvalósított projektjeinkre. A ZSMBK Performance nevéhez fűződő autók kiemelkednek a tömegből, és minden alkalommal egyedi karaktert kölcsönöznek tulajdonosuknak. Tekintse meg legfrissebb munkáinkat, vagy kövessen minket közösségi média platformjainkon!
            </motion.div>

            <motion.div className="mt-12">
                {designReferences.map(({ name, images }) => (
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: .5, type: "spring" }}
                        key={name}
                        className="my-12">
                        <h4 className="font-zsmbk-draco block text-2xl max-md:text-lg text-white">{name}</h4>
                        <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-blue mb-5">-- - -</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {images.map((imageSrc, index) => (
                                <a key={index} href={imageSrc} target="_blank" className="transition-all ease-in-out duration-700 rounded-lg overflow-hidden border-2 border-black hover:-translate-x-2 hover:-translate-y-12 hover:border-zsmbk-blue hover:shadow-lg hover:z-10">
                                    <img
                                        src={imageSrc}
                                        alt={`Image of ${name} with URL ${imageSrc}`}
                                        className="h-[250px] w-full object-cover"
                                    />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                ))}
                <div className="mt-10 text-center italic">
                    <p>A fantasztikus fényképeket köszönjük szépen <span className="text-zsmbk-blue font-bold text-xl">Alexander S Clayton</span> fotográfusnak!</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: .5, type: "spring" }}
                className="font-dm-sans-regular text-center mt-12">
                <span className="font-dm-sans-black block text-4xl text-white">Szolgáltatásunk és díjcsomagjaink</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-blue">- - --</span>

                <span className="text-zsmbk-blue font-bold">Az alább látható díjcsomagjaink</span> kialakításánál különös figyelmet fordítottunk a testreszabhatóságra, illetve figyelembe vettük leendő ügyfeleink igényeinek komplexitását is. Legyen szó egyszerű de sokatmondó, összetett de ízléses, komplex de gyors koncepcióról, bízunk benne hogy a megtervezett design mindenképpen célba ér!

                <div className="flex justify-center items-stretch gap-4 mt-8 max-md:flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: .25, type: "spring" }}
                        className="flex-1 border-2 border-zsmbk-blue rounded-lg p-10 flex flex-col justify-stretch items-center">
                        <span className="text-gray-500">DÍJCSOMAG-001</span>
                        <span className="font-dm-sans-black block text-5xl text-white">BASIC</span>

                        <p className="my-8">BASIC díjcsomagunk a <strong>kevesebb, mint 25 decal (egyedi grafikai elem)</strong> alapján felépített, egyedi livery (avagy paintjob) kiötlését és megtervezését tartalmazza.*</p>

                        <p className="mt-auto">Irányár:

                            <span className="block text-2xl max-md:text-lg font-dm-sans-black">1.000.000 - <br /> 2.000.000 $</span>
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: .5, type: "spring" }}
                        className="flex-1 border-2 border-zsmbk-blue rounded-lg p-10 flex flex-col justify-stretch items-center">
                        <span className="text-gray-500">DÍJCSOMAG-002</span>
                        <span className="font-dm-sans-black block text-5xl text-white">STANDARD</span>

                        <p className="my-8">STANDARD díjcsomagunk a <strong>25-tól 50 darab decal (egyedi grafikai elem)</strong> alapján felépített, egyedi livery (avagy paintjob) kiötlését és megtervezését tartalmazza.*</p>

                        <p className="mt-auto">Irányár:
                            <span className="block text-2xl max-md:text-lg font-dm-sans-black">2.000.000 - <br /> 3.000.000 $</span>
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: .75, type: "spring" }}
                        className="flex-1 border-2 border-zsmbk-blue rounded-lg p-10 flex flex-col justify-stretch items-center">
                        <span className="text-gray-500">DÍJCSOMAG-003</span>
                        <span className="font-dm-sans-black block text-5xl text-white">MANIAC</span>

                        <p className="my-8">MANIAC díjcsomagunk a <strong>több, mint 50 decal (egyedi grafikai elem)</strong> alapján felépített, egyedi livery (avagy paintjob) kiötlését és megtervezését tartalmazza.*</p>

                        <p className="mt-auto">Irányár:

                            <span className="block text-2xl max-md:text-lg font-dm-sans-black">3.000.000 $ +</span>
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: .5, type: "spring" }}
                className="font-dm-sans-regular text-center mt-12">
                <span className="font-dm-sans-black block text-4xl text-white">További szolgáltatásaink</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-blue">- - --</span>

                <div className="flex justify-center items-stretch gap-4 mt-8 max-md:flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: .25, type: "spring" }}
                        className="flex-1 border-2 border-zsmbk-blue rounded-lg p-10 flex flex-col justify-stretch items-center">
                        <span className="text-gray-500">EGYÉB-001</span>
                        <span className="font-dm-sans-black block text-5xl text-white">RAPIDO</span>

                        <p className="my-8">RAPIDO szolgáltatásunknak köszönhetően ügyfeleink <span className="text-white font-bold">egy már általuk létrehozott livery (avagy paintjob) ráncfelvarrását</span> vehetik igénybe, kisebb módosításokkal és kiegészítésekkel karöltve.</p>

                        <p className="mt-auto">Irányár:

                            <span className="block text-2xl max-md:text-lg font-dm-sans-black">500.000 - <br /> 1.000.000 $</span>
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: .5, type: "spring" }}
                        className="flex-1 border-2 border-zsmbk-blue rounded-lg p-10 flex flex-col justify-stretch items-center">
                        <span className="text-gray-500">EGYÉB-002</span>
                        <span className="font-dm-sans-black block text-5xl text-white">FLOTTA</span>

                        <p className="my-8">FLOTTA díjcsomagunk <strong>az újdonsült járműflotta kialakításán dolgozó cégtulajdonosok számára kedvez.</strong> Használata egyszerű: ha a megtervezett livery (paintjob) legalább három járműtípusra kerül felapplikálásra a megtervezést követően, az egyedi matrica árából 50%-ot elengedünk!*</p>

                        <p className="mt-auto">Irányár:

                            <span className="block text-2xl max-md:text-lg font-dm-sans-black">Az eredeti díjcsomagtól függ</span>
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: .75, type: "spring" }}
                        className="flex-1 border-2 border-zsmbk-blue rounded-lg p-10 flex flex-col justify-stretch items-center">
                        <span className="text-gray-500">EGYÉB-003</span>
                        <span className="font-dm-sans-black block text-5xl text-white">CUT-CUT</span>

                        <p className="my-8">CUT-CUT szolgáltatásunknak köszönhetően ügyfeleink <strong>különálló decal-ok (grafikai elemek)</strong> létrehozását, méretre igazítását, utómunkázását, retusálását, manipulációját és egyéb módosítását vehetik igénybe.</p>

                        <p className="mt-auto">Irányár:

                            <span className="block text-2xl max-md:text-lg font-dm-sans-black">250.000 - <br /> 500.000 $ / decal</span>
                        </p>
                    </motion.div>
                </div>

                <div className="my-12">
                    <span className="font-dm-sans-black block text-4xl text-white my-8">Figyelem!</span>
                    <p>* Díjcsomagjaink árszabása kizárólag <span className="text-zsmbk-blue font-bold">a tervezéshez tartozó munkadíjat ((és az IG mentés elkészítését)) tartalmazza</span>. Ha leendő ügyfelünk az egyedi matricázás megvásárlását ((2300 PP)) is szeretné igénybe venni szolgálatásunk használatát követően, abban az esetben <strong>további 1.500.000 dollár megfizetése szükséges a számla kiállítását megelőzően</strong>.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: .5, type: "spring" }}
                className="font-dm-sans-regular text-center mt-12">
                <span className="font-dm-sans-black block text-4xl text-white">Miért válassz minket?</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-blue">-- - -</span>
                <ul className="text-left list-disc pl-[100px] py-4 max-md:pl-0">
                    <li><span className="text-zsmbk-blue font-bold">Professzionális megvalósítás:</span> Szakértő csapatunk a legmodernebb technológiát alkalmazza a tökéletes eredmény érdekében.</li>
                    <li><span className="text-zsmbk-blue font-bold">Egyedi tervezés:</span> Minden munkánk személyre szabott, hogy a Te igényeidnek és ízlésednek maximálisan megfelelhessen.</li>
                    <li><span className="text-zsmbk-blue font-bold">Hosszan tartó minőség:</span> Kiváló anyagokkal dolgozunk, amelyek biztosítják az időtálló megjelenést és tartósságot.</li>
                </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: .5, type: "spring" }}
                className="font-dm-sans-regular text-center mt-12">
                <span className="font-dm-sans-black block text-4xl text-white">Elérhetőségeink</span>
                <span className="font-zsmbk-draco block text-2xl max-md:text-lg text-zsmbk-blue">- - --</span>
                <p className="text-xl mt-6">
                    <span className="font-bold text-2xl">Kérdésed van, vagy árajánlatot szeretnél kérni?</span>
                    <br />
                    Vedd fel velünk a kapcsolatot az alábbi módokon:
                </p>
                <br />
                <div className="flex justify-center items-stretch gap-4 w-full mt-8 max-md:flex-col">
                    <div className="flex-1 border-2 border-zsmbk-blue p-8 rounded-lg">
                        <span className="text-gray-400 block mb-4">EMAIL</span>
                        <a href="mailto:info.zsmbkperformance@gmail.com" className="font-bold text-lg transition-all hover:text-zsmbk-blue">info.zsp@gmail.com</a>
                    </div>
                    <div className="flex-1 border-2 border-zsmbk-blue p-8 rounded-lg">
                        <span className="text-gray-400 block mb-4">TELEFON</span>
                        <span className="text-2xl font-bold">Thomas Russell</span> <br /> (tulajdonos, ügyvezető igazgató):
                        <p onClick={handleCopy} className="mt-4 text-2xl max-md:text-lg font-bold cursor-pointer transition-all hover:text-zsmbk-blue">{ThomasNumberToCopy} <span className="p-4 bg-zsmbk-blue text-black mt-5 block rounded-lg">Másolás</span></p>
                    </div>
                    <div className="flex-1 border-2 border-zsmbk-blue p-8 rounded-lg">
                        <span className="text-gray-400 block mb-4">CÍMÜNK</span>
                        <p className="text-2xl max-md:text-lgfont-bold">2250 Los Santos, Docks, Monica str. 25 </p>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default ZSMBKPerformanceHome;
