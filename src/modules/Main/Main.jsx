import MainProductBg from '../../images/main/MainProductBg.png'
import MainProductBgNotText from '../../images/main/MainProductBgNotText.png'
import '../../styles/main.css'
import { Carousel } from 'antd'
import iphone13 from '../../images/main/iphone13.svg'
import appleWatch from '../../images/main/apple watch7.svg'
import tshirt from '../../images/main/tshirt.svg'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

export const Main = () => {

    const ref = useRef()

    return (
        <>
            <img src={MainProductBg} alt="productBg" className='mainProductBg' />
            <img src={MainProductBgNotText} alt="productBg" className='MainProductBgNotText' />

            <div className="container">
                <div className="main__wrapper">
                    <div className="text__wrapper">
                        <h2 className='main__text'>everything you <span> need </span> <br /> in our store</h2>
                        <NavLink to='catalog'><button className='main__catalogBtn'>To catalog</button></NavLink>
                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                        <i className="fa fa-angle-double-right  newArrow" aria-hidden="true"></i>
                        <i className="fa fa-angle-double-right newArrow" aria-hidden="true"></i>
                        <i className="fa fa-angle-double-right  newArrow" aria-hidden="true"></i>
                    </div>
                    <div className="carousel__wrapper">
                        <button className='buttonForCarousel left' onClick={() => ref.current.prev()}>
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                        </button>
                        <Carousel autoplay className='carousel'
                            ref={ref} >
                            <div>
                                <img src={iphone13} alt="iphone" />
                            </div>
                            <div>
                                <img src={appleWatch} alt="watch" />
                            </div>
                            <div>
                                <img src={tshirt} alt="t-shirt" />
                            </div>
                        </Carousel>
                        <button className='buttonForCarousel right' onClick={() => ref.current.next()}>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}