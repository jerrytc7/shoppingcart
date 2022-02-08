import React from "react";

function Cart({ items, shopItems }) {
    const getItemName = (id) => {
        return shopItems.find((item) => {
            return item.id === id
        }).name
    }

  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <div>
              Name: {getItemName(item.id)}
              Count: {item.count}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
