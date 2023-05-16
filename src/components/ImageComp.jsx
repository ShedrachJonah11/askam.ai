import React from "react";
import "./styles/ImageComp.css";
const ImageComp = ({ img, alt }) => {
  return (
    <div className="Imagecomponent">
      <img src={img} alt={alt} />
    </div>
  );
};

export default ImageComp;
