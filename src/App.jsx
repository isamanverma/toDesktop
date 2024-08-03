import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PoweredBy from "./components/PoweredBy";
import How from "./components/How";
import Bento from "./components/Bento";
import Qualtities from "./components/Qualities";
import StoriesPage from "./components/StoriesPage";
import NativeAPIPage from "./components/NativeAPIPage";
import DownloadPage from "./components/DownloadPage";
import Pricing from "./components/Pricing";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="h-screen w-full bg-background">
        <Navbar />
        <Hero />
        <PoweredBy />
        <div className="mx-8 md:mx-32">
          <How />
          <Bento />
          <Qualtities />
          <StoriesPage />
          <NativeAPIPage />
          <DownloadPage />
          <Pricing />
          <FAQs />
          <Footer />
        </div>
      </div>
    </>
  );
}
