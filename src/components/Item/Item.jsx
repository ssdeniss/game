import React from 'react'
import { useDispatch } from 'react-redux'
import { setItemInCart } from '../../redux/reducer'
const Item = ({ game }) => {
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.stopPropagation()
        dispatch(setItemInCart(game))
    }
    return (
        <div className='game__item'>
            <div className="game__item-top" style={{ background: `url(${game.image})`, backgroundSize: "cover" }}></div>
            <div className="game__content">
                <div className="game__top">
                    <h3 className="game__title">{game.title}</h3>
                    <div className="game__genre">{game.genres}</div>
                </div>
                <div className="game__bottom">
                    <div className="game__price">{game.price} ₽</div>
                    <div className="game__buy" onClick={handleClick}>Add to Cart</div>
                </div>
            </div>
        </div>
    )
}

export default Item