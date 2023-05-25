import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../hooks/hooks";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  
  return (
    <section className="mb-10">
      <SectionTitle
        heading="From Our Menu"
        headingTitle="Popular Item"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 my-6">
        {popular.map((item) => (
          <MenuItem item={item} key={item._id}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
