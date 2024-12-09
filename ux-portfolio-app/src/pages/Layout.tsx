import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/analysis">Analysis</Link>
          </li>
          <li>
            <Link to="/artwork">Artwork</Link>
          </li>
          <li>
            <Link to="/Papers">Papers</Link>
          </li>
          <li>
            <Link to="/Prototypes">Prototypes</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;