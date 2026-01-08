import React from 'react'
import '../Intro/Intro.css'
import peopleimg from './peoplecard1.png'
import peopleimg1 from './peoplecard2.png'
import peopleimg2 from './peoplecard3.png'
import nexts2 from './next2.png'
import kartas from './karta.png'
import qavss from './qavs.png'
import qavss1 from './qavs1.png'
import rek1 from './reklama1.png'
import rek2 from './reklama2.png'
import rek3 from './reklama3.png'
import rek4 from './reklama4.png'
import rek5 from './reklama5.png'
import rek6 from './reklama6.png'
import sharhs from './sharh.png'
import sharhnext from './sharhnext.png'
import nm1 from './nomer1.png'
import nm2 from './nomer2.png'
import nm3 from './nomer3.png'
import nm4 from './nomer4.png'
import nm5 from './nomer5.png'
import mn from './minus.png'
import pl from './plus.png'
import as from './asesnt.png'


const Intro = () => {
  return (
    <div className='admin2' >
      <div className="intro_people">
      <h1 className='intro_people_title' >Bizning Jamoamiz</h1>
      <div className="intro_people_cards">
        <div className="intro_people_card1">
          <img className='peoplesize' src={peopleimg} alt="" />
        </div>
        <div className="intro_people_card1">
          <img className='peoplesize1' src={peopleimg1} alt="" />
        </div>
        <div className="intro_people_card1">
          <img className='peoplesize1' src={peopleimg2} alt="" />
        </div>
        <div className="intro_people_card1">
          <img className='peoplesize1' src={peopleimg2} alt="" />
        </div>
      </div>
        <img className='nxt1' src={nexts2} alt="" />

      </div>

      <div className="intro_karta">

      <div className="intro_karta_left">
        <img className='karta_style' src={kartas} alt="" />
      </div>
      <div className="intro_karta_right">
        <h1 className='intro_right_titles' >Toshkent</h1>
        <p className='intro_right_pp' >Tasviriy san’at va dizayn sohasida innovatsion yechimlar, yuqori sifatli xizmatlar va ijodiy qo‘llab-quvvatlashni taqdim etamiz. Bizning jamoamiz sizning tasviriy ijodiyatingizni yangi bosqichga olib chiqishga tayyor.</p>
        <button className='intro_right_btnn' >Batafsil</button>
      </div>

      </div>

      <div className="intro_reklama">

        <div className="box1">
          <div className="intro_reklama_cards">
          <h1 className='titles' >Portfoliyamiz</h1>
          <img className='imgs_box' src={rek1} alt="" />
        </div>
        <div className="intro_reklama_cards">
          <img className='imgs_box1' src={rek2} alt="" />
        </div>
        <div className="intro_reklama_cards">
          <img className='imgs_box1' src={rek3} alt="" />
        </div>
        </div>
        <div className="box2">
          <div className="intro_reklama_cards">
          <img className='imgs_box1' src={rek4} alt="" />
        </div>
        <div className="intro_reklama_cards">
          <img className='imgs_box1' src={rek5} alt="" />
        </div>
        <div className="intro_reklama_cards">
          <img className='imgs_box1' src={rek6} alt="" />
        </div>
        </div>

      </div>

      <div className="intro_sharh">

      <h1>Biz Haqimizda Sharhlar </h1>

      <div className="intro_sharh_box">
        <div className="intro_sharh_box_left">
            <img src={sharhs} alt="" />
        </div>
        <div className="intro_sharh_box_right">
          <img className='qvs' src={qavss} alt="" />
          <h1 className='tt' >Tasviriy san’at va dizayn sohasida innovatsion yechimlar, yuqori sifatli xizmatlar va ijodiy qo‘llab-quvvatlashni taqdim etamiz. Bizning jamoamiz sizning tasviriy ijodiyatingizni yangi bosqichga olib chiqishga tayyor.</h1>
          <img className='qvs1' src={qavss1} alt="" />
        </div>
      </div>
          <img className='nxts'  src={sharhnext} alt="" />
      </div>


      <div className="intro_faq">

      <h1>FAQ</h1>

      <div className="bxc">
        <div className="intro_farq_left">
        <div className="intro_farq_left_box">
          <img src={nm1} alt="" />
          <p>Tasviriyoyina.uz qanday xizmatlarni taqdim etadi?</p>
          <img src={mn} alt="" />
        </div>
        <div className="intro_farq_left_box">
          <img src={nm2} alt="" />
          <p>Xizmatlarni qanday buyurtma qilish mumkin?</p>
          <img src={pl} alt="" />
        </div>
        <div className="intro_farq_left_box">
          <img src={nm3} alt="" />
          <p>Xizmatlar uchun narxlar qanday hisoblanadi?</p>
          <img src={pl} alt="" />
        </div>
        <div className="intro_farq_left_box">
          <img src={nm4} alt="" />
          <p>San’at asarlarini yaratishda qanday uslubda ishlaysiz?</p>
          <img src={pl} alt="" />
        </div>
        <div className="intro_farq_left_box">
          <img src={nm5} alt="" />
          <p>Ishlar qancha vaqt davomida tayyorlanadi?</p>
          <img src={pl} alt="" />
        </div>
      </div>
      <div className="intro_farq_right">
        <p>Biz grafik dizayn, san’at asarlari yaratish, raqamli san’at, animatsiya va brendni rivojlantirish bo‘yicha xizmatlar taqdim etamiz.</p>
      </div>

      </div>
      </div>

      <div className="intro_boglanish">
        <h1 className='bg_title' >Biz bilan bog‘laning</h1>
        <div className="boxes1">
          <div className="intro_boglanish_left">
          <form action="">
          <p>Ism</p>
          <input className='inpt' type="text" />
          <p>Email</p>
          <input className='inpt' type="Email" />
          <p>Telefon Raqam</p>
          <input className='inpt' placeholder='+998' type="phone" />
          <p>Xabar</p>
          <input className='mseg'  type="message" /> <br />
          <button className='bg_btn' >Biz Bilan Bog'laning</button>
          </form>
        </div>
        <div className="intro_boglanish_right">
          <img className='asesntstyle' src={as} alt="" />
        </div>
        </div>
      </div>


    </div>
  )
}

export default Intro
