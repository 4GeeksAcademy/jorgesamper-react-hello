import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <nav className="navbar navbar-position navbar-expand-lg bg-white navbar-light px-4">
  <div className="container-fluid">
    <a className="navbar-brand text-dark fs-4" href="#">JorgeSamper</a>
    <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon thick-white"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active fs-5" aria-current="page" href="#">Home</a>
        <a className="nav-link fs-5" href="#">About</a>
        <a className="nav-link fs-5" href="#">Service</a>
        <a className="nav-link fs-5">Contact</a>
      </div>
    </div>
  </div>
</nav>
  );
}

export default NavBar;
