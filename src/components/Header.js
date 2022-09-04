import React from "react";
import MobileImage from '../assets/images/image-product-mobile.jpg'
import DesktopImage from '../assets/images/image-product-desktop.jpg'

const Header = () => {
    return (
        <div className="img__block">
            <img className="mobile" src={MobileImage}></img>
            <img className="desktop" src={DesktopImage}></img>
        </div>
    )
}

export { Header }