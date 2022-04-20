import React, { useEffect, useState } from 'react';
import './NavBar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../cartContext";
import { auth } from "../../firebase";
import { signOut } from 'firebase/auth';

const NavBar = () => {
    const [{ cart, user }] = useCartContext();
    const [userlocation, setUserLocation] = useState("");
    console.log(cart)

    const handleAuthentication = () => {
        if (user) {
            signOut(auth).then(() => {
                alert("signed out")
            }).catch((error) => {
                console.log(error.message)
            });
        }
    }
    const location = () => {
        if ('geolocation' in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition(success)
        } else {
            /* geolocation IS NOT available */
            navigator.geolocation.getCurrentPosition(errors)
        }
    }

    const success = async (pos) => {
        var crd = pos.coords;
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${crd.latitude}&lon=${crd.longitude}&appid=cadbcd6f8bba31ae6076c71c4f52b6e2`)
        const location = await res.json();
        setUserLocation(location)
    }

    const errors = (err) => {
        alert(`ERROR(${err.code}): ${err.message}`);
    }

    useEffect(() => {
        location();
    }, [])
    console.log(userlocation)
    return (
        <div className="navbar">
            <Link to="/"><img className="navbar__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" /></Link>
            <div className="navbar__locationBlock">
                <div className="navbar__location">
                    <LocationOnOutlinedIcon className="navbar__locationIcon" />
                </div>
                <div className="navbar__locationdetails">
                    <span className="navbar__lineOne">Deliver to</span>
                    <span className="navbar__lineTwo">{!userlocation ? "India" : `${userlocation[0].name},${userlocation[0].country}`}</span>
                </div>
            </div>

            <div className="navbar__search">
                <input type="text" className="navbar__searchInput" />
                <SearchIcon className="navbar__searchIcon" />
            </div>
            <div className="navbar__items">
                <Link to={!user && '/login'}>
                    <div className="navbar__option" onClick={handleAuthentication}>
                        <span className="navbar__lineOne">Hello, {!user ? "Guest" : user.email}</span>
                        <span className="navbar__lineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className="navbar__option">
                        <span className="navbar__lineOne">Returns</span>
                        <span className="navbar__lineTwo">& Orders</span>
                    </div>
                </Link>
                <div className="navbar__locationBlock">
                    <Link to="/checkout">
                        <ShoppingCartIcon className="navbar__cartIcon" />
                        <span className="navbar__cartlist">{cart.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
