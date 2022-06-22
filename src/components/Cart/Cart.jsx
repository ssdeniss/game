import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartInfo from './CartInfo'
import { calcTotalPrice } from '../Utils/Utils'
import { setItemInCart } from '../../redux/reducer'

const Cart = () => {
    const items = useSelector(state => state.cart.itemsInCart)



    return (
        <div className='cart__list'>
        <div className='container'>
            <div className="cart__menu-list">
                {items.length > 0 ? items?.map((game) =>
                    <CartInfo
                        key={game.title}
                        image={game.image}
                        price={game.price}
                        title={game.title}
                        id={game.id}
                        genres={game.genres}
                        description={game.description}

                    />) : "Cart is Empty"}
            </div>
            {items?.length > 0 ? (
                <div className='cart__menu-total'>
                    <div className="cart__menu-price">total: {calcTotalPrice(items)} ₽</div>
                </div>
            ) : null}
        </div>
        </div>
    )
}

export default Cart