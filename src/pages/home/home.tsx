// import * as React from "react";
import { Link } from "react-router-dom";
import '../../css/globals.css'
import './home.css'
import mascotOrigImg from "/assets/logos/mascot-orig.png"

const Home = () => {
  return(
    //TODO: this should reorient vertically on mobile
    <div className="home-container">
      <div id="left-menu" className="menu">
        <Link to="/projects" className="strawberry button-dark inverted drop-shadow">
          Projects
        </Link>
        <Link to="/papers" className="inchworm button-dark inverted drop-shadow">
          Papers
        </Link>
      </div>
      <div className="img-container">
        <img src={mascotOrigImg} alt="cartoon mascot image" />
      </div>
      <div id="right-menu" className="menu">
        <Link to="/analysis" className="sky button-dark inverted drop-shadow">
          Analysis
        </Link>
        <Link to="/artwork" className="strawberry button-dark inverted drop-shadow">
          Artwork
        </Link>
      </div>
    </div>
  )
}

export default Home
