import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ZSMBKHeader from "./components/ZSMBKHeader.jsx";
import ZSMBKFooter from "./components/ZSMBKFooter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <BrowserRouter>
      <div className="body pt-12 pb-14 max-xl:px-6 max-w-[1100px] min-h-screen m-auto w-full flex items-center justify-center flex-col">
        <ZSMBKHeader />
        <App />
        <ZSMBKFooter />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
