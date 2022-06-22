import React from 'react'
import { useSelector } from 'react-redux'
import { GameBuy } from '../Item/GameBuy'

const GamePage = () => {
    const game = useSelector(state => state.game.currentGame)
    if (!game) return null
    return (
        <div className='game__page'>
            <div className="container">
                <div className="game__page-title">{game.title}</div>
                <div className="game__page-content">
                    <iframe
                        width="90%"
                        height="400px"
                        src={game.video}></iframe>
                    <div className="game__page-info">
                        <img src={game.image} alt="" />
                        <p className='game__page-desc'>{game.description}</p>
                        <div className="game__genre">{game.genres}</div>
                        <GameBuy game={game} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage