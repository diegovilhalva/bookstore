import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
import Logo from "../../assets/logo.png"
import { navLinks, navRight } from "../../data/data"
import { VscMenu } from "react-icons/vsc"
import { GrClose } from "react-icons/gr"
const Navbar = () => {
    return (
        <nav>
            <div className="container nav-container">
                <Link to={'/'}>
                    <img src={Logo} alt="Logo" />
                </Link>

                <ul className="nav-links">
                    {navLinks.map(({ name, path }) => (
                        <li key={name}>
                            <NavLink to={path}>{name}</NavLink>
                        </li>
                    ))}
                </ul>
                <div className="nav-right">
                    {
                        navRight.managements.map((item, index) => (
                            <Link key={index} className="management-icons" to={item.link} >
                                <item.icon />
                            </Link>
                        ))
                    }

                    <button className="menu-button btn">
                        <VscMenu />
                        <GrClose />
                    </button>

                </div>
            </div>
        </nav>
    )
}

export default Navbar 