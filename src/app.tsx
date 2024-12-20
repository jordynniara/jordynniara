import { HashRouter, Routes, Route} from "react-router-dom";
import './css/globals.css'
import './app.css'
import Home from "./pages/home/home"
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Prototypes from "./pages/prototypes/prototypes";
import Analysis from "./pages/analysis/analysis";
import Papers from "./pages/papers/papers";
import Artwork from "./pages/artwork/artwork";
// import Layout from "./pages/Layout";


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
                <Route path="/Prototypes" element={<Prototypes/>}/>
                <Route path="/Analysis" element={<Analysis/>}/>
                <Route path="/Papers" element={<Papers/>}/>
                <Route path="/Artwork" element={<Artwork/>}/>
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
