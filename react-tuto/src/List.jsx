import React, { Component } from 'react';

export class List extends Component {

  renderList() {
    const numbers = [1, 2, 3, 4, 5];
    return numbers.map(number => {
      return <li>{number}</li>
    })
  }

  render() {

    return (
      <div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}