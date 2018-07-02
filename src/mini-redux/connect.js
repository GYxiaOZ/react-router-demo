import React from 'react';
import { PropTypes } from 'prop-types';

// mapStateToProps 把store里的状态对象映射成属性,
// mapDispatchToProps 把store里的dispatch映射成属性
let connect = (mapStateToProps, mapDispatchToProps) => Component => {
  class Proxy extends React.Component {
    constructor() {
      super();
      console.log(this.context, mapStateToProps);
      this.state = {}; //mapStateToProps(this.context.store.getState());
    }
    componentWillMount() {
      this.unsubscribe = this.context.store.subscribe(() => {
        this.setState(mapStateToProps(this.context.store.getState()));
      });
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    render() {
      return (
        <Component
          {...this.state}
          {...mapDispatchToProps(this.context.store.dispatch)}
        />
      );
    }
  }
  Proxy.contextTypes = {
    store: PropTypes.object
  };
  return Proxy;
};

export { connect };
