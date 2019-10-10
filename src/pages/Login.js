import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setEmail, setIsLoggedIn } from '../redux/actions/userActions';

const Login = ({ dispatch, email, isLoggedIn }) => {
  //const [email, setEmail] = React.useState('');
  //const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const verify = () => {
    if (email === 'email@email.com') {
      dispatch(setIsLoggedIn(true));
    }
  };

  const updateEmail = (newEmail) => {
    if (newEmail.length < 20) {
      dispatch(setEmail(newEmail));
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <div>
        <div>
          <input
            value={email}
            onChange={e => updateEmail(e.target.value)}
          />
        </div>
        <div>
          <button onClick={verify}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  email: state.userReducer.email,
  isLoggedIn: state.userReducer.isLoggedIn,
});

export default connect(mapStateToProps)(Login);
