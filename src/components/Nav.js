import React from "react"
import { Link } from "react-router-dom";

export default function Nav(props) {
    const [style1, changeStyle1] = React.useState(false);
    const [style2, changeStyle2] = React.useState(false);
    const [style3, changeStyle3] = React.useState(false);

    function changeStyleEnter(style) {
        style(true)
    }

    function changeStyleLeave(style) {
        style(false)
    }
    return (
        <>
            <nav>
                <img src="Logo.png" alt="logo" />
                <div className="navItems">
                    <div className="navItem">
                        <div className="navItemText"><a href="/#home" onMouseEnter={() => changeStyleEnter(changeStyle1)} onMouseLeave={() => changeStyleLeave(changeStyle1)}>Home</a></div>
                        <div className={style1 ? "navItemHover navItemHoverActive" : "navItemHover"}></div>
                    </div>
                    <div className="navItem">
                        <div className="navItemText"><a href="/#mission" onMouseEnter={() => changeStyleEnter(changeStyle2)} onMouseLeave={() => changeStyleLeave(changeStyle2)}>Mission</a></div>
                        <div className={style2 ? "navItemHover navItemHoverActive" : "navItemHover"}></div>
                    </div>
                    <div className="navItem">
                        <div className="navItemText"><a href="/#specialists" onMouseEnter={() => changeStyleEnter(changeStyle3)} onMouseLeave={() => changeStyleLeave(changeStyle3)}>Specialists</a></div>
                        <div className={style3 ? "navItemHover navItemHoverActive" : "navItemHover"}></div>
                    </div>
                    <Link to="/restaurants" className="navItemButton">
                        Check Restaurants
                    </Link>
                </div>
                {props.dropdownState ? <i className="fa-solid fa-bars dropdownIcons" onClick={props.changeMenuState}></i> : <i className="fa-solid fa-x dropdownIcons" onClick={props.changeMenuState}></i>}
            </nav>
            <div className="dropdownContainer">
                <div className={props.dropdownState ? "dropdown" : "dropdown dropdownActivated"}>
                    <div className="dropdownItem">
                        <a href="/#home" className="dropdownItemEffect" onClick={props.changeMenuState}>
                            <p>Home</p>
                        </a>
                    </div>
                    <div className="dropdownItem">
                        <a href="/#mission" className="dropdownItemEffect" onClick={props.changeMenuState}>
                            <p>Mission</p>
                        </a>
                    </div>
                    <div className="dropdownItem">
                        <a href="/#specialists" className="dropdownItemEffect" onClick={props.changeMenuState}>
                            <p>Specialists</p>
                        </a>
                    </div>
                    <div className="dropdownButtonContainer">
                        <Link to="/restaurants" onClick={props.changeMenuState} className="navDropdownButton">Check Restaurants</Link>
                    </div>
                </div>
            </div>
        </>
        
    )
}