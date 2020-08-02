import React from "react";
import "./TextField.css";

const TextField = ({ name, label, type, onChange, placeHolder, value, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name} className="field-label">
      {label}
        <div className="field">
          <input
            type={type}
            name={name}
            className="form-control"
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
          />
            {error && <div className="field-alert">{error}</div>}
        </div>
      </label>
    </div>
  );
};
export default TextField;