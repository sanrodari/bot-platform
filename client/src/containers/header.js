import { connect } from 'react-redux';

import { logout as handleLogout } from '../ducks/login';

function mapStateToProps({ login: { isAuthenticated } }) {
  return {
    isAuthenticated,
  };
}

export default connect(mapStateToProps, { handleLogout });

