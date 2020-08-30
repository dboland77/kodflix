import React from "react";
import TvShow from "./TvShow";
import getGallery from "./Gallery-get";

function Gallery() {
  return (
    <div>
      <div className="container">
        {getGallery().map((gallery) => (
          <TvShow
            key={gallery.id}
            id={gallery.id}
            name={gallery.name}
            image={gallery.image}
          ></TvShow>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
