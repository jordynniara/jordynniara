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
          Contacts
        </Link>
      </div>
      <div className="img-container">
        <img src={mascotOrigImg} alt="cartoon mascot image" />
      </div>
      <div id="right-menu" className="menu">
        <Link to="/analysis" className="sky button-dark inverted drop-shadow">
          About
        </Link>
        <Link to="/artwork" className="strawberry button-dark inverted drop-shadow">
          Resume
        </Link>
      </div>
      <div id="bottom-menu" className="menu-horiz">
        {/*TODO: add quick by-line */}
      </div>
    </div>
  )
}

export default Home
