import React from "react"
import { useParams } from 'react-router-dom'
import restaurantData from "./subcomponents/restaurantData.json"
import Aos from "aos"
import 'aos/dist/aos.css';

export default function RestaurantPage() {
    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    let index = useParams().index
    let restaurantDetails = restaurantData[index]
    
    return (
        <main>
            <section className="restaurantPage">
                <div className="restaurantGallery">
                    <div className="galleryImage galleryImage1" data-aos="fade-up" data-aos-once="true" data-aos-delay="500">
                        <img src={restaurantDetails.images[0]} alt="Gallery" className="galleryImageSrc" />
                    </div>
                    <div className="galleryImage galleryImage2" data-aos="fade-up" data-aos-once="true" data-aos-delay="700">
                        <img src={restaurantDetails.images[1]} alt="Gallery" className="galleryImageSrc" />
                    </div>
                    <div className="galleryImage galleryImage3" data-aos="fade-up" data-aos-once="true" data-aos-delay="900">
                        <img src={restaurantDetails.images[2]} alt="Gallery" className="galleryImageSrc" />
                    </div>
                    <div className="galleryImage galleryImage4" data-aos="fade-up" data-aos-once="true" data-aos-delay="1100">
                        <img src={restaurantDetails.images[3]} alt="Gallery" className="galleryImageSrc" />
                    </div>
                </div>
                <div className="restaurantReviews">
                    <div className="restaurantReviewAlign" data-aos="fade-up" data-aos-once="true" data-aos-delay="1300">
                        <h1 data-aos="fade-up">{restaurantDetails.header}</h1>
                        <div className="restaurantReviewSection">
                            <p className="restaurantReviewHeader">Food Storage</p>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[0] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Food is kept at least 6” off the ground</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[1] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Chemicals and food are separated</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[2] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Food is stored in a clean, dry location that is not exposed to contamination.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[3] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>All food items are correctly labeled and dated.</p>
                            </div>
                        </div>
                        <div className="restaurantReviewSection">
                            <p className="restaurantReviewHeader">Freezer and Refrigerator Maintenance</p>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[4] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Thermometer is easily visible and displays the correct temperature.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[5] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Food is stored at least 6” off the ground in walk-in refrigerators.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[6] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Refrigerators and freezers are clean.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[7] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>All food items are correctly labeled and dated.</p>
                            </div>
                        </div>
                        <div className="restaurantReviewSection">
                            <p className="restaurantReviewHeader">Food Preparation</p>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[8] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Food is protected from cross-contamination.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[9] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Frozen food is thawed properly in a refrigerator or under running water.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[10] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Staff uses gloves, clean hands, or utensils when handling food.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[11] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Food is heated to the correct temperature to remove all bacteria before being placed in the hot holding area.</p>
                            </div>
                        </div>
                        <div className="restaurantReviewSection">
                            <p className="restaurantReviewHeader">Sanitation</p>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[12] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Washing station is organized into three sections for washing, rinsing, and sanitizing.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[13] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Equipment is clean to sight and touch.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[14] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Utensils are covered to protect them from dust and contaminants when stored.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[15] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Water temperature is heated to the correct temperature for sanitizing.</p>
                            </div>
                        </div>
                        <div className="restaurantReviewSection">
                            <p className="restaurantReviewHeader">Refuse and Garbage Disposal</p>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[16] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Garbage and refuse is properly disposed of. Outside receptacles have lids or covers.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[17] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Garbage and recycling bins are emptied when full.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[18] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>The area around the dumpster is clean and free of pests.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[19] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Garbage bins are cleaned regularly to prevent pests.</p>
                            </div>
                        </div>
                        <div className="restaurantReviewSection">
                            <p className="restaurantReviewHeader">Employee Hygiene</p>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[20] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Employees wear hairnets, and male employees cover facial hair.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[21] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Eating and smoking are limited to designated areas away from food prep areas.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[22] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Employees wash their hands regularly using proper hand-washing techniques.</p>
                            </div>
                            <div className="restaurantReviewItem">
                                <i class={restaurantDetails.questions[23] ? "fa-solid fa-check restaurantReviewIcon" : "fa-solid fa-x restaurantReviewIconX"}></i>
                                <p>Employees wear clean clothes and proper, closed-toed shoes.</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </section>
        </main>
    )
}