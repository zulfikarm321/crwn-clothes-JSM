import React from 'react';
import './form-input.scss';

function FormInput({ label, ...other }) {
  return (
    <div className="input-field">
      <input className="form-input" {...other} />
      {label && (
        <label
          className={`${other.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
