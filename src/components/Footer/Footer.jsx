import { Link } from "react-router-dom"
import { FootersLinksData } from "../../data/data"
import "./Footer.css"
import CopyRight from "../CopyRight/CopyRight"


const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div>
          <h4>About Us</h4>
          <ul className="about-params param-links">
            {
              FootersLinksData.Aboutus.map(({link,linkname},index) => (
                  <li key={index}>
                    <Link to={link}>{linkname}</Link>
                  </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h4>Discover</h4>
          <ul className="discoverParams param-links">
            {
              FootersLinksData.Discover.map(({link,linkname},index) => (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div>
          <h4>My Account</h4>
          <ul className="myAccount-params param-links">
            {
              FootersLinksData.Myaccount.map(({link, linkname}, index) => (
                
                    <li key={index}><Link to={link}>{linkname}</Link></li>
                
              ))
            }
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul className="Help-params param-links">
            {
              FootersLinksData.Help.map(({link, linkname}, index) => (
                
                    <li key={index}><Link to={link}>{linkname}</Link></li>
                
              ))
            }
          </ul>
        </div>
      </div>
      <CopyRight />
    </footer>    
  )
}

export default Footer