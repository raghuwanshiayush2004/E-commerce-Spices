import React, { useContext , useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'



const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [isClicked, setIsClicked] = useState(false);

    const handleAddToCart = (id) => {
        addToCart(id);
        setIsClicked(true); // Set button clicked state to true
        setTimeout(() => setIsClicked(false), 300); // Reset after 300ms (duration of transition)
    };

    const [mainImage, setMainImage] = useState(product.image);

    

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
      <div className='productdisplay-img-list'>
        {/* Thumbnail images */}
        <img src={product.image} alt='' onClick={() => setMainImage(product.image)} />
        <img src={product.image1} alt='' onClick={() => setMainImage(product.image1)} />
        <img src={product.image2} alt='' onClick={() => setMainImage(product.image2)} />
        <img src={product.image} alt='' onClick={() => setMainImage(product.image)} />
      </div>

      <div className='productdisplay-img'>
        {/* Main image */}
        <img className='productdisplay-main-img' src={mainImage} alt="" />
      </div>
    </div>
      <div className='productdisplay-right'>
           <h1>{product.name}</h1>
           <div className="productdisplay-right-stars">
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_dull_icon} alt=''/>
            <p>(122)</p>
            </div> 
            <div className='productdisplay-right-prices'>
                <p className='productdisplay-right-prices-old'>Rs{product.old_price}</p>
                <p className='productdisplay-right-prices-new'>Rs{product.new_price}</p>
            </div>
            <div className='productdisplay-right-description'>

            </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div id='s'>50gm</div>
                    <div id='m'>100gm</div>
                    <div id='l'>200gm</div>
                    <div id='xl'>500gm</div>
                    <div id='xxl'>1kg</div>
                </div>
            </div>
            <button
            className={`add-to-cart-button ${isClicked ? 'clicked' : ''}`}
            onClick={() => handleAddToCart(product.id)}>
            Add to Cart
        </button>
            <p className='productdisplay-right-category'><span>Category :</span>Salt Variants</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Quality , Quantity</p>
      </div>
    </div>
  )
}

export default ProductDisplay
