import React from "react";

const MenuItem = ({ item }) => {
  console.log(item);
  const { name, image, price, recipe } = item;
  return (
    <div className="flex items-center gap-5 p-2 ">
      <img className="w-20 h-16 rounded-r-xl rounded-b-xl" src={image} alt="" />
      <div>
        <h3 className="uppercase">{name}------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
