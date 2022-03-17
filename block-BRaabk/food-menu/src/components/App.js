import React from "react";
import data from "../data.json";
import Items from "./Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
    };
  }

  handleActive = (menu) => {
    this.setState({
      active: menu.toLowerCase(),
    });
  };

  render() {
    let menuTypes = ["All", "Breakfast", "Lunch", "Shakes"];
    let menuItem;
    if (!this.state.active) {
      menuItem = data.reduce((acc, item) => {
        acc = acc.concat(item);
        return acc;
      }, []);
    } else {
      menuItem = data.find((item) => item.category === this.state.active);
      console.log(this.state.active, menuItem);
    }
    return (
      <>
        <h1>Our Menu</h1>
        <hr className="hr" />
        <ul className="flex">
          {menuTypes.map((menu) => (
            <li
              key={menu}
              onClick={() => this.handleActive(menu)}
              className={menu === this.state.active ? "active" : ""}
            >
              {menu}
            </li>
          ))}
        </ul>
        <Items menuItem={menuItem} />
      </>
    );
  }
}

export default App;
