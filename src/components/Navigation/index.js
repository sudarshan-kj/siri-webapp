import React from "react";
import styles from "./index.module.css";
import { ReactComponent as MenuIcon } from "assets/menu.svg";
const Navigation = ({ list }) => {
  return (
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
      <div className={styles.dropdown}>
        <MenuIcon className={styles.dropbtn} />
        <div className={styles.dropdownContent}>
          {list.map((item, id) => (
            <a rel="noopener noreferrer" href={item.link}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
