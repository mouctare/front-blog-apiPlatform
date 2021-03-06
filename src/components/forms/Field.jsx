import React from "react";

// Ce sont les props issus du composant parent

// - name
// - label
// - value
// - onChange
// - placeholder
// - type
// - error

const Field = ({
  name,
  label,
  value,
  onChange,
  placeholder = "",
  type,
  error = "",
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder || label}
      name={name}
      id={name}
      className={"form-control" + (error && " is-invalid")}
    />
    {error && <p className="invalid-feedback">{error}</p>}
  </div>
);

export default Field;
