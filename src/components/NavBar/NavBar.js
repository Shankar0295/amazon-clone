import React from 'react';
import './NavBar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const NavBar = () => {
    return (
        <div className="navbar">
            <img className="navbar__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
            <div className="navbar__locationBlock">
                <div className="navbar__location">
                    <LocationOnOutlinedIcon className="navbar__locationIcon" />
                </div>
                <div className="navbar__locationdetails">
                    <span className="navbar__lineOne">Deliver to</span>
                    <span className="navbar__lineTwo">Location</span>
                </div>
            </div>

            <div className="navbar__search">
                <input type="text" className="navbar__searchInput" />
                <SearchIcon className="navbar__searchIcon" />
            </div>
            <div className="navbar__items">
                <div className="navbar__option">
                    <span className="navbar__lineOne">Hello,Sign in</span>
                    <span className="navbar__lineTwo">Account & Lists</span>
                </div>
                <div className="navbar__option">
                    <span className="navbar__lineOne">Returns</span>
                    <span className="navbar__lineTwo">& Orders</span>
                </div>
                <div className="navbar__locationBlock">
                    <ShoppingCartIcon className="navbar__cartIcon" />
                    <span className="navbar__cartlist">0</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
