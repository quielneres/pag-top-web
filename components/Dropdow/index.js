import { MenuItems } from '../MenuItems';
import styles from './dropdown.module.css';
import Link from 'next/link'
import React, {useState} from 'react'

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <style jsx>{`
                   .dropdown-menu {
                      background: red;
                      width: 200px;
                      position: absolute;
                      top: 80px;
                      list-style: none;
                      text-align: start;
                    }
                    
                    .dropdown-menu li {
                      background: #5cabff;
                      cursor: pointer;
                    }
                    
                    .dropdown-menu li:hover {
                      background: #1888ff;
                    }
                    
                    .dropdown-menu.clicked {
                      display: none;
                    }
                    
                    .dropdown-link {
                      display: block;
                      height: 100%;
                      width: 100%;
                      text-decoration: none;
                      color: #fff;
                      padding: 16px;
                    }
                    
                    @media screen and (max-width: 960px) {
                      .fa-caret-down {
                        display: none;
                      }
                    }
            `}</style>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a
                                className={item.cName}
                                to={item.path}
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Dropdown;