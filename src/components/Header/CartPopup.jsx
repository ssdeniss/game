import React from 'react'
import { calcTotalPrice } from '../Utils/Utils'
import CartItem from './CartItem'

const CartPopup = ({ items, onMouseEnter, onMouseLeave }) => {
    return (
        <div className='cart__menu-popup' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="cart__menu-list">
                {items.length > 0 ? items?.map((game) =>
                    <CartItem
                        key={game.title}
                        image={game.image}
                        price={game.price}
                        title={game.title}
                        id={game.id}
                    />) : "Cart is Empty"}
            </div>
            {items?.length > 0 ? (
                <div className='cart__menu-total'>
                    <div className="cart__menu-price">total: {calcTotalPrice(items)} ₽</div>
                </div>
            ) : null}
        </div>
    )
}

export default CartPopup