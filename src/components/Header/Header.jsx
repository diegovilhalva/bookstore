import "./Header.css"

import { headerBooks } from "../../data/data"

import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from "swiper/modules"
import { GoArrowRight, GoArrowLeft } from "react-icons/go"

import headerShape from "../../assets/header-shape.svg"

const Header = () => {

  return (
    <header>
      <div className="container header-container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          modules={[Navigation, Pagination]}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={
            {
              preEl: '.button-prev-slide',
              nextEl: '.button-next-slide'
            }
          }
        >
          {
            headerBooks.map(({ id, btnLink, img, info, title }) => (
              <SwiperSlide key={id}>
                <div className="header-wrapper container">
                  <div className="header-left">
                    <h1>{title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: info }}></p>
                    <Link className="btn btn-border" to={btnLink}>Learn More</Link>
                  </div>
                  <div className="header-right">
                    <img src={img} alt={title} />
                  </div>


                </div>
              </SwiperSlide>
            ))
          }
          <div className="slider-button">
            <div className="button-prev-slide slidebutton">
              <GoArrowLeft />

            </div>
            <div className="button-next-slide slidebutton">
              <GoArrowRight />
            </div>
          </div>
          <div className="container">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
          <div className="header-shape">
            <img src={headerShape} alt="" className="header-s" />
          </div>
      </div>
    </header>
  )
}

export default Header