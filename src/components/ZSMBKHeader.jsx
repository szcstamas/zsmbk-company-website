// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ZSMBKLogo from "../assets/images/logo/zsmbk-corporation-logo.png";
import ZSMBKMobileNav from "./zsmbk-header-components/ZSMBKMobileNav";
import ZSMBKDesktopNav from "./zsmbk-header-components/ZSMBKDesktopNav";

const ZSMBKHeader = () => {
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState(false);
  const arrayOfChapters = [
    {
      name: "Performance (Matricázás)",
      url: "/zsmbk-performance",
    },
    {
      name: "Mining Station (Bányászat)",
      url: "/zsmbk-mining-station",
    },
    {
      name: "Kapcsolat",
      url: "/zsmbk-kapcsolat",
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuHidden(!isMobileMenuHidden);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2, type: "spring" }}
      className="border-b-2 pb-5 flex flex-col gap-6 pt-1 w-full"
    >
      <Link to="/">
        <img
          src={ZSMBKLogo}
          alt="Logo of ZSMBK Corporation"
          className="w-full max-w-[200px] m-auto"
        />
      </Link>

      <nav className="flex gap-4 max-md:flex-col">
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex-1 text-center text-beige border-beige border-2 p-3 transition-all hover:bg-beige hover:text-slate-900"
        >
          Menü
        </button>
        <ZSMBKMobileNav
          handleClosingMobileNavProp={toggleMobileMenu}
          arrayOfLinksProp={arrayOfChapters}
          isMobileNavHiddenProp={isMobileMenuHidden}
        />
        <ZSMBKDesktopNav
          arrayOfDesktopNavLinksProp={arrayOfChapters}
        />
      </nav>
    </motion.header>
  );
};

export default ZSMBKHeader;
