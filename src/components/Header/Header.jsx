import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import basket from "../../assets/basket.svg"
import { calcTotalPrice } from '../Utils/Utils'

const Header = () => {
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)
    return (
        <header className='header'>
            <div className="container">
                <div className="header__content">
                    <Link to="/" className="logo">HOME</Link>
                    <div className='cart'>
                        <Link to="/cart" className="cart__cantity" >
                            <img className='basket' src={basket}  alt="" />
                            <div className="cart__number">0</div>
                        </Link>
                        <div className="cart__price">{totalPrice} ₽</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header