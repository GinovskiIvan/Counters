import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App constructor");
  }
  componentDidMount() {
    // Ajax call
    console.log("app mounted");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("app updated");
    console.log(prevState);
  }
  componentWillUnmount() {
    console.log("App unmounted");
  }
  render() {
    console.log("render");
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = e => {
    const counters = this.state.counters.filter(c => c.id != e);
    this.setState({ counters });
  };
  handleIncrement = e => {
    const counters = [...this.state.counters];
    counters[e - 1].value++;
    this.setState(counters);
  };
}

export default App;
