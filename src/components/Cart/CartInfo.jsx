import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../redux/reducer';


const CartItem = ({ title, image, price, id, genres, description }) => {
    const dispatch = useDispatch();
    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(id));
    };

    console.log(genres)
    return (
        <div className='cart__item'>
            <img className='cart__item-image' src={image} alt="" />
            <div className="cart__item-content">
                <div className="cart__item-title">{title}</div>
                <div className="cart__description">{description}</div>
                {genres?.map(genre => (
                <div className="game__genre">
                    <p>{genre?.props?.children}</p>
                </div>
                ))}
                <div className="cart__item-bottom">
                    <div className="cart__item-price">{price} ₽</div>
                    <div className="game__buy" onClick={handleDeleteClick}>Remove</div>
                </div>
            </div>
        </div>
    )
}

export default CartItem