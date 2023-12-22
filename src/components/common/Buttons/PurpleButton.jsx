import React from "react";
import styles from "./PurpleButton.module.css";

export default function PurpleButton(props) {
  return <button className={styles.purpleButton}>{props.text}</button>;
}
