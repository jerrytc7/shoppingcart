import React from "react";
import ShopItem from "./ShopItem";
// props = {x, y, z, etc}
function Shop({ items, onAdd, onRemove }) {
  return (
    <div>
      <h1>Shop Items:</h1>
      <div>
        {items.map((item, index) => {
          return (
            <ShopItem
              item={item}
              key={index}
              onAdd={() => onAdd(item.id)}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
