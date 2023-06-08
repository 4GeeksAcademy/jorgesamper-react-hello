import React from "react";
import NavBar from "./navbar.jsx";
import Hero from "./hero.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Card />
      <Footer/>
    </>
  );
};

export default Home;
