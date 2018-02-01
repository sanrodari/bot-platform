import { connect } from 'react-redux';

import * as counterActions from '../ducks/counter';

function mapStateToProps(state) {
  return {
    count: state.counter,
  };
}

const mapDispatchToProps = {
  increase: counterActions.increase,
  decrease: counterActions.decrease,
};

export default connect(mapStateToProps, mapDispatchToProps);
