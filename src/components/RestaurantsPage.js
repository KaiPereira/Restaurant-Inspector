import React from "react"
import RestaurantCard from "./subcomponents/RestaurantCard"
import restaurantData from "./subcomponents/restaurantData.json"
import Aos from "aos"
import 'aos/dist/aos.css';

export default function RestaurantsPage() {
    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    const [search, changeSearch] = React.useState("")

    const restaurants = restaurantData.map((data, index) => {
        if (data.header.toLowerCase().includes(search.toLowerCase()))
        return (
            <RestaurantCard 
                header={data.header}
                description={data.description}
                stars={data.stars}
                index={index}
                image={data.images[0]}
            />
        )
    })

    function changeSearchValue(value) {
        changeSearch(prevState => value.target.value)
    }

    console.log(search)

    return (
        <main>
            <div className="restaurants">
                <input type="text" placeholder="Restaurant" className="restaurantSearch" onChange={changeSearchValue} data-aos="fade-up" data-aos-once="true" data-aos-delay="500"/>
                <div className="restaurantsExamples">
                    {restaurants}
                </div>
            </div>
        </main>
    )
}