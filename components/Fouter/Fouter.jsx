import React from 'react'
import '../Fouter/Fouter.css'
import foutertt from './foutertitle.png'
import aloq from './aloqa.png'

const Fouter = () => {
  return (
    <div className='admin3' >
      <div className="fouter">

        <div className="fouter_box">

          <div className="fouter_card">
          <img src={foutertt} alt="" />
          <h2>Ijod va san’atga bag‘ishlangan platforma, har bir asar va dizaynning orqasida ilhom va kuchli g‘oya turadi.</h2>
          <img src={aloq} alt="" />
          </div>
          <div className="fouter_card">
            <h2>Asosiy</h2>
            <h2>Xizmatlar</h2>
            <h2>Biz Haqimizda</h2>
          </div>
          <div className="fouter_card">
            <h2>+998 99 999 99 99</h2>
            <h2>example@gmail.com</h2>
            <h2>O'zbekiston barcha hududlarda</h2>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Fouter
