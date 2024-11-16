import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_0 from '../../assets/manjil.png'
import user_1 from '../../assets/prayash.jpg'
import user_2 from '../../assets/jayash.png'
import user_3 from '../../assets/sunit.png'
import user_4 from '../../assets/prashant.png'
import rating from '../../assets/rating.png'

const Testimonials = () => {
  const slider = useRef(); // to access the user tag
  let transX = 0;
  const slideForward = () => {
    if(transX > -50){
      transX -= 20;
    }
    slider.current.style.transform = `translateX(${transX}%)`
  }

  const slideBackward = () => {
    if(transX < 0){
      transX += 20;
    }
    slider.current.style.transform = `translateX(${transX}%)`
  }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide first-user">
                <div className="user-info">
                  <img src={user_0} alt="" />
                  <div>
                    <h3>Manjil Nepal</h3>
                    <span>Bhadrapur, Jhapa</span>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p>“This app has made shopping for Nepali groceries so convenient. Fresh products and great service!”</p>
              </div>
            </li>
            <li>
              <div className="slide first-user">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Prayash Adhikari</h3>
                    <span>Sano Paila Haru, Bhaktapur</span>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p>“Wide variety and easy-to-use interface. Highly recommend for anyone looking for authentic Nepali groceries!”</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Jayash Shrestha</h3>
                    <span>Sitapaila, Kathmandu</span>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p>“Finally, an app that delivers Nepali essentials to my doorstep. Super fast delivery and great packaging!</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Sunit Soni</h3>
                    <span>Ghantaghar, Birjung</span>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p>“The customer support team is amazing. They quickly resolved my issue and ensured my order arrived on time.”</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Prashant Dhimal</h3>
                    <span>Phusi Nagar, Hetauda</span>
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p>“Finally, an app that delivers Nepali essentials to my doorstep. Super fast delivery and great packaging!</p>
              </div>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Testimonials
