import React from 'react';
import PropTypes from 'prop-types';

export default function Counter({ count, increase, decrease }) {
  return (
    <div>
      <div>
        <span className="bold">Count:</span> {count}
      </div>
      <button onClick={increase} className="p1">
        Increase
      </button>
      <button onClick={decrease} className="p1">
        Decrease
      </button>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};
