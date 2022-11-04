import '../styles/footer.css'
import LogoFooter from '../images/LogoFooter.svg'
import Viber from '../images/viberLogo.svg'
import Telegram from '../images/telegramLogo.svg'
import Instagram from '../images/instagramLogo.svg'
import { NavLink } from 'react-router-dom'

export const Footer = () => {

    const handleClickToPosition = () => {
        window.scrollTo(0, 0);
    }

    return (
        <footer>
            <div className='container'>
                <div className="footer__wrapper">
                    <div className="footer__nav__wrapper">
                        <img src={LogoFooter} alt="logoFooter" className='logoFooter' />
                        <div className='footer__items'>
                            <NavLink className='footer__nav__link' to="/" onClick={handleClickToPosition}>Main</NavLink>
                            <NavLink className='footer__nav__link' to="catalog" onClick={handleClickToPosition}>Catalog</NavLink>
                            <NavLink className='footer__nav__link' to="aboutUs" onClick={handleClickToPosition}>About Us</NavLink>
                            <NavLink className='footer__nav__link' to="reviews" onClick={handleClickToPosition}>reviews</NavLink>
                        </div>
                    </div>
                    <div className="contact__wrapper">
                        <a className='contact__phone' href="tel:+375447851985">+375 44 785-19-85</a>
                        <a className='contact__email' href="mailto:allinone@site.en">allinone@site.en</a>
                        <div className="messengers__wrapper">
                            <a href="https://www.viber.com/ru/" target='blank' className='massege__footer__item'> <img src={Viber} alt="viber" /></a>
                            <a href="https://web.telegram.org/k/" target='blank' className='massege__footer__item'><img src={Telegram} alt="telegram" /></a>
                            <a href="https://www.instagram.com/zangel_777/" target='blank' className='massege__footer__item'><img src={Instagram} alt="instagram" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}