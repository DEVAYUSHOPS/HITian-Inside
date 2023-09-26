import React from "react";
import "./Background.css";
import Navbar from "../partials/navbar/navbar";
import hit from "../../assets/img/hit33-1.png";
import curve from "../../assets/img/homepage-curve.png";
import name from "../../assets/img/HITian Inside name.png";
import grad1 from "../../assets/img/gradient-1.png";

import collage from "../../assets/img/Image-collage.png";
import Footer from "../partials/footer/footer";


export const Background = () => {
  return (
    <>
      {/* Navbar */}

      <Navbar />
      {/* navbar-end  */}
      {/* Homepage  */}
      
      <section className="homepage">
        

        <h1>COME AND EXPLORE</h1>
        <img src={name} alt="name" className="name" />
        <img src={hit} alt="hit" className="hit" />
        <img src={curve} alt="curve" className="curve" />
      </section>

      {/* About us */}

      <section className="aboutus">
        <img src={grad1} alt="gradient" className="gradient1" />
        <h1>About us</h1>
        <div className="aboutus-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dicta
            culpa pariatur qui consectetur dolor quasi, illum vero nam
            molestiae. Molestiae exercitationem doloremque molestias ullam,
            laudantium totam excepturi velit praesentium.
          </p>
        </div>
        <div className="button">
          <button>Know More</button>
        </div>
        <div className="cards">
          <div className="card one"></div>
          <div className="card two"></div>
          <div className="card three"></div>
          <div className="card four"></div>
          <div className="card five"></div>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-contents">
          <h1>Gallery</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            exercitationem odit debitis, veritatis, quidem rem molestias
            deserunt at nam dolore ab dolor, reprehenderit iste minima ipsum ut
            amet voluptates magni?
          </p>
          <button>See More</button>
        </div>
        <img src={collage} alt="" />
      </section>
      <Footer />
    </>
  );
};

export default Background;
