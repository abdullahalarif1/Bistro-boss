import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
// import offerImg from "../../assets/menu/";
import useMenu from "../../hooks/hooks";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div >
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover title="Our Menu" img={menuImg}></Cover>
      {/* main cover */}
      <SectionTitle
        heading={"Don't Miss"}
        headingTitle={"Today's offer"}
      ></SectionTitle>
      {/* offered menu items*/}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu item  */}
      <MenuCategory
        title="Dessert"
        img={dessertImg}
        items={dessert}
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory title="Pizza" img={pizzaImg} items={pizza}></MenuCategory>
      {/* Salad */}
      <MenuCategory title="Salad" img={saladImg} items={salad}></MenuCategory>
      {/* Soup */}
      <MenuCategory title="Soup" img={soupImg} items={soup}></MenuCategory>
    </div>
  );
};

export default Menu;
