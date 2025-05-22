import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import Content from "../components/Content";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";

function PublicHome() {
  return (
    <>
      <Header />
      <Navbar />
      <div id="wrapper">
        <Aside />
        <Content />
      </div>
      <FooterTop />
      <Footer />
    </>
  );
}

export default PublicHome;
