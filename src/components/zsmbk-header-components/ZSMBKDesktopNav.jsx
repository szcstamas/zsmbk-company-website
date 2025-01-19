import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ZSMBKHeaderNavClassNames } from "./classnames/ZSMBKHeaderNavClassNames";

const ZSMBKDesktopNav = ({ arrayOfDesktopNavLinksProp, playNavClickSoundProp }) => {
  const location = useLocation();
  const valueOfCurrentURL = location.pathname;
  const { disabledClassesOfButton, defaultClassesOfButton } =
    ZSMBKHeaderNavClassNames;

  return (
    <div className="desktop-menu max-md:hidden flex gap-4 w-full">
      {arrayOfDesktopNavLinksProp.map(({ name, url }) => {
        const isButtonDisabled = valueOfCurrentURL === url;
        return (
          <Link
            to={url}
            key={name}
            onClick={playNavClickSoundProp}
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
    </div>
  );
};

export default ZSMBKDesktopNav;
