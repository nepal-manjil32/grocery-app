import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/manjil.png'
import user_2 from '../../assets/jayash.png'
import user_3 from '../../assets/sunit-pro.png'
import user_4 from '../../assets/prashant.png'

const Testimonials = () => {
  const slider = useRef(); // to access the user tag
  let transX = 0;
  const slideForward = () => {
    if(transX > -50){
      transX -= 25;
    }
    slider.current.style.transform = `translateX(${transX}%)`
  }

  const slideBackward = () => {
    if(transX < 0){
      transX += 25;
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
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Manjil Nepal</h3>
                    <span>Bhadrapur, Jhapa</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Odio tempore vitae ipsa mollitia porro nobis, veniam consequatur 
                  aspernatur, repellat aliquid, ipsam ut accusamus aperiam quasi 
                  error sequi architecto excepturi quia!</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Jayash Shrestha</h3>
                    <span>Sitapaila, Kathmandu</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Odio tempore vitae ipsa mollitia porro nobis, veniam consequatur 
                  aspernatur, repellat aliquid, ipsam ut accusamus aperiam quasi 
                  error sequi architecto excepturi quia!</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Sunit Soni</h3>
                    <span>Ghantaghar, Birjung</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Odio tempore vitae ipsa mollitia porro nobis, veniam consequatur 
                  aspernatur, repellat aliquid, ipsam ut accusamus aperiam quasi 
                  error sequi architecto excepturi quia!</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Prashant Dhimal</h3>
                    <span>Phusi Nagar, Hetauda</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Odio tempore vitae ipsa mollitia porro nobis, veniam consequatur 
                  aspernatur, repellat aliquid, ipsam ut accusamus aperiam quasi 
                  error sequi architecto excepturi quia!</p>
              </div>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Testimonials
