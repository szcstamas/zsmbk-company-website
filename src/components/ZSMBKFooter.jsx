// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ZSMBKPerformanceLogo from "../assets/images/logo/zsmbk-performance-logo.jpg";
import ZSMBKMiningStationLogo from "../assets/images/logo/zsmbk-mining-station-logo.jpg";
import DiscordLogo from "../assets/images/logo/discord-logo.png";

const ZSMBKFooter = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2, type: "spring" }}
      className="flex justify-center items-center flex-col gap-4 w-full py-12 border-t-2 border-gray-600 mt-20"
    >
      <p className="font-bold font-dm-sans-bold text-xl">ZSMBK Corporation Ltd.</p>
      <p>2024-2026 &copy;</p>
      <p>Minden jog fenntartva.</p>
      <div className="font-dm-sans-black text-center mt-4">
        <a href="https://discord.gg/WDvd4ja476" target="_blank" className="footer-discord-logo">
          <img src={DiscordLogo} alt="Logo of Discord" className="w-[80px]" />
        </a>
      </div>
      <div className="flex justify-center items-center gap-12 mt-10">
        <Link to="zsmbk-performance" className="w-[150px] rounded-full overflow-hidden border-2 border-zsmbk-blue transition-all hover:-translate-y-2">
          <img src={ZSMBKPerformanceLogo} alt="Logo of ZSMBK Performance" />
        </Link>
        <Link to="zsmbk-mining-station" className="w-[150px] rounded-full overflow-hidden border-2 border-zsmbk-golden transition-all hover:-translate-y-2">
          <img src={ZSMBKMiningStationLogo} alt="Logo of ZSMBK Mining Station" />
        </Link>
      </div>
    </motion.footer>
  );
};

export default ZSMBKFooter;
