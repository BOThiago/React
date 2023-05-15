import { useState } from "react";
import logo from '../../assets/react.svg';
import "./NavBar.css"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    function toggleMenu(){
        setIsOpen(!isOpen);
    }

    return(
        <>
            <nav>
                <div>
                    <img id="logo" src={logo} alt="Logo"/>
                </div>
                <div>
                    <ul className={isOpen ? "menuOpen" : "menu"}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/titulo">Titulo</a></li>
                        <li><a href="/about">Sobre Mim</a></li>
                        <li><a href="/input">State</a></li>
                    </ul>
                </div>
                <div id="mobile" onClick={toggleMenu}>
                    <i
                        className={isOpen ? "fas fa-bars" :  "fas fa-times"}
                    ></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
