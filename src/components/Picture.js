import React from "react";

function Picture({ data }) {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        Download:
        <a target="_blank" href={data.src.large}>
          Click here
        </a>
      </p>
    </div>
  );
}

export default Picture;
