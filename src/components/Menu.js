import React from "react";

function Menu({ menuData }) {
  return (
    <div className="menus">
      {menuData.map((menu) => {
        const { id, title, img, price, desc } = menu;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4 className="title">{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
