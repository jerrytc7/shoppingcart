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

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <div className="App">

    </div>
  );
}

export default App;
