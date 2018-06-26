import React from 'react';
import { createStore } from '../../redux';
import counter from './reducers/counter';

let store = createStore(counter);

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

// mapStateToProps 把store里的状态对象映射成属性
let connect = mapStateToProps => Component => {
  return class Proxy extends React.Component {
    constructor() {
      super();
      this.state = mapStateToProps(store.getState());
    }
    componentDidMount() {
      this.unsubscribe = store.subscribe(() => {
        this.setState(mapStateToProps(store.getState()));
      });
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    render() {
      return <Component {...this.state} />;
    }
  };
};
let mapStateToProps = state => ({
  number: state.number
});

export default connect(mapStateToProps)(Counter);
