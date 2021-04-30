import '../App.css';
import logo from "../assets/images/logo.png"

function Header() {
  return (
    <div className="header_wrapper">
        <div className="logo">
            <img src={logo} alt="logo"/>
            <h1>Ozen</h1>
        </div>
        <div className="menus">
            <ul>
                <li>Programs</li>
                <li>Careers</li>
                <li>Pages</li>
                <li>Contact US</li>
            </ul>
            <div className="get_started">
              <p>Sign In</p>
               <button className="strt_btn">Get Started</button>
            </div>
          
        </div>
    </div>
  );
}

export default Header;
