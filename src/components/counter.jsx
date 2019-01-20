import React, { Component } from "react";

class Counter extends Component {
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //     else {
  //       return (
  //         <ul>
  //           {this.state.tags.map(tag => (
  //             <li key={tag}>{tag}</li>
  //           ))}
  //         </ul>
  //       );
  //     }
  //   }
  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  render() {
    console.log("counter rendered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge badge-";
    if (this.props.counter.value === 0) {
      classes += "primary";
    } else classes += "warning";
    return classes;
  }
}

export default Counter;
