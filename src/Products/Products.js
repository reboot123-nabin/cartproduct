import React from 'react'
import './Product.css';
const Products = ({productItems,handleAddProduct}) => {
  return (
    <div>
      <div className="products">
        {productItems.map((productItem)=>(
          <div className='card'>
              <div>
                <img className="product-image" src={productItem.image} alt={productItem.name} />
                </div>
                <div>
                  <h3 className="product-name">{productItem.name}</h3>
                  
                </div>
                <div>
                  <div className="product-price">${productItem.price}</div>
                  {productItem.desc}
                </div>
                <div>
                  <button className='product-add-button' onClick={()=>handleAddProduct(productItem)}>Add to cart</button>
                  </div>
            </div>
        ))}
      </div>


    </div>
  )
}

export default Products