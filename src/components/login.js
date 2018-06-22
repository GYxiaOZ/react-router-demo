import React from 'react';
import store from 'store';

// export default class Login extends Component {
//   handleClick = () => {
//     store.set('login', true);
//     this.props.history.push('/profile');
//   };
//   render() {
//     return (
//       <button className="btn btn-primary" onClick={this.handleClick}>
//         登录
//       </button>
//     );
//   }
// }
const Login = props => (
  <button
    className="btn btn-primary"
    onClick={() => {
      store.set('login', true);
      props.history.push(props.location.state.from);
    }}
  >
    登录
  </button>
);

export default Login;
