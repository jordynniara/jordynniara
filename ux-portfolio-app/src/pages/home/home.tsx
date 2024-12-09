import * as React from "react";
import '../../css/globals.css'
import './home.css'
import {
  Button
} from "@fluentui/react-components";

function Home() {
  const mascotOrigImg:string = "/assets/logos/mascot-orig.png";
  const jordynTheDevImg:string ="/assets/photos/jordyn_the_dev.JPG";
  const [imgHover, setImgHover] = React.useState(mascotOrigImg);

  return(
    //TODO: this should reorient vertically on mobile
    <div className="container">
      <div className="left-menu">
        <Button size="large" className="strawberry-hover button  drop-shadow">
          <h3>Prototypes</h3>
        </Button>
        <Button size="large" className="inchworm-hover button  drop-shadow">
          <h3>Papers</h3>
        </Button>
      </div>
      <div className="img-container"
        onMouseOver={() => setImgHover(mascotOrigImg)}
        onMouseOut={() => setImgHover(mascotOrigImg)}
        style={{backgroundImage:`url(${imgHover})`, transition:'background-image 0.5s ease-in-out', 
          backgroundSize: imgHover==jordynTheDevImg ? "contain" : "auto"}}
      >
      </div>
      <div className="right-menu">
        <Button size="large" className="sky-hover button  drop-shadow">
          <h3>Analysis</h3>
        </Button>
        <Button size="large" className="strawberry-hover button  drop-shadow">
          <h3>Artwork</h3>
        </Button>
      </div>
    </div>
  )
}

export default Home
