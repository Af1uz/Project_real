import React, { useEffect } from 'react'
import '../Navbar/Navbar.css'
import titlee from './title.png'
import image1 from './cardimg1.png'
import image2 from './cardimg2.png'
import image3 from './cardimg3.png'
import image4 from './strl1.png'
import image5 from './strl2.png'
import image6 from './Filter.png'
import image7 from './next.png'
import Aos from 'aos'


const Navbar = () => {
useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      disableMutationObserver: false,
      debounceDelay: 50, 
      throttleDelay: 99,
      offset: 120,
    });
  }, []);
  return (
    <div className='admin' >
      <div className="navs">
        <div className="navs2">
            <div className="nav_title">
            <img className='nav_img' src={titlee} alt="" />
        </div>
        <div className="nav_link">
            <li>
                <a href=""> Asosiy </a>
                <a href=""> Kun Yangiliklari </a>
                <a href=""> Biz Xaqimizda </a>
                <a href=""> Portfolio </a>
            </li>
        </div>
        <div className="nav_button">
            <button className='navs_btn' >Bog'lanish</button>
        </div>
        </div>
      </div>



      <div  className="navs_intro">
        <div data-aos="fade-up" className="navs_intro2">

            <div className="navs_left">
                <h1 className='navs_left_title' >San’at olamiga yo‘l oching</h1>
                <p className='navs_left_p' >Tasviriy san’at, dizayn va ijodiy ishlar uchun yagona platforma. Ilhom oling, o‘rganing va o‘z ijodingizni baham ko‘ring.</p>

                <button className='navs_left_btn' >Ko‘proq bilish</button>

            </div>
            <div className="navs_right">
                <div className="navs_left_card1">
                    <h2>5000+</h2>
                    <h2>Number of Completed Projects</h2>
                </div>
                <div className="navs_left_card1">
                    <h2>5 Years</h2>
                    <h2>Lifespan of Delivered Software</h2>
                </div>

                <div className="navs_lefts_cards">
                    <div className="navs_lefts_cards2">
                        <div className="navs_lefts_cards_card1">
                            <img className='cardsimg0' src={image4} alt="" />
                        </div>
                        <div className="navs_lefts_cards_card1">
                            <img className='cardsimg1' src={image1} alt="" />
                        </div>
                        <div className="navs_lefts_cards_card1">
                            <img className='cardsimg1' src={image2} alt="" />
                        </div>
                        <div className="navs_lefts_cards_card1">
                            <img className='cardsimg1' src={image3} alt="" />
                        </div>
                        <div className="navs_lefts_cards_card1">
                            <img className='cardsimg0' src={image5} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
      </div>


        <div className="navs2_intro">
            <div data-aos="fade-up" className="boxes">
                <h1 className='boxes_title' >Kun Yangligi</h1>
                <button className='boxes_btn' >
                    <img src={image6} alt="" />
                    Filter
                </button>
            </div>
            <div data-aos="fade-up" className="navs2_intro2">
                <h1 className='navs2_title' >San’at olamiga yo‘l oching</h1>
                <img className='navs2_intro2_img' src={image7} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Navbar
