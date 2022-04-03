import React from 'react'
import { Route} from "react-router-dom";
import SignUp from '../components/SignUp'
import Products from '../Products/Products'
import Cart from '../components/Cart';
// import Header from '../Other/Header';
const Router = ({productItems,cartItems,handleAddProduct,handleRemoveProduct}) => {
  return (
    <div>
           {/* <Header/> */}
            <Route path="/" exact element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}>
                
            </Route>
            <Route path="/signup" exact element={ <SignUp/>}>
             
            </Route>
            <Route path="/cart" exact element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>}>
              
            </Route>
    
       

    </div>
  )
}

export default Router