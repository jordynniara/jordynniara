import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import { Header } from './layout/header';
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Resume } from './pages/Resume'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Projects } from './pages/projects';
import { CreativityProject } from './pages/CreativityProject'
import { Footer } from './layout/footer';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const pageName = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/about":
        return "About";
      case "/projects":
        return "Projects";
      case "/contact":
        return "Contact";
      case "/resume":
        return "Resume";
      case "/creativity-project":
        return "Creativity Project";
      default:
        return "";
    }
  };
  return (
    <>
      {!isHomePage && <Header pageName={pageName()} />}  {/* Navbar only on non-home pages */}
      <div className="body">
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/resume" element={<Resume/>} />
          <Route path="/creativity-project" element={<CreativityProject />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer pageName={pageName()} />
      </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <AppContent />
    </BrowserRouter>
  );
}

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Remove hash
      const id = location.hash.substring(1);
      
      // Wait for page to render
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // if no hash scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

export default App
