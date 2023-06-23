import React from "react";

function Hero() {
  return (
    <div className="p-4 mx-4 py-5 my-4 text-start gray-background rounded">
      <h1 className="display-5 fw-bold text-start">Welcome!</h1>
      <div className="mx-auto text-start">
        <p className="lead mb-4 text-start">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-start">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3 text-start"
          >
            Call to action!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
