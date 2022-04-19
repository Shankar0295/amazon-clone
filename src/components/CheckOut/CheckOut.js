import React from 'react';
import './CheckOut.css';
import { useCartContext } from '../../cartContext';
import Subtotal from '../SubTotal/SubTotal';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from "../../reducer";

const CheckOut = () => {
    const [{ cart }, dispatch] = useCartContext();

    const removeFromBasket = (id) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__title">
                    <h2>Shopping Cart</h2>
                    <h5>Price</h5>
                </div>
                <div className="checkout__list">
                    {cart.length === 0
                        ? <h2>Your cart is empty</h2>
                        : cart.map((item, index) => {
                            return (
                                <div className="checkout__items" key={index}>
                                    <img src={item.image} alt={item.id} />
                                    <div className="checkout__des">
                                        <div className="checkout__des__wrapper">
                                            <h2 className="checkout__des__title">{item.title}</h2>
                                            <CurrencyFormat
                                                renderText={(value) => (
                                                    <>
                                                        <h2 className="checkout__des__price">{value}</h2>
                                                    </>
                                                )}
                                                decimalScale={2}
                                                value={item.price}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"₹"}
                                                fixedDecimalScale={true}
                                            />
                                        </div>
                                        <h2>Quantity</h2>
                                        <button onClick={() => removeFromBasket(item.id)}>Remove from Cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {cart.length !== 0 && <div className="checkout__subtotal__wrapper">
                    <p className="checkout__subtotal__items">
                        Subtotal ({cart.length} items):
                        </p>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <h2 className="checkout__des__price">{value}</h2>
                            </>
                        )}
                        decimalScale={2}
                        value={getCartTotal(cart)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                        fixedDecimalScale={true}
                    />
                </div>}
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default CheckOut
