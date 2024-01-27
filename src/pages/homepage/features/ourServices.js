import React from 'react'
import Servicecard from '../../../global/components/service_card'


const OurServices = () => {
  return (
    <div className='ourServices page_width'>
      <h2 className='global_title'>Explore our <span> Services </span> </h2>
     <div className= "card_grid">

     <Servicecard service_img="https://images.pexels.com/photos/4099082/pexels-photo-4099082.jpeg" title= 'AC Duct'/>
     <Servicecard/>
     <Servicecard/>
     <Servicecard/>
      
     </div>
    </div>
  )
}

export default OurServices