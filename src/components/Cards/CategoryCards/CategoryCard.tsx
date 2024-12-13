import React from "react";

type CategoryCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <>
      <div className="card__category">
        <h3 className="card__category__title">{title}</h3>
        <img src={imageUrl} alt={title} className="card__category__img" />
        <p className="card__category__description">{description}</p>
      </div>
    </>
  );
};

export default CategoryCard;
