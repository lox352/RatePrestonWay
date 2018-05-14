import React, { Component } from "react";

import { firestore } from "../Firebase/Firebase.js"

import CardLayout from "../Components/Layout/CardLayout.js"
import User from "../Components/Cards/User.js"
import RatingCategory from "../Components/Cards/RatingCategory.js"
import CreateNewCategory from "../Components/Cards/CreateNewCategory.js"

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { ratingCategories: [] };
  }

  componentDidMount() {
    this.unsubscribe = firestore.collection("Rating Categories")
      .onSnapshot((snapshot) => {
        let array = [];
        snapshot.forEach(doc => array.push(doc.data()));
        console.log(array);
        this.setState({
          ratingCategories: array
        });
      }, (error) => this.setState({ ratingCategories: [] }));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const categoryCards = this.state.ratingCategories
      .map(category => <RatingCategory key={category.ItemName} category={category}></RatingCategory>)

    return (
      <CardLayout>
        <User />
        {categoryCards}
        <CreateNewCategory />
      </CardLayout >
    );
  }
}


export default HomePage;

// *** Use something like this to get data from firestore ***
// componentDidMount() {
//   fetchPosts().then(response => {
//     this.setState({
//       posts: response.posts
//     });
//   });

//   fetchComments().then(response => {
//     this.setState({
//       comments: response.comments
//     });
//   });
// }