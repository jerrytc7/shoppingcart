import React from "react";

function ShopItem( {item, onAdd, onRemove} ) {
  return (
    <div>
      <div>
        Name: {item.name}
        <button onClick={onAdd}>+</button>
        <button onClick={() => onRemove(item.id)}>-</button>
      </div>
    </div>
  );
}

export default ShopItem;
