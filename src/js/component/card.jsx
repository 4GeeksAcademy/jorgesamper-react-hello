import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function card() {
  return (
    <Card className="mx-4" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/1366_2000.webp"
      />
      <Card.Body className="px-4 py-4 text-center">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Find Out More!</Button>
      </Card.Body>
    </Card>
  );
}



export default card;



// esto seria la solcuión (con error)
// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// function CardComponent(props) {
//   const { title, description, imageSrc } = props;

//   return (
//     <Card className="mx-4" style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={imageSrc} />
//       <Card.Body className="px-4 py-4 text-center">
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{description}</Card.Text>
//         <Button variant="primary">Find Out More!</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardComponent; 