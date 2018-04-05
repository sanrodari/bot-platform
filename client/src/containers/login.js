import { connect } from 'react-redux';

import { login } from '../ducks/user';

function mapStateToProps({ user }) {
  return {
    user,
  };
}

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps);
