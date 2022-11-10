import { Carousel, Form, Input, InputNumber } from "antd"
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
                    <Form>
                        <div className="form__wrapper">
                            <p>your name</p>
                            <Form.Item
                                name={['Name']}
                                rules={[
                                    { required: true, },
                                ]}>
                                <Input placeholder="name" />
                            </Form.Item>

                            <p>your e-mail</p>
                            <Form.Item
                                name={["Email"]}
                                rules={[
                                    {
                                        type: "email",
                                        required: true
                                    }
                                ]}>
                                <Input placeholder="name@gmail.com" />
                            </Form.Item>

                            <p>your message</p>
                            <Form.Item name={['Introduction']} rules={[{ required: true, }]}>
                                <Input.TextArea placeholder="some review" />
                            </Form.Item>

                            <div className="formStarsAndSubmit">
                                <div>
                                    <p>put a star</p>
                                    <Form.Item
                                        className="input__star"
                                        name={['Stars']}
                                        rules={[
                                            {
                                                type: 'number',
                                                min: 0,
                                                max: 5,
                                                required: true
                                            },
                                        ]}>
                                        <InputNumber />
                                    </Form.Item>
                                </div>

                                <button className="form__submit__ntb" type="Submit">Send</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}