import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useCartContext } from '../../cartContext';
import { getCartTotal } from "../../reducer";
import './SubTotal.css'
import { Link } from 'react-router-dom';

const SubTotal = () => {

    const [{ cart, user }, dispatch] = useCartContext();
    return (
        <div className="subtotal">
            {cart.length !== 0 ?
                <div>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <p className="subtotal__items">
                                    Subtotal ({cart.length} items): <strong>{value}</strong>
                                </p>
                                <small className="subtotal__gift">
                                    <input type="checkbox" /> This order contains a gift
                        </small>
                            </>
                        )}
                        decimalScale={2}
                        value={getCartTotal(cart)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                        fixedDecimalScale={true}
                    />

                    <Link to={user ? "/payment" : "/login"}>
                        <button className="subtotal__btn">Proceed to Checkout</button>
                    </Link>
                </div> :
                <p className="subtotal__items">
                    Subtotal ({cart.length} items) in cart
                </p>}
        </div>
    );
}

export default SubTotal
