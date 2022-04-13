import React from 'react';
import ProductList from '../../data.json';
import './Product.css';

const Product = () => {
    console.log(ProductList)
    return (
        <div className="product">
            <div className="product__container">
                {ProductList.first.map((item) => {
                    return (
                        <div className="product__list" key={item.id}>
                            <div className="product__info">
                                <p>{item.title}</p>
                                <p>&#8377;{item.price}</p>
                                <p>{item.rating}</p>
                            </div>
                            <img className="product__image" src={item.image} alt="img" />
                        </div>
                    )
                })}
            </div>
            <div className="product__container">
                {ProductList.second.map((item) => {
                    return (
                        <div className="product__list" key={item.id}>
                            <div className="product__info">
                                <p>{item.title}</p>
                                <p>&#8377;{item.price}</p>
                                <p>{item.rating}</p>
                            </div>
                            <img className="product__image" src={item.image} alt="img" />
                        </div>
                    )
                })}
            </div>
            <div className="product__container">
                {ProductList.third.map((item) => {
                    return (
                        <div className="product__list" key={item.id}>
                            <div className="product__info">
                                <p>{item.title}</p>
                                <p>&#8377;{item.price}</p>
                                <p>{item.rating}</p>
                            </div>
                            <img className="product__image" src={item.image} alt="img" />
                        </div>
                    )
                })}
            </div>
            <div className="product__container">
                {ProductList.four.map((item) => {
                    return (
                        <div className="product__list" key={item.id}>
                            <div className="product__info">
                                <p>{item.title}</p>
                                <p>&#8377;{item.price}</p>
                                <p>{item.rating}</p>
                            </div>
                            <img className="product__image" src={item.image} alt="img" />
                        </div>
                    )
                })}
            </div>
            <div className="product__container">
                {ProductList.five.map((item) => {
                    return (
                        <div className="product__list" key={item.id}>
                            <div className="product__info">
                                <p>{item.title}</p>
                                <p>&#8377;{item.price}</p>
                                <p>{item.rating}</p>
                            </div>
                            <img className="product__image" src={item.image} alt="img" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Product
