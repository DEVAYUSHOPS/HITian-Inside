import React from "react";
import Navbar from "../partials/navbar/navbar";
import "./Almanac.css";
import almanac_img from "../../assets/img/almanac-vector.png";

export const Almanac = () => {
  return (
    <>
      <Navbar />

      <div className="Almanac-home">
        <div className="home-contents">
          <h1>Almanac</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            nesciunt recusandae mollitia sed ex repellendus aliquam! Iusto
            voluptatibus ad alias hic eveniet, laborum voluptates explicabo quae
            odio. Possimus, libero dolore.
          </p>
          <button type="submit">Submit Here</button>
        </div>
        <img src={almanac_img} alt="IMAGE" />
      </div>
    </>
  );
};

export default Almanac;
