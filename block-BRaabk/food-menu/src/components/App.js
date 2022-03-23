import React from "react";
import data from "../data.json";
import Items from "./Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "breakfast",
    };
  }

  handleActive = (menu) => {
    this.setState({
      active: menu,
    });
  };

  render() {
    let menuItem = data.reduce((acc, item) => {
      acc = acc.concat(item);
      return acc;
    }, []);

    return (
      <>
        <h1>Our Menu</h1>
        <hr className="hr" />
        <ul className="flex">
          {data.map((menu) => (
            <li
              key={menu.id}
              onClick={() => this.handleActive(menu)}
              className={menu === this.state.active ? "active" : ""}
            >
              {menu.category.toUpperCase()}
            </li>
          ))}
        </ul>
        <Items menuItem={menuItem} />
      </>
    );
  }
}

export default App;
