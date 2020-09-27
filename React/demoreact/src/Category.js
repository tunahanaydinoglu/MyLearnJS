import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";


class Category extends Component {
  state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 2, categoryName: "Condiments" },
      ],
    };
 
  
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              color="danger"
              onClick={() => {this.props.changeCategory(category)} }
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
          {this.props.currentCategory}
        </ListGroup>
      </div>
    );
  }
}

export default Category;