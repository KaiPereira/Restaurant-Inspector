import React from "react"
import { Link } from "react-router-dom";
import Aos from "aos"
import 'aos/dist/aos.css';

export default function RestaurantCard(props) {
    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    let stars = []

    for (let i = 0; i < props.stars; i++) {
        stars.push(
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="restaurantRatingIcon">
                <path d="M11.5 0L14.0819 8.63729H22.4371L15.6776 13.9754L18.2595 22.6127L11.5 17.2746L4.74047 22.6127L7.32238 13.9754L0.56285 8.63729H8.91809L11.5 0Z"/>
            </svg>
        )
    }

    let emptyStars = []

    for (let i = 0; i < 5 - props.stars; i++) {
        emptyStars.push(
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="restaurantRatingIcon restaurantRatingIconBlank">
                <path d="M11.5 0L14.0819 8.63729H22.4371L15.6776 13.9754L18.2595 22.6127L11.5 17.2746L4.74047 22.6127L7.32238 13.9754L0.56285 8.63729H8.91809L11.5 0Z"/>
            </svg>
        )
    }

    console.log(props.index)
    return (
        <div data-aos="fade-up" data-aos-once="true" data-aos-delay="700">
            <Link to={props.index.toString()} className="restaurantExample">
                <img src={props.image} className="restaurantImage" alt="restaurant"></img>
                <p className="restaurantHeader">{props.header}</p>
                <p className="restaurantDescription">{props.description}</p>
                <div className="restaurantRating">
                    {stars}
                    {emptyStars}
                </div>
            </Link>
        </div>
    )
}