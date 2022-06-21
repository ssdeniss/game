import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <Link to="/" className="logo">HOME</Link>
            <div className='cart'>
                <div className="cart__cantity">CART (0)</div>
                <div className="cart__price">25000 rub</div>
            </div>
        </header>
    )
}

export default Header