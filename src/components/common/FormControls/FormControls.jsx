import React, { useEffect, useRef } from "react";
import styles from "./FormControls.module.css";
import { Field } from "redux-form";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [input.value]);

  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ""}`}>
      <div>
        <textarea
          {...input}
          {...props}
          ref={textareaRef}
          className={styles.autoResizeTextarea}
        ></textarea>
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, inputClassName, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        <input {...input} className={inputClassName} {...props}></input>
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => {
  return (
    <div>
      <Field
        validate={validators}
        placeholder={placeholder}
        name={name}
        component={component}
        {...props}
      />
      {text}
    </div>
  );
};
