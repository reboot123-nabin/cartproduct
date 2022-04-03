import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";

// import Router from "./Routes/Router";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import data from "./components/Data";
import SignUp from './components/SignUp'
import Products from './Products/Products'
import Cart from './components/Cart';
import Header from './Other/Header';
import Cart2 from './CartComponents/Cart2';


const App = () => {
  const {productItems}=data;
  const[cartItems,setCartItems]=useState([]);

  const[thanks,setThanks]=useState('');
  const handleAddProduct=(product)=>{
    const ProductExist=cartItems.find((item)=>item.id===product.id);
    if(ProductExist){
      setCartItems(
        cartItems.map((item)=>
        item.id===product.id?
      {...ProductExist,quantity:ProductExist.quantity+1}:item)
      );
      }
      else{
          setCartItems([...cartItems,{...product,quantity:1}]);  
      }
    }


    const handleRemoveProduct=(product)=>{
      const ProductExist=cartItems.find((item)=>item.id===product.id);
      if(ProductExist.quantity===1){
       setCartItems(cartItems.filter((item)=>item.id!==product.id)); 
      }
      else{
        setCartItems(
          cartItems.map((item)=>item.id===product.id?{...ProductExist,quantity:ProductExist.quantity-1}:item)
        )
      }
    }
    const handleCartClearance=()=>{
      setCartItems([]);
    }

    // useEffect=(()=>{
    //   axios.get('http://localhost:90/cart/insert', {
    //     headers: {
    //         "Content-Type": "application/json",
    //         'Authorization': `Bearer ${localStorage.getItem('token')}`
    //     },
    // })
    //     .then(res => {
    //       setThanks(res.data.productItems);
    //         console.log(res.data);
        
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });

    // })

  return (
    <div>

<div>
<BrowserRouter>
<Header cartItems={cartItems}/>
      <Routes>
     
      {/* <Router productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} /> */}
      <Route path="/" exact element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}>
                
                </Route>
                <Route path="/signup" exact element={ <SignUp/>}>
                 
                </Route>
                <Route path="/cart" exact element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}>
                <Route path="/cart2" element={<Cart2/>}/>  
                </Route>
        
     
     
      </Routes>
      </BrowserRouter>
    </div>
    </div>
  )
}

export default App