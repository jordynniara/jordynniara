import * as React from "react";
import { Link } from "react-router-dom";
import '../../css/globals.css'
import './home.css'
import mascotOrigImg from "/assets/logos/mascot-orig.png"

// import {
//   Button
// } from "@fluentui/react-components";

const Home = () => {
  // const mascotOrigImg:string = "jordynniara/assets/logos/mascot-orig.png";
  const jordynTheDevImg:string ="jordynniara/assets/photos/jordyn_the_dev.JPG";
  const [imgHover, setImgHover] = React.useState(mascotOrigImg);

  return(
    //TODO: this should reorient vertically on mobile
    <div className="home-container">
      <div className="left-menu">
        <Link to="/projects" className="strawberry-hover button drop-shadow">
          <h3>Projects</h3>
        </Link>
        <Link to="/papers" className="inchworm-hover button drop-shadow">
          <h3>Papers</h3>
        </Link>
      </div>
      <div className="img-container"
        onMouseOver={() => setImgHover(mascotOrigImg)}
        onMouseOut={() => setImgHover(mascotOrigImg)}
        style={{backgroundImage:`url(${imgHover})`, transition:'background-image 0.5s ease-in-out', 
          backgroundSize: imgHover==jordynTheDevImg ? "contain" : "auto"}}
      >
      </div>
      <div className="right-menu">
        <Link to="/analysis" className="sky-hover button drop-shadow">
          <h3>Analysis</h3>
        </Link>
        <Link to="/artwork" className="strawberry-hover button drop-shadow">
            <h3>Artwork</h3>
        </Link>
      </div>
    </div>
  )
}

export default Home
