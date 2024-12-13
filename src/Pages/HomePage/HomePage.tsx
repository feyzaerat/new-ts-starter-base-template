import React from "react";
import "./homePage.css";
import { CategoryCard } from "../../components";
import { categories } from "../../data/categoriesData";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="home-layout padding-05 d-flex f-direction-column justify-center align-i-center">
      <div className="header-layout">
        <p className="first-head header-light-mode">PORTFOLIOS</p>
      </div>
      <div className="category__card__layout d-grid grid-column-two">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            description={category.description}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
