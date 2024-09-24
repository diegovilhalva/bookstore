import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
import Logo from "../../assets/logo.png"
import { navLinks, navRight } from "../../data/data"
import { VscMenu } from "react-icons/vsc"
import { GrClose } from "react-icons/gr"
import { useState } from "react"
const Navbar = () => {
    const [isNavlinksShowing,setIsNavlinksShowing] = useState(false)

    if (innerWidth < 1024) {
        window.addEventListener("scroll",() => {
            document.querySelector(".nav-links").classList.add("navLinksHide")
            setIsNavlinksShowing(false)
        })
    }

    window.addEventListener("scroll",() => {
        document.querySelector("nav").classList.toggle("navShadow",window.scrollY > 0)
    })
    return (
        <nav>
            <div className="container nav-container">
                <Link to={'/'} className="logo">
                    <img src={Logo} alt="Logo" />
                </Link>

                <ul className={`nav-links ${isNavlinksShowing ? 'navLinksShow' : 'navLinksHide'}`} >
                    {navLinks.map(({ name, path }) => (
                        <li key={name}>
                            <NavLink to={path} className={({isActive}) => 
                                isActive ? 'active' : ''
                            }>{name}</NavLink>
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

                    <button className="menu-button" onClick={() => setIsNavlinksShowing(prev => !prev)}>
                        {isNavlinksShowing ?  <GrClose /> : <VscMenu />}
                    </button>

                </div>
            </div>            
        </nav>
    )
}

export default Navbar 