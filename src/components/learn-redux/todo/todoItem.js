// @flow
import React, { Component } from 'react';

type Props = {
  item: number,
  index: number,
  clickHandler: Function
};

class TodoItem extends Component<Props> {
  render() {
    const { item, index, clickHandler } = this.props;
    return (
      <div>
        <li>
          {item}
          <button
            onClick={() => {
              clickHandler(index);
            }}
          >
            x
          </button>
        </li>
      </div>
    );
  }
}

export default TodoItem;
