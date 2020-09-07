import React from "react";
import styles from "./index.module.css";
const Navigation = ({ list }) => (
  <nav className={styles.nav}>
    <ul>
      {list.map((item, id) => (
        <li key={id}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://google.com"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>

    <select>
      <option value="" selected="selected">
        Select
      </option>
      {list.map((id, item) => (
        <option value="/collections/all">{item}</option>
      ))}
    </select>
  </nav>
);

export default Navigation;
