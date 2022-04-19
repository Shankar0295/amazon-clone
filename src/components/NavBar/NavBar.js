import React from 'react';
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
    // const [latitude, setLatitude] = useState('')
    // const [longitude, setLongitude] = useState('')

    // const location = () => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         console.log(position)
    //         setLatitude(position.coords.latitude)
    //         setLongitude(position.coords.longitude)
    //         console.log(latitude)
    //         const res = fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=cadbcd6f8bba31ae6076c71c4f52b6e2`)
    //             .then((res) => {
    //                 console.log(res)
    //             })
    //         })
    //     }

    // useEffect(() => {
    //     location()
    // }, [])

    return (
        <div className="navbar">
            <Link to="/"><img className="navbar__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" /></Link>
            <div className="navbar__locationBlock">
                <div className="navbar__location">
                    <LocationOnOutlinedIcon className="navbar__locationIcon" />
                </div>
                <div className="navbar__locationdetails">
                    <span className="navbar__lineOne">Deliver to</span>
                    <span className="navbar__lineTwo">India</span>
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
