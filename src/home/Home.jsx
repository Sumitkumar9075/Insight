import React from "react";
import Navbar from "../components/Navbar";
import FreeBook from "../components/FreeBook";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <>
        <Navbar />
        <Banner />
        <FreeBook />
        <Footer />
      </>
    </div>
  );
}

export default Home;
