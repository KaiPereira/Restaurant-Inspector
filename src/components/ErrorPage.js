import React from "react"
import Aos from "aos"
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

export default function ErrorPage() {
    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <main>
            <div className="errorMain">
                <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="500"><span>4</span>0<span>4</span></h1>
                <p data-aos="fade-up" data-aos-once="true" data-aos-delay="700">Page Not Found</p>
                <div data-aos-once="true" data-aos-delay="900" data-aos="fade-up">
                    <Link to="/" className="errorMainButton">Back</Link>
                </div>
                
            </div>
        </main>
    )
}