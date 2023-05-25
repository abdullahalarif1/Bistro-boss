import React from "react";
import MenuItem from "../../Shared/MenuItem";
import Cover from "../../Shared/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div>
      {img && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 mt-7 mb-5">
        {items.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline mb-16 border-0 border-b-4 mt-2">
         Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
