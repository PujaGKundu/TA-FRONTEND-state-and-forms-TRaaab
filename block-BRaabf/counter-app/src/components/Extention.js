import React from "react";

class Extension extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 0,
      max: 15,
    };
  }

  handleIncrement = () => {
    if (this.state.step === 0) {
      if (this.state.max !== this.state.count) {
        this.setState({
          count: this.state.count + 1,
        });
      } else if (this.state.max < this.state.count) {
        this.setState({
          count: this.state.count,
        });
      }
    } else {
      if (this.state.max !== this.state.count) {
        this.setState({
          count: this.state.count + this.state.step,
        });
      } else if (this.state.max < this.state.count) {
        this.setState({
          count: this.state.count,
        });
      }
    }
  };

  handleDecrement = () => {
    if (this.state.step === 0) {
      this.setState({
        count: this.state.count - 1,
      });
    } else {
      this.setState({
        count: this.state.count - this.state.step,
      });
    }
  };

  handleReset = () => {
    this.setState({
      count: 0,
      step: 0,
      max: 15,
    });
  };

  render() {
    let number = [5, 10, 15];
    let max = [15, 100, 200];
    return (
      <center>
        <h2>Extention of the app</h2>
        <h2>{this.state.count}</h2>

        <h3>Step</h3>

        {number.map((num) => (
          <button
            key={num}
            className={this.state.step === num ? "active" : "steps"}
            onClick={() => {
              this.setState({
                step: num,
              });
            }}
          >
            {num}
          </button>
        ))}

        <h3>Max Value</h3>

        {max.map((m) => (
          <button
            key={m}
            className={this.state.max === m ? "active" : "steps"}
            onClick={() => {
              this.setState({
                max: m,
              });
            }}
          >
            {m}
          </button>
        ))}

        <br />

        <button key="inc" className="counter" onClick={this.handleIncrement}>
          Increment
        </button>
        <button key="dec" className="counter" onClick={this.handleDecrement}>
          Decrement
        </button>
        <button key="reset" className="counter" onClick={this.handleReset}>
          Reset
        </button>
      </center>
    );
  }
}

export default Extension;
