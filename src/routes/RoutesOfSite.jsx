// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ZSMBKHome from "../pages/ZSMBKHome";
import ZSMBKPerformance from "../pages/zsmbk-performance/ZSMBKPerformanceHome";
import ZSMBKMiningStation from "../pages/zsmbk-mining-station/ZSMBKMiningStationHome";
import ZSMBKLogistics from "../pages/zsmbk-logistics/ZSMBKLogistics";
import ZSMBKContact from "../pages/ZSMBKContact";
import PageNotFound from "../pages/PageNotFound";
import { AnimatePresence } from "framer-motion";

const RoutesOfSite = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route path="/" element={<ZSMBKHome />} />
        <Route path="zsmbk-performance" element={<ZSMBKPerformance />} />
        <Route path="zsmbk-mining-station" element={<ZSMBKMiningStation />} />
        <Route path="zsmbk-logistics" element={<ZSMBKLogistics />} />
        <Route path="zsmbk-kapcsolat" element={<ZSMBKContact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesOfSite;
