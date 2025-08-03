import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <>
        <footer>
            <div className="last">
                <div id="texts">FOLLOW SURESH</div>
                <div className="icon">
                    <div id="fe"><Link to="#"><ion-icon name="logo-facebook"></ion-icon></Link></div>
                    <div id="ins"><Link to="#"><ion-icon name="logo-instagram"></ion-icon></Link></div>
                    <div id="twi"><Link to="#"><ion-icon name="logo-twitter"></ion-icon></Link></div>
                    <div id="gog"><Link to="#"><ion-icon name="logo-google"></ion-icon></Link></div>
                    <div id="sky"><Link to="#"><ion-icon name="logo-skype"></ion-icon></Link></div>
                </div>
                <div className="linkes">
                    <div className="links1">
                        <h4>About</h4>
                        <ul>
                            <li><Link to="#">one</Link></li>
                            <li><Link to="#">two</Link></li>
                            <li><Link to="#">three</Link></li>
                            <li><Link to="#">four</Link></li>
                            <li><Link to="#">five</Link></li>
                            <li><Link to="#">six</Link></li>
                            <li><Link to="#">seven</Link></li>
                            <li><Link to="#">eight</Link></li>
                            <li><Link to="#">nine</Link></li>
                            <li><Link to="#">ten</Link></li>
                        </ul>
                    </div>
                    <div className="links1">
                        <h4>About 2</h4>
                        <ul>
                            <li><Link to="#">eleven</Link></li>
                            <li><Link to="#">twelve</Link></li>
                            <li><Link to="#">thirteen</Link></li>
                            <li><Link to="#">fourteen</Link></li>
                            <li><Link to="#">fifteen</Link></li>
                            <li><Link to="#">sixteen</Link></li>
                            <li><Link to="#">seventeen</Link></li>
                            <li><Link to="#">eighteen</Link></li>
                            <li><Link to="#">nineteen</Link></li>
                            <li><Link to="#">twenty</Link></li>
                        </ul>
                    </div>
                    <div className="links1">
                        <h4>About</h4>
                        <ul>
                            <li><Link to="#">one</Link></li>
                            <li><Link to="#">two</Link></li>
                            <li><Link to="#">three</Link></li>
                            <li><Link to="#">four</Link></li>
                            <li><Link to="#">five</Link></li>
                            <li><Link to="#">six</Link></li>
                            <li><Link to="#">seven</Link></li>
                            <li><Link to="#">eight</Link></li>
                            <li><Link to="#">nine</Link></li>
                            <li><Link to="#">ten</Link></li>
                        </ul>
                    </div>
                    <div className="links1">
                        <h4>About 2</h4>
                        <ul>
                            <li><Link to="#">eleven</Link></li>
                            <li><Link to="#">twelve</Link></li>
                            <li><Link to="#">thirteen</Link></li>
                            <li><Link to="#">fourteen</Link></li>
                            <li><Link to="#">fifteen</Link></li>
                            <li><Link to="#">sixteen</Link></li>
                            <li><Link to="#">seventeen</Link></li>
                            <li><Link to="#">eighteen</Link></li>
                            <li><Link to="#">nineteen</Link></li>
                            <li><Link to="#">twenty</Link></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="but">
                    <button className="bttnt"><Link to="#">Explore</Link></button>
                </div>
                <div className="policy">
                    <h5>Terms and Condition | Privacy Policy</h5>
                </div>
            </div>
        </footer>
    </>
  );
}

export default Footer;