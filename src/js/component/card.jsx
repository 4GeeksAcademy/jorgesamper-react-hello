import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CustomCard({ title, description, imageSrc, button }) {
  return (
    <Card className="mx-4" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/1366_2000.webp"
      />
      <Card.Body className="px-4 py-4 text-center">
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">{button}</Button>
      </Card.Body>
    </Card>
  );
}



export default CustomCard;



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
