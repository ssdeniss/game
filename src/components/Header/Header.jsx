import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import basket from "../../assets/basket.svg"
import { setItemInCart } from '../../redux/reducer'
import { calcTotalPrice } from '../Utils/Utils'
import CartPopup from './CartPopup'

const Header = () => {
    
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)

    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem('games')){
            const retrievedObject = localStorage.getItem('games');
            dispatch(setItemInCart(JSON.parse(retrievedObject)));
        }
    }, [])

    return (
        <header className='header'>
            <div className="container">
                <div className="header__content">
                    <Link to="/" className="logo">HOME</Link>
                    <div className='cart'>
                        <Link to="/cart" className="cart__cantity" >
                            <img className='basket' src={basket} alt="" onMouseEnter={() => setIsCartMenuVisible(!isCartMenuVisible)} onMouseLeave={() => setIsCartMenuVisible(!isCartMenuVisible)} />
                            {items.length > 0 ? <div className="cart__number">{items.length}</div> : null}
                        </Link>
                        <div className="cart__price">{totalPrice} ₽</div>
                    </div>
                    {isCartMenuVisible && <CartPopup items={items} onMouseEnter={() => null} />}
                </div>
            </div>
        </header>
    )
}

export default Header