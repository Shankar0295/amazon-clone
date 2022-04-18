import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__bottom">
                <p className="footer__top">Back to top</p>
            </div>
            <div className="footer__details">
                <div className="footer__col">
                    <div>
                        <p className="footer__heading">Get to Know Us</p>
                    </div>
                    <div>
                        <ul>
                            <li className="footer__items">About Us</li>
                            <li className="footer__items">Careers</li>
                            <li className="footer__items">liress Releases</li>
                            <li className="footer__items">Amazon Cares</li>
                            <li className="footer__items">Gift a Smile</li>
                            <li className="footer__items">Amazon Science</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__col">
                    <div>
                        <p className="footer__heading">Connect with Us</p>
                    </div>
                    <div>
                        <ul>
                            <li className="footer__items">Facebook</li>
                            <li className="footer__items">Twitter</li>
                            <li className="footer__items">Instagram</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__col">
                    <div>
                        <p className="footer__heading">Make Money with Us</p>
                    </div>
                    <div>
                        <ul>
                            <li className="footer__items">Sell on Amazon</li>
                            <li className="footer__items">Sell under Amazon Accelerator</li>
                            <li className="footer__items">Amazon Global Selling</li>
                            <li className="footer__items">Become an Affiliate</li>
                            <li className="footer__items">Fulfilment by Amazon</li>
                            <li className="footer__items">Advertise Your Products</li>
                            <li className="footer__items">Amazon Pay on Merchants</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__col">
                    <div>
                        <p className="footer__heading">Let Us Help You</p>
                    </div>
                    <div>
                        <ul>
                            <li className="footer__items">COVID-19 and Amazon</li>
                            <li className="footer__items">Your Account</li>
                            <li className="footer__items">Returns Centre</li>
                            <li className="footer__items">100% Purchase Protection</li>
                            <li className="footer__items">Amazon App Download</li>
                            <li className="footer__items">Amazon Assistant Download</li>
                            <li className="footer__items">Help</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__border"></div>
            <div className="footer__copyrights">© 1996-2022, Amazon.com, Inc. or its affiliates</div>
        </div>
    )
}

export default Footer












