import { HashRouter, Routes, Route} from "react-router-dom";
import './css/globals.css'
import './app.css'
import Home from "./pages/home/home"
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import Papers from "./pages/contacts/contacts";
import Artwork from "./pages/resume/resume";


function App() {
  return (
    <HashRouter>
      <div className='flex col page-container'>
        <Header/>
        <div className='page-margins flex'>
          <div className='grid-paper flex page-justify drop-shadow'>
            <Routes>
              <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contacts" element={<Papers/>}/>
                <Route path="/Resume" element={<Artwork/>}/>
                {/*Need 404 page*/}
              </Route>
            </Routes>
          </div>
        </div>
        <Footer/>  
      </div>
    </HashRouter>
  )
}

export default App
