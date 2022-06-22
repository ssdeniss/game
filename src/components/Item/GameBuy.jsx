import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from '../../redux/reducer'


export const GameBuy = ({ game }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => item.id === game.id);

    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(game.id));
        } else {
            dispatch(setItemInCart(game));
            localStorage.setItem("games", JSON.stringify(game))
            // console.log("game", JSON.stringify(game));
            // const localData = localStorage.getItem("games")
            // return localData ? JSON.parse(localData) : []
        }
    };
    useEffect(() => {

    }, [game])

    return (
        <div className="game__bottom">
            <div className="game__price">{game.price} ₽</div>
            <div className="game__buy" onClick={handleClick}>

                {isItemInCart ? "Delete from Cart" : "Add to Cart"}</div>
        </div>
    );
};
