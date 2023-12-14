import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <nav className="navigation nav">
                <h1 className="logo">Marchy</h1>
                <ul className="nav-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <button type='button'class="btn-nav">Contact Us</button>
            </nav>
        </header>
    )
}

export default Header