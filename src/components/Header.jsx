import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom'
import Logo from '../images/Logo.svg'
import Cart from '../images/Cart.svg'
import CartWithPoint from '../images/CartWithPoint.svg'
import Location from '../images/Location.svg'
import '../styles/header.css'
import { NavBar } from './NavBar';
import burger from '../images/main/Burger.svg'
import { useState } from 'react';
import cartStore from '../stores/CartStore';


export const Header = observer(() => {

    const { cartCount } = cartStore

    const [brouserWidth, setBrouserWidth] = useState(window.screen.width)
    const [visibile, setVisibile] = useState(false);

    setInterval(() => {
        setBrouserWidth(window.screen.width)
    }, 1);

    const openNavBar = () => {
        setVisibile(true)
    }

    const handleNavBarClose = () => {
        setVisibile(false)
    }

    return (
        <header>
            {brouserWidth < 1024 && visibile === true && <NavBar onClose={handleNavBarClose} />}
            <div className='container'>
                <nav className='header__wrapper'>
                    <NavLink className='header__nav__link' to="/"><img src={Logo} alt="Logo" /></NavLink>

                    {brouserWidth >= 1024 && <div className='header__nav__wrapper'>
                        <NavLink className='header__nav__link nav__link' to="/">Main</NavLink>
                        <NavLink className='header__nav__link nav__link' to="catalog">Catalog</NavLink>
                        <NavLink className='header__nav__link nav__link' to="aboutUs">About Us</NavLink>
                        <NavLink className='header__nav__link nav__link' to="reviews">reviews</NavLink>
                    </div>}

                    <div className='locationAndCart'>
                        {brouserWidth >= 1024 && <span><img src={Location} alt="pointer" className='location__pointer' />Belarus</span>}
                        {brouserWidth >= 1024 &&
                            <NavLink className='header__nav__link cart__logo' to="cart">
                                {cartCount <= 0 && <img src={Cart} alt="Cart" />}
                                {cartCount > 0 && <img src={CartWithPoint} alt="CartWithPoint" />}
                            </NavLink>
                        }
                    </div>
                    {brouserWidth < 1024 && <div>
                        <NavLink className='header__nav__link cart__logo' to="cart">
                            {cartCount <= 0 && <img src={Cart} alt="Cart" />}
                            {cartCount > 0 && <img src={CartWithPoint} alt="CartWithPoint" />}
                        </NavLink>
                        <img src={burger} alt="burger" className='burger' onClick={openNavBar} />
                    </div>}
                </nav>
            </div>
        </header>

    )
})