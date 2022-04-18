import React from 'react';
import ProductList from '../../data.json';
import './Product.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../cartContext'

const Product = () => {
    console.log(ProductList)
    const [{ cart }, dispatch] = useCartContext();

    const addToBasket = (id, title, image, rating, price) => {
        console.log(id, title, image, rating, price)
        // dispatch item to contextprovider
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
            <div className="product__wrapper">
                <div className="product__header">
                    <h2>Laptops</h2>
                    <Link to="/laptops"><h5 className="product__more">See more</h5></Link>
                </div>
                <div className="product__container">
                    {ProductList.laptops.slice(0, 3).map((item) => {
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
                                    <p className="product__price">&#8377;{item.price}</p>
                                    <p className="product__date">Get it by <b>Saturday, April 16</b></p>
                                    <p className="product__delivery">FREE Delivery by Amazon</p>
                                    <button onClick={() => addToBasket(item.id, item.title, item.image, item.rating, item.price)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="product__wrapper">
                <div className="product__header">
                    <h2>Clothes</h2>
                    <Link to="/clothes"><h5 className="product__more">See more</h5></Link>
                </div>
                <div className="product__container">
                    {ProductList.clothes.slice(0, 3).map((item) => {
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
                                    <p className="product__price">&#8377;{item.price}</p>
                                    <p className="product__date">Get it by <b>Saturday, April 16</b></p>
                                    <p className="product__delivery">FREE Delivery by Amazon</p>
                                    <button onClick={() => addToBasket(item.id, item.title, item.image, item.rating, item.price)}>Add to Cart</button>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="product__wrapper">
                <div className="product__header">
                    <h2>Gadgets</h2>
                    <Link to="/gadgets"><h5 className="product__more">See more</h5></Link>
                </div>
                <div className="product__container">
                    {ProductList.gadgets.slice(0, 3).map((item) => {
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
                                    <p className="product__price">&#8377;{item.price}</p>
                                    <p className="product__date">Get it by <b>Saturday, April 16</b></p>
                                    <p className="product__delivery">FREE Delivery by Amazon</p>
                                    <button onClick={() => addToBasket(item.id, item.title, item.image, item.rating, item.price)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="product__wrapper">
                <div className="product__header">
                    <h2>Accessories</h2>
                    <Link to="/accessories"><h5 className="product__more">See more</h5></Link>
                </div>
                <div className="product__container">
                    {ProductList.accessories.slice(0, 3).map((item) => {
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
                                    <p className="product__price">&#8377;{item.price}</p>
                                    <p className="product__date">Get it by <b>Saturday, April 16</b></p>
                                    <p className="product__delivery">FREE Delivery by Amazon</p>
                                    <button onClick={() => addToBasket(item.id, item.title, item.image, item.rating, item.price)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="product__wrapper">
                <div className="product__header">
                    <h2>Watches</h2>
                    <Link to="/watches"><h5 className="product__more">See more</h5></Link>
                </div>
                <div className="product__container">
                    {ProductList.watches.slice(0, 3).map((item) => {
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
                                    <p className="product__price">&#8377;{item.price}</p>
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

export default Product
