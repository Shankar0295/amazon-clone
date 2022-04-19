import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../cartContext';
import CurrencyFormat from 'react-currency-format';
import './Payment.css';
import { getCartTotal } from "../../reducer";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";


const Payment = () => {
    const [{ cart, user }, dispatch] = useCartContext();

    const removeFromBasket = (id) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = new Date().getTime().toString();
        const cartRef = doc(db, "amazon-clone", user.uid, "orders", id);
        console.log(user.uid)
        try {
            await setDoc(cartRef,
                { ...cart }, { merge: true })
            alert("Added Successfully");
        }
        catch (error) {
            console.log(error);
        }
        dispatch({
            type: 'EMPTY_CART'
        })
    }
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1 className="payment__header">
                    Checkout (<Link to="/checkout">{cart.length} items</Link>)
                </h1>
                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h2>Delivery Address</h2>
                    </div>
                    <div className='payment__address'>
                        <p>test@123</p>
                        <p>123 Amazon Clone Lane</p>
                        <p>React Js, India</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h2>Review items and delivery</h2>
                    </div>
                    <div className='payment__items'>
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
                    </div>
                </div>
                <div className='payment__section'>
                    {/* Stripe magic will go */}
                    <div className='payment__priceContainer'>
                        {cart.length !== 0 && <div className="checkout__subtotal__wrapper">
                            <div className="payment__total__block">
                                <h2>Payment Method</h2>
                                <p className="payment__total__items">Total ({cart.length} items):</p>
                            </div>
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
                        {cart.length !== 0 && <form className="payment__form" onSubmit={handleSubmit}>
                            <label htmlFor="cname">Name on Card</label>
                            <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
                            <label htmlFor="ccnum">Credit/Debit card number</label>
                            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                            <div className="payment__card__details">
                                <div className="payment__card__month">
                                    <label htmlFor="expmonth">Exp Month/Year</label>
                                    <input type="text" id="expmonth" name="expmonth" placeholder="MM/YY" />
                                </div>
                                <div className="payment__card__month">
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" placeholder="352" />
                                </div>
                            </div>
                            <button type="submit" className="payment__button">
                                <span>Make Payment</span>
                            </button>
                        </form>}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
