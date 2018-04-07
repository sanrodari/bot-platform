import React from 'react';

export default function Input(field) {
  const {
    input, meta: { touched, error, warning }, type, placeholder, disabled,
  } = field;

  return (
    <div className="col-12 mb2">
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className="border-box input"
      />
      {touched && (
        (error && <p className="absolute height2 red my0 h5">{error}</p>)
        || (warning && <p className="absolute height2 yellow my0 h5">{warning}</p>)
      )}
    </div>
  );
}
