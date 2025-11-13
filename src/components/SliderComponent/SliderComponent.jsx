import { Image } from 'antd';
import React from 'react'
import Slider from 'react-slick';

const SliderComponent = ({arrImages}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings} className='slideshow-wrapper'>
        {arrImages.map((image) => {
          return (
            <Image src={image} alt="Slider" preview={false} className="image-slider"/>
          )
        })}
      </Slider>
    </div>
  )
}

export default SliderComponent