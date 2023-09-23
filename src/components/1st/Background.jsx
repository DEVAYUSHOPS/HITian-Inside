import React from "react";
import "./Background.css";
import home from "../../assets/img/Home.png";
import Logo from "../../assets/img/logo.png";
import hit from "../../assets/img/hit33-1.png";
import curve from "../../assets/img/homepage-curve.png";
import name from "../../assets/img/HITian Inside name.png";
import grad1 from "../../assets/img/gradient-1.png";
import newLogo from "../../assets/img/inside-logo-new-1.png";
import collage from "../../assets/img/Image-collage.png";

export const Background = () => {
  return (
    <>

      {/* Homepage  */}
      <section className="homepage">

        {/* Navbar */}

        <nav className="navbar">
          <div className="logo-container">
            <img src={Logo} alt="logo" />
            <h5>HITian Inside</h5>
          </div>

          <div className="nav-items">
            <span className="nav-item">
              <a href="#">Home</a>
            </span>
            <span className="nav-item">
              <a href="#">Events</a>
            </span>
            <span className="nav-item">
              <a href="#">Almanac</a>
            </span>
            <span className="nav-item">
              <a href="#">Merchandise</a>
            </span>
            <span className="nav-item">
              <a href="#">Members</a>
            </span>
          </div>
        </nav>

        {/* navbar-end  */}

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
        <div className="gallery">
          
        </div>
        <img src={collage} alt="" />
      </section>



    </>
  );
};

export default Background;
