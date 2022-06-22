import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { setCurrentGame } from '../../redux/gameReducer';

import { GameBuy } from './GameBuy';
const Item = ({ game }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === game.id)
    const aboutClick = () => {
        dispatch(setCurrentGame(game));
        navigate(`/app/${game.title}`)
    }
    return (
        <div className='game__item' >
            <div className="game__item-top" onClick={aboutClick} style={{ background: `url(${game.image})`, backgroundSize: "cover" }}></div>
            <div className="game__content">
                <div className="game__top">
                    <h3 className="game__title">{game.title}</h3>
                    <div className="game__genre">{game.genres}</div>
                </div>
                <GameBuy game={game} />
            </div>
        </div>
    )
}

export default Item