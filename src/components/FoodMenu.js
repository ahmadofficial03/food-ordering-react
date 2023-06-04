import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import { menu } from "../Data";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

function FoodMenu() {
  const [menuData, setMenuData] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuData(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuData(newItems);
  };

  return (
    <main className="section-food-menu">
      <div className="container">
        <section className="menu-section">
          <div className="title">
            <h3 className="section-heading">our menu</h3>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu menuData={menuData} />
        </section>
      </div>
    </main>
  );
}

export default FoodMenu;
