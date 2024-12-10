import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>
                This is a description of the product. It is a long description that will be displayed in the.
            </p>
            <p>
                This is another paragraph of the description. It is also a long description that will be displayed in.
            </p>
            </div>
      
    </div>
  )
}

export default DescriptionBox
