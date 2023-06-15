import React from "react";
import Card from "./card.jsx";

function CardContainer() {
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is card 1 Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageSrc: "https://example.com/image1.jpg",
      button: "Button 1",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is card 2 Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageSrc: "https://example.com/image2.jpg",
      button: "Button 2",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is card 3 Some quick example text to build on the card title and make up the bulk of the card's content..",
      imageSrc: "https://example.com/image3.jpg",
      button: "Button 3",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is card 4 Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageSrc: "https://example.com/image4.jpg",
      button: "Button 4",
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc}
          button={card.button}
        />
      ))}
    </div>
  );
}

export default CardContainer;
