import React from "react"
import { Link } from "react-router-dom";
import Aos from "aos"
import 'aos/dist/aos.css';

export default function MainWebsite() {
    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <main>
            <section className="main" id="main">
                <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="500">Inspect the Health Activities of Restaurents</h1>
                <p data-aos="fade-up" data-aos-once="true" data-aos-delay="700">Restaurent Inspector let’s you look into every detail of a restaurent’s health and practices. We hope people can look at different restaurent’s and decide whether one can make you sick or one is fine.</p>
                <div data-aos="fade-up" data-aos-once="true" data-aos-delay="900">
                    <Link to="/restaurants" className="mainButton">View Restaurents</Link>
                </div>
                
            </section>
            <div className="arrow">
                <i className="fa-solid fa-angle-down arrowIcon"></i>
            </div>
            <section className="mission" id="mission">
                <h2 data-aos="fade-up" data-aos-once="true">Business<br/><span>Mission</span></h2>
                <div className="missionHeaderLine" data-aos="fade-up" data-aos-once="true"></div>
                <p data-aos="fade-up" data-aos-once="true">We hope to prevent people from catching sicknesses during their dining experiences. With an intense screening for food health specialists we hope to give the highest of quality information to make sure you are safe during your dining.</p>
                <div data-aos="fade-up" data-aos-once="true">
                    <Link to="/restaurants" className="missionButton">View Restaurants</Link>
                </div>
                
            </section>
            <section className="specialists" id="specialists">
                <h3 data-aos="fade-up" data-aos-once="true">Our Specialists</h3>
                <div className="specialistsHeaderLine" data-aos="fade-up" data-aos-once="true"></div>
                <p className="specialistsDescription" data-aos="fade-up" data-aos-once="true">Our specialists go through an intense secreening process this includes the first step of someone submitting their details. We then do a face to face interview to see what they are like. After this we check and refer their qualifications.</p>
                <p className="specialistsExamplesHeader" data-aos="fade-up" data-aos-once="true">Some of our Specialists</p>
                <div className="specialistExamples">
                    <div className="specialistExample" data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="specialistImage" alt="spcialist"/>
                        <div className="specialistInfo">
                            <div className="specialistExamplePadding">
                                <p className="specialistName">Albert Wharton</p>
                                <p className="specialistDescription">Award Winning Food Inspector</p>
                            </div>
                        </div>
                    </div>
                    <div className="specialistExample" data-aos="fade-up" data-aos-once="true" data-aos-delay="400">
                    <img src="https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg" className="specialistImage" alt="spcialist"/>
                        <div className="specialistInfo">
                            <div className="specialistExamplePadding">
                                <p className="specialistName">Frankling Bout</p>
                                <p className="specialistDescription">Food Inspector Specialised in Toxicology</p>
                            </div>
                        </div>
                    </div>
                    <div className="specialistExample" data-aos="fade-up" data-aos-once="true" data-aos-delay="600">
                    <img src="https://static.boredpanda.com/blog/wp-content/uploads/2017/04/Virrappan2-58f79980ae6fb__880.jpg" className="specialistImage" alt="spcialist"/>
                        <div className="specialistInfo">
                            <div className="specialistExamplePadding">
                                <p className="specialistName">Mr.Benjamin</p>
                                <p className="specialistDescription">Michelin Food Inspector and Taster</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
    
}