import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom'
import Logo from '../images/Logo.svg'
import Cart from '../images/Cart.svg'
import Location from '../images/Location.svg'
import '../styles/header.css'


export const Header = observer(() => {
    return (
        <header>
            <div className='container'>
                <nav className='header__wrapper'>
                    <NavLink className='header__nav__link' to="/"><img src={Logo} alt="Logo" /></NavLink>

                    <div className='header__nav__wrapper'>
                        <NavLink className='header__nav__link nav__link' to="/">Main</NavLink>
                        <NavLink className='header__nav__link nav__link' to="catalog">Catalog</NavLink>
                        <NavLink className='header__nav__link nav__link' to="aboutUs">About Us</NavLink>
                        <NavLink className='header__nav__link nav__link' to="reviews">reviews</NavLink>
                    </div>
                    <div className='locationAndCart'>
                        <span><img src={Location} alt="pointer" className='location__pointer' />Belarus</span>
                        <NavLink className='header__nav__link cart__logo' to="cart"><img src={Cart} alt="Cart" /></NavLink> {/*будет image */}
                    </div>
                </nav>
            </div>
        </header>

    )
})