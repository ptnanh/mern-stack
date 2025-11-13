import React from "react";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slide1 from "../../assets/images/Slide1.webp"
import slide2 from "../../assets/images/Slide2.webp"
import slide3 from "../../assets/images/Slide3.webp"
import slide4 from "../../assets/images/Slide4.webp"
import CardComponent from "../../components/CardComponent/CardComponent";

const HomePage = () => {
    return (
        <div>
            <div className="section-slideshow-banner">
                <div className="page-width">
                    <SliderComponent arrImages={[slide1, slide2, slide3, slide4]}/>
                </div>
            </div>
            
            <div className="section-featured-product">
                <div className="page-width">
                    <div className="flex">
                        <CardComponent />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage