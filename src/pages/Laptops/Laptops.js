import React from 'react'
import ProductList from '../../data.json';

const Laptops = () => {
    return (
        <div className="product">
            <div className="product__wrapper" style={{ marginTop: 40 }}>
                <div className="product__header">
                    <h2>Laptops</h2>
                </div>
                <div className="product__container">
                    {ProductList.laptops.map((item) => {
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
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Laptops

