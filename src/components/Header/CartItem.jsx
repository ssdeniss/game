import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../redux/reducer';


const CartItem = ({ title, image, price, id }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(id));
    };
    return (
        <div className='cart__item'>
            <img className='cart__item-image' src={image} alt="" />
            <div className="cart__item-content">
                <div className="cart__item-title">{title}</div>
                <div className="cart__item-bottom">
                    <div className="cart__item-price">{price} ₽</div>
                    <div className="game__buy" onClick={handleDeleteClick}>Remove</div>
                </div>
            </div>
        </div>
    )
}

export default CartItem