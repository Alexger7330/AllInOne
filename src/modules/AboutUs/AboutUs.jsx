import { Image } from "antd"
import AboutImage from '../../images/aboutUs/aboutUsImage.svg'
import Viber from '../../images/viberLogo.svg'
import Telegram from '../../images/telegramLogo.svg'
import Instagram from '../../images/instagramLogo.svg'
import '../../styles/aboutUs.css'

export const AboutUs = () => {

    return (
        <div className="container">
            <div className="aboutUs__wrapper">
                <div className="information__wrapper">
                    <div className="aboutUs__mainIformation">
                        <h2>If you want to buy everything in one place, then you are welcome to us</h2>
                        <p>In our store you will find everything you need. We have trained people who will help with the choice and always answer your questions. We are waiting for you!</p>
                    </div>
                    <div className="aboutUs__contacts">
                        <div className="address__wrapper">
                            <h3>You can find us at</h3>
                            <p>Belarus, minsk, uborevicha 104</p>
                        </div>
                        <div className="contacts">
                            <h3>
                                <a className='' href="tel:+375447851985">+375 44 785 19 85</a>
                            </h3>
                            <div className="maseege__wrapper">
                                <a href="https://www.viber.com/ru/" target='blank' className='massege__footer__item'> <img src={Viber} alt="viber" /></a>
                                <a href="https://web.telegram.org/k/" target='blank' className='massege__footer__item'><img src={Telegram} alt="telegram" /></a>
                                <a href="https://www.instagram.com/zangel_777/" target='blank' className='massege__footer__item'><img src={Instagram} alt="instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aboutUsImage">
                    <Image src={AboutImage} alt='AboutUsImage' />
                </div>
            </div>
        </div>
    )
}