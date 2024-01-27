import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer>
        <div className="column_one">
          <img src="./assets/images/logo/logo.svg" alt="" />
          <p>We make sure that your safety is never compromised.
            This is why we hire all the staff under the roof of Home Comfort,
            just for your satisfaction.</p>
        </div>
        <div className="column_two">
          <ul>
            <li>
              Home
            </li>
            <li>
              Service
            </li>
            <li>
              Contact Us
            </li>
          </ul>
        </div>
        <div className="column_four">
          <ul>
            <li>
              Facebook
            </li>
            <li>
              Twitter
            </li>
            <li>
              Instagram
            </li>
            <li>
              Linkedinn
            </li>
          </ul>
        </div>
        <div className="column_three">
          <ul>
            <li>
              +923015904500
            </li>
            <li>
              info@homecomfort.com
            </li>  
          </ul>
          <div className="news_letter">
            <input type="text" placeholder="Please Enter Email" />
            <button>send</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer