import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard({ title, description, imageSrc, button }) {
  return (
    <Card className="mx-5" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageSrc}/>
      <Card.Body className="px-4 py-4 text-center">
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">{button}</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
