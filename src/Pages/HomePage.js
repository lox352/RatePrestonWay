import React from "react";

import CardLayout from "../Components/Layout/CardLayout.js"
import User from "../Components/Cards/User.js"
import RatingCategory from "../Components/Cards/RatingCategory.js"
import CreateNewCategory from "../Components/Cards/CreateNewCategory.js"

const HomePage = () => {
  const ratingCategories = ['waterfalls', 'films']
  const categoryCards = ratingCategories.map(category => <RatingCategory key={category} category={category}></RatingCategory>)

  return (
    <CardLayout>
      <User />
      {categoryCards}
      <CreateNewCategory />
    </CardLayout>
  );
}


export default HomePage;