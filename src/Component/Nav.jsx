import { Link } from "react-router-dom";
import Home from './Home';
import Blogs from "./Blogs";
import Footer from "./Footer";

const Nav = () => {
  return (
    <>
        <div className="contenat">
            <nav>
                <div className="nav">
                    <div id="logo">
                        <h2>LOg</h2>
                        <p>☠</p>
                    </div>
                    <ul id="home">
                        <li><Link to="#Home">HOME</Link></li>
                        <li><Link to="#Blogs">Blogs</Link></li>
                        <li><Link to="#Footer">FOOTER</Link></li>
                        <li><Link to="#help">HELP</Link></li>
                    </ul>
                    <div className="serch">
                        <button className="btn"><Link to="#">Login</Link></button>
                        <button className="btn"><Link to="#">Sign in</Link></button>
                    </div>
                </div>
            </nav>
        </div>
        <Home />
        <Blogs />
        <Footer />
    </>
  );
}

export default Nav;
