import { useState } from "react";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

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

function App() {
  const [cartItems, setCartItems] = useState([])

  const removeFromCart = (id) => {
    setCartItems(cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          id: cartItem.id,
          count: cartItem.count - 1
        }
      } else {
        return cartItem
      }
    }).filter((cartItem) => {
      return cartItem.count > 0
    }))
  }

  const addToCart = (id) => {
    const existingItem = cartItems.some((cartItem) => {
      return cartItem.id === id
    })
    setCartItems(!existingItem ? [
      ...cartItems,
      {
        id: id,
        count: 1
      }
    ] : cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          id: id,
          count: cartItem.count + 1
        }
      } else {
        return cartItem
      }
    }))
  }

  return (
    <div className="App">
      <Shop items={shopItems} onAdd={addToCart} onRemove={removeFromCart} />
      <Cart items={cartItems} shopItems={shopItems} />
    </div>
  );
}

export default App;
