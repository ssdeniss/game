import React from 'react'
import { calcTotalPrice } from '../Utils/Utils'

const Cart = (items) => {
    return (
        <div className='cart__menu'>
            <div className="container">
                <div className="cart__menu-list">
                    {items.length > 0 ? items.map(game => game.title) : "Cart is Empty"}
                </div>
                {items.length > 0 ?

                    <div className='cart__menu-arrange'>
                        <div className="cart__menu-total--price">
                            {calcTotalPrice(items)} ₽
                        </div>
                    </div>
                    :
                    "Cart is Empty"}
                <div className="cart__buy">Buy Product</div>
            </div>
        </div>
    )
}

export default Cart