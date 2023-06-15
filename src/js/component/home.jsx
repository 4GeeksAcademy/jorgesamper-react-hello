import React from "react";
import NavBar from "./navbar.jsx";
import Hero from "./hero.jsx";
import Footer from "./footer.jsx";
import CardContainer from "./cardContainer.jsx";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <CardContainer/>
      <Footer/>
    </>
  );
};

export default Home;
