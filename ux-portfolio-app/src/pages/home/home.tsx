import * as React from "react";
import '../../css/globals.css'
import './home.css'
// import {
//   // Accordion,
//   // AccordionHeader,
//   // AccordionItem,
//   // AccordionPanel,
//   Image
// } from "@fluentui/react-components";

function Home() {
  const mascotOrigImg:string = "/assets/logos/mascot-orig.png";
  const jordynTheDevImg:string ="/assets/photos/jordyn_the_dev.JPG";
  const [imgHover, setImgHover] = React.useState(mascotOrigImg);

  return(
    //TODO: this should reorient vertically on mobile
    <div className="container">
      {/* <div></div>
      <div className="page-title"><h1>Hi, I'm Jordyn :&#41;</h1></div>
      <div></div> */}
      <div className="left-menu">
        <div><h3><a className="strawberry-hover" href="/">Prototypes</a></h3></div>
        <div><h3><a className="inchworm-hover" href="/">Papers</a></h3></div>
      </div>
      <div className="img-container"
        onMouseOver={() => setImgHover(jordynTheDevImg)}
        onMouseOut={() => setImgHover(mascotOrigImg)}
        style={{backgroundImage:`url(${imgHover})`, transition:'background-image 0.5s ease-in-out', 
          backgroundSize: imgHover==jordynTheDevImg ? "contain" : "auto"}}
      >
      </div>
      <div className="right-menu">
      <div><h3><a className="sky-hover" style={{display:"inline-block"}} href="/">Evaluations & Analysis</a></h3></div>
        <div><h3><a className="strawberry-hover" href="/">Artwork</a></h3></div>
      </div>
    </div>
  )
}

export default Home
