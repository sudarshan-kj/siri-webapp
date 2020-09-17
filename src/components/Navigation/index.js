import React from "react";
import styles from "./index.module.css";
import { ReactComponent as MenuIcon } from "assets/dropdown.svg";
import { Link } from "react-scroll";

const Navigation = ({ list }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {list.map((item, id) => (
          <li key={id}>
            <Link
              activeClass="active"
              to={item.link}
              smooth={true}
              offset={50}
              duration={300}
            >
              {item.name}
            </Link>
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
