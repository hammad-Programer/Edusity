import React from 'react'
import "./Campus.css"
import Image_1 from "../../assets/gallery-1.png"
import Image_2 from "../../assets/gallery-2.png"
import Image_3 from "../../assets/gallery-3.png"
import Image_4 from "../../assets/gallery-4.png"
import White_arrow from "../../assets/white-arrow.png"

const Campus = () => {
  return (
    <div className="campus">
        <div className="gallary">
            <img src={Image_1} alt="" />
            <img src={Image_2} alt="" />
            <img src={Image_3} alt="" />
            <img src={Image_4} alt="" />
        </div>
        <button className='btn dark-btn'>See More Here <img src={White_arrow} alt=""  /></button>

    </div>
  )
}

export default Campus