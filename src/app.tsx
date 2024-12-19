import { HashRouter, Routes, Route } from "react-router-dom";
import './css/globals.css'
import './app.css'
import Home from "./pages/home/home"
import PageHeader from './components/page-header/page-header';
import PageFooter from './components/page-footer/page-footer';
import Prototypes from "./pages/prototypes/prototypes";
import Analysis from "./pages/analysis/analysis";
import Papers from "./pages/papers/papers";
import Artwork from "./pages/artwork/artwork";
// import Layout from "./pages/Layout";


function App() {
  return (
    <HashRouter>
      <div className='flex col page-container'>
        {PageHeader()}
        <div className='page-margins grid-paper flex page-justify'>
            <Routes>
              <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="/prototypes" element={<Prototypes/>}/>
                <Route path="/analysis" element={<Analysis/>}/>
                <Route path="/papers" element={<Papers/>}/>
                <Route path="/artwork" element={<Artwork/>}/>
              </Route>
            </Routes>
        </div>
        {PageFooter()}  
      </div>
    </HashRouter>
  )
}

export default App
