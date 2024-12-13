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
      <div className="card__category d-flex f-direction-column gap-05 padding-05">
        <h3 className="card__category__title sub-head sub-head-light-mode">{title}</h3>
        <img src={imageUrl} alt={title} className="card__category__img rounded-card w100" />
        <p className="card__category__description text text-dark-mode">{description}</p>
      </div>
    </>
  );
};

export default CategoryCard;
