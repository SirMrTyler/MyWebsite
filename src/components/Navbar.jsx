import { useState } from 'react';
import '../dist/styles.css';
import {IconMenu2, IconX} from '@tabler/icons-react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const navMenu = () => {
        setNav(!nav);
    };

    const pageUp = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
      };
    
    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Resume", link: "#resume"},
        // { name: "Games", link: "#games"},
        { name: "Contact", link: "#contact" },
    ];

    return (
        <>
            <nav>
                <h3 onClick={pageUp} className='logo'>
                    SirMrTyler.Tech
                </h3>
                <ul>
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                    <li onClick={() => navMenu()}>
                        <IconMenu2 className='mobile-menu' width={30} height={30} />
                    </li>
                </ul>
            </nav>
            
            <div className={`mobile-nav ${nav ? "open-menu" : "closed-menu"}`}>
                <span onClick={() => navMenu()}>
                    <IconX width={30} height={30} />
                </span>
                <ul>
                    {navLinks.map((item) => (
                        <li key={item.name} onClick={() => navMenu()}>
                            <a href={item.link}>{item.name}</a>
                        </li>    
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
