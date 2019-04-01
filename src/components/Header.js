import React from 'react'

function Header() {
    return (
        <header id="header" className="alt">
            <h1 id="logo"><a href="index.html">Twenty <span>by HTML5 UP</span></a></h1>
            <nav id="nav">
                <ul>
                    <li className="current"><a href="index.html">Welcome</a></li>
                    <li className="submenu">
                        <a href="#">Layouts</a>
                        <ul>
                            <li><a href="left-sidebar.html">Left Sidebar</a></li>
                            <li><a href="right-sidebar.html">Right Sidebar</a></li>
                            <li><a href="no-sidebar.html">No Sidebar</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li className="submenu">
                                <a href="#">Submenu</a>
                                <ul>
                                    <li><a href="#">Dolore Sed</a></li>
                                    <li><a href="#">Consequat</a></li>
                                    <li><a href="#">Lorem Magna</a></li>
                                    <li><a href="#">Sed Magna</a></li>
                                    <li><a href="#">Ipsum Nisl</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#" className="button primary">Sign Up</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
