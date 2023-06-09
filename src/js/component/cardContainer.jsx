import React from "react";
import Card from "./card.jsx";

function CardContainer() {
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is card 1 description.",
      imageSrc: "https://example.com/image1.jpg",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is card 2 description.",
      imageSrc: "https://example.com/image2.jpg",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is card 3 description.",
      imageSrc: "https://example.com/image3.jpg",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is card 4 description.",
      imageSrc: "https://example.com/image4.jpg",
    },
  ];

  return (
    <div>
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  );
}

export default CardContainer;
