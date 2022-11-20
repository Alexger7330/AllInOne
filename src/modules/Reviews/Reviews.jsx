import { Carousel, InputNumber } from "antd"
import { useRef } from "react"
import '../../styles/reviews.css'
import Stars from '../../images/reviews/countStar.svg'
import userImage1 from '../../images/reviews/photo.svg'
import userImage2 from '../../images/reviews/photo2.svg'


export const Reviews = () => {

    const carouselRef = useRef()


    return (
        <div className="container">
            <div className="reviews__wrapper">
                <div className="reviews">
                    <button className='buttonForCarousel leftBtn'>
                        <i className="fa fa-angle-up" aria-hidden="true" onClick={() => { carouselRef.current.prev() }}></i>
                    </button>

                    <Carousel autoplay dotPosition="left" className='carouselReviews' ref={carouselRef}>
                        <div>
                            <div className="cards__wrapper">

                                <div className="reviews__card">
                                    <img className="stars__image" src={Stars} alt="stars" />
                                    <div className="card__inf">
                                        <img src={userImage1} alt="user image" className="user__image" />
                                        <h2 className="card__title">Alexander Geraskov</h2>
                                        <p className="card__subtitle">“Very good store and staff”</p>
                                    </div>
                                </div>

                                <div className="reviews__card">
                                    <img className="stars__image" src={Stars} alt="stars" />
                                    <div className="card__inf">
                                        <img src={userImage2} alt="user image" className="user__image" />
                                        <h2 className="card__title">Victoria</h2>
                                        <p className="card__subtitle">one of my favorite stores!</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className="cards__wrapper">

                                <div className="reviews__card">
                                    <img className="stars__image" src={Stars} alt="stars" />
                                    <div className="card__inf">
                                        <img src={userImage1} alt="user image" className="user__image" />
                                        <h2 className="card__title">Angella</h2>
                                        <p className="card__subtitle">“one of my favorite stores!”</p>
                                    </div>
                                </div>

                                <div className="reviews__card">
                                    <img className="stars__image" src={Stars} alt="stars" />
                                    <div className="card__inf">
                                        <img src={userImage2} alt="user image" className="user__image" />
                                        <h2 className="card__title">Victor Petrov</h2>
                                        <p className="card__subtitle">“Very good store and staff”</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <div className="cards__wrapper">

                                <div className="reviews__card">
                                    <img className="stars__image" src={Stars} alt="stars" />
                                    <div className="card__inf">
                                        <img src={userImage1} alt="user image" className="user__image" />
                                        <h2 className="card__title">Bob Martin</h2>
                                        <p className="card__subtitle">“Very good store and staff”</p>
                                    </div>
                                </div>

                                <div className="reviews__card">
                                    <img className="stars__image" src={Stars} alt="stars" />
                                    <div className="card__inf">
                                        <img src={userImage2} alt="user image" className="user__image" />
                                        <h2 className="card__title">Alex Slack</h2>
                                        <p className="card__subtitle">“one of my favorite stores!”</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Carousel>

                    <button className='buttonForCarousel rightBtn'>
                        <i className="fa fa-angle-down" aria-hidden="true" onClick={() => { carouselRef.current.next() }}></i>
                    </button>
                </div>
                <div className="reviews__form">
                    <h2>Leave your feedback about us</h2>
                    <form>
                        <div className="form__wrapper">

                            <p>your name</p>
                            <input required placeholder="name" name={['Name']} />

                            <p>your e-mail</p>
                            <input type={'email'} required placeholder="name@gmail.com" name={["Email"]} />

                            <p>your message</p>
                            <textarea placeholder="some review" name={['Introduction']} required />

                            <div className="formStarsAndSubmit">
                                <div>
                                    <p>put a star</p>
                                    <InputNumber className="input__star" required type={'number'} max={5} min={0} name={['Stars']} />
                                </div>

                                <button className="form__submit__ntb" type="Submit">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}