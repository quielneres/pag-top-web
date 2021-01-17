import React, {useState} from 'react'
import ButtonComponent from '../ButtonComponent'
import Dropdown from '../Dropdow'
import styles from './navbar.module.css'
import Link from 'next/link'

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <style jsx>{`
                .navbar {
                  /**background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);*/ 
                  background: #5cabff;
                  height: 80px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 1.2rem;
               
                }
                
                .navbar-logo {
                  color: #fff;
                  justify-self: start;
                  margin-left: 20px;
                  cursor: pointer;
                  text-decoration: none;
                  font-size: 2rem;
                }
                
                .fa-firstdraft {
                  margin-left: 0.5rem;
                  font-size: 1.6rem;
                }
                
                .nav-menu {
                  display: grid;
                  grid-template-columns: repeat(5, auto);
                  grid-gap: 10px;
                  list-style: none;
                  text-align: center;
                  width: 70vw;
                  justify-content: end;
                  margin-right: 2rem;
                }
                
                .nav-item {
                  display: flex;
                  align-items: center;
                  height: 80px;
                }
                
                .nav-links {
                  color: white;
                  text-decoration: none;
                  padding: 0.5rem 1rem;
                }
                
                .nav-links:hover {
                  background-color: #1888ff;
                  border-radius: 4px;
                  transition: all 0.2s ease-out;
                }
                
                .fa-bars {
                  color: #fff;
                }
                
                .nav-links-mobile {
                  display: none;
                }
                
                .menu-icon {
                  display: none;
                }
                
                @media screen and (max-width: 960px) {
                  .NavbarItems {
                    position: relative;
                  }
                
                  .nav-menu {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    height: 90vh;
                    position: absolute;
                    top: 80px;
                    left: -100%;
                    opacity: 1;
                    transition: all 0.5s ease;
                  }
                
                  .nav-menu.active {
                    background: #242222;
                    left: 0;
                    opacity: 1;
                    transition: all 0.5s ease;
                    z-index: 1;
                  }
                
                  .nav-links {
                    text-align: center;
                    padding: 2rem;
                    width: 100%;
                    display: table;
                  }
                
                  .nav-links:hover {
                    background-color: #1888ff;
                    border-radius: 0;
                  }
                
                  .navbar-logo {
                    position: absolute;
                    top: 0;
                    left: 0;
                    transform: translate(25%, 50%);
                  }
                
                  .menu-icon {
                    display: block;
                    position: absolute;
                    top: 0;
                    right: 0;
                    transform: translate(-100%, 60%);
                    font-size: 1.8rem;
                    cursor: pointer;
                  }
                
                  .fa-times {
                    color: #fff;
                    font-size: 2rem;
                  }
                
                  .nav-links-mobile {
                    display: block;
                    text-align: center;
                    padding: 1.5rem;
                    margin: 2rem auto;
                    border-radius: 4px;
                    width: 80%;
                    background: #1888ff;
                    text-decoration: none;
                    color: #fff;
                    font-size: 1.5rem;
                  }
                
                  .nav-links-mobile:hover {
                    background: #fff;
                    color: #1888ff;
                    transition: 250ms;
                  }
                
                }
            `}</style>
            <nav className='navbar'>
                <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
                    {/*EPIC*/}
                    {/*<i className='fab fa-firstdraft'/>*/}

                    <img
                        src="/images/logo.png"
                        width={130}
                    />
                </a>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </a>
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <a
                            href='/pagamentos'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Pagamentos <i className='fas fa-caret-down'/>
                        </a>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className='nav-item'>
                        <a
                            href='/vantagens'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Vantagens
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a
                            href='/limpa-nome'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            Limpa Nome
                        </a>
                    </li>
                    <li>
                        <a
                            href='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </a>
                    </li>
                </ul>
                <ButtonComponent/>
            </nav>
        </>
    )
}

export default Navbar;

