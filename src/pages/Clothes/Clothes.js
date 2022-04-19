import React from 'react'
import ProductList from '../../data.json';
import { useCartContext } from '../../cartContext';
import CurrencyFormat from 'react-currency-format';

const Clothes = () => {

    const [{ cart }, dispatch] = useCartContext();

    const addToBasket = (id, title, image, rating, price) => {
        console.log(id, title, image, rating, price)
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__wrapper" style={{ marginTop: 40 }}>
                <div className="product__header">
                    <h2>Clothes</h2>
                </div>
                <div className="product__container">
                    {ProductList.clothes.map((item) => {
                        return (
                            <div className="product__list" key={item.id}>
                                <img className="product__image" src={item.image} alt="img" />
                                <div className="product__info">
                                    <p>{item.title}</p>
                                    <div className="product__rating">
                                        {Array(item.rating).fill().map((_, i) => (
                                            <p key={i}>⭐</p>
                                        ))}
                                    </div>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <>
                                                <h2 className="product__price">{value}</h2>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value={item.price}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                        fixedDecimalScale={true}
                                    />
                                    <p className="product__date">Get it by <b>Saturday, April 16</b></p>
                                    <p className="product__delivery">FREE Delivery by Amazon</p>
                                    <button onClick={() => addToBasket(item.id, item.title, item.image, item.rating, item.price)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Clothes
