import { NavLink } from "react-router-dom"
import navBarLogo from '../images/main/NavBarLogo.svg'
import '../styles/navBar.css'

export const NavBar = ({ onClose }) => {


    const handleClick = () => {
        onClose()
    }

    return (
        <>
            <div className="navBar" >
                <div className='navBar__items'>
                    <i className="fa fa-times closeBtn" aria-hidden="true" onClick={handleClick}></i>
                    <NavLink className='navBar__item' onClick={handleClick} to="/">Main</NavLink>
                    <NavLink className='navBar__item' onClick={handleClick} to="catalog">Catalog</NavLink>
                    <NavLink className='navBar__item' onClick={handleClick} to="aboutUs">About Us</NavLink>
                    <NavLink className='navBar__item' onClick={handleClick} to="reviews">reviews</NavLink>
                </div>
                <img src={navBarLogo} alt="navBarLogo" className="navBarLogo" />
            </div>
        </>
    )
}