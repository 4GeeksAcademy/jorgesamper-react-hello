import React from "react";
import NavBar from "./navbar.jsx";
import Hero from "./hero.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import CardContainer from "./cardContainer.jsx";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Card title={"soy un titulo"} description={"Some quick example text to build on the card title and make up the bulk of the card's content."}/>
      <CardContainer/>
      <Footer/>
    </>
  );
};

export default Home;
