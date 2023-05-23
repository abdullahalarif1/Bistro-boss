import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setPopular(popularItems);
      });
  }, []);

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
