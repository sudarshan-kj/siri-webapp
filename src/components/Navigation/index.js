import React from "react";
import styles from "./index.module.css";
const Navigation = ({ list }) => (
  <nav className={styles.nav}>
    <ul>
      {list.map((item, id) => (
        <li key={id}>
          <a rel="noopener noreferrer" href={item.link}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
