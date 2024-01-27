import React from 'react'
import BannerImage from '../../../assets/images/home/banner.jpg.jpg'


const HeroSection = () => {
  return (
    <>
     <section className="banner_section">
        <div className="page_width">
          <div className="banner_inner_section">
            <div className="banner_content">
              <small>BEST IN DUBAI</small>
              <h1 className="intro">WELCOME TO</h1>
              <h2>HOME <span>COMFORT</span></h2>
              <p className="description">
                Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with home comfort professional experts.
              </p>
              <div className="banner_button">
                <button className="btn btn_1">Contact US</button>
                <button className="btn btn_2">Learn More</button>
              </div>
            </div>
            <div className="banner_image">
              <img src= {BannerImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection