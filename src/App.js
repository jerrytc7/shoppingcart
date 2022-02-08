import { useState } from "react";

const shopItems = [
  {
    id: 1,
    name: "Potato",
    price: 5
  },
  {
    id: 2,
    name: "Banana",
    price: 4
  },
  {
    id: 3,
    name: "Apple",
    price: 7
  },
  {
    id: 4,
    name: "Orange",
    price: 2
  },
  {
    id: 5,
    name: "Blueberries",
    price: 9
  },
]

/*
cartItems = [
  {
    id: 1,
    count: 3
  },
  {
    id: 2,
    count: 2
  }
]
*/

/*
  cartItems = [

  ]
*/

function App() {
  const [cartItems, setCartItems] = useState([])

  const removeFromCart = (id) => {
    setCartItems(cartItems.map((cartItem)=>{
      if(cartItem.id === id){
        return {
          id: cartItem.id,
          count: cartItem.count - 1
        }
      }else{
        return cartItem
      }
    }).filter((cartItem)=>{
      return cartItem.count > 0
    }))
  }

  const addToCart = (id) => {
    const existingItem = cartItems.some((cartItem)=>{
      return cartItem.id === id
    })
    /*const count = !existingItem ? 1 : existingItem.count + 1
    if(!existingItem){
      count = 1
    }else{
      existingItem.count + 1
    }*/
    setCartItems(!existingItem ? [
      ...cartItems,
      {
        id: id,
        count: 1
      }
    ] : cartItems.map((cartItem)=>{
        if(cartItem.id === id){
          return {
            id: id,
            count: cartItem.count + 1
          }
        }else{
          return cartItem
        }
    }))
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
