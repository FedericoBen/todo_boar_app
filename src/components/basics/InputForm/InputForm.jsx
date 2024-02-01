import { useRef, useState } from "react";
import styles from "./InputForm.module.scss";

const InputForm = ({
  name,
  value,
  onChange,
  placeholder = "Escribir",
  type = "text",
  style = {},
  placeholderClass,
  inputClass,
  disable=false
}) => {
  const inputRef = useRef(null);

  const onChangeValue = (e) => {
    if(disable) return
    const value = e.target.value;
    let newValue = "";
    if (type == "number") {
      newValue = value.replace(/[^0-9]/g, "");
    }
    inputRef.current.value = newValue || value;
    onChange(value);
  };

  return (
    <label
      style={{ ...style }}
      className={styles.container_input}
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      <input
        className={`${inputClass}`}
        placeholder=""
        ref={inputRef}
        name={name}
        value={value}
        onChange={onChangeValue}
        type={type}
      />
      <span className={`${styles.placeholder} ${placeholderClass}`}>
        {placeholder}
      </span>
    </label>
  );
};

export default InputForm;
