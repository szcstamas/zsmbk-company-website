import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ZSMBKHeaderNavClassNames } from "./classnames/ZSMBKHeaderNavClassNames";

const ZSMBKMobileNav = ({
  isMobileNavHiddenProp,
  arrayOfLinksProp,
  handleClosingMobileNavProp,
}) => {
  const location = useLocation();
  const valueOfCurrentURL = location.pathname;
  const { disabledClassesOfButton, defaultClassesOfButton } =
    ZSMBKHeaderNavClassNames;

  return (
    <AnimatePresence>
      {isMobileNavHiddenProp && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="mobile-menu border-t-2 pt-4 mt-1 md:hidden flex flex-col gap-4 w-full"
        >
          {arrayOfLinksProp.map(({ name, url }) => {
            const isButtonDisabled = valueOfCurrentURL === url;
            return (
              <Link
                to={url}
                key={name}
                onClick={handleClosingMobileNavProp}
                disabled={isButtonDisabled}
                className={
                  isButtonDisabled
                    ? disabledClassesOfButton
                    : defaultClassesOfButton
                }
              >
                {name}
              </Link>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ZSMBKMobileNav;
