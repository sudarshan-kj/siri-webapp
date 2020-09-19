import React from "react";
import styles from "./index.module.css";
import i18n from "utils/i18n";
import Box from "components/generic/Box";
import girlimage from "assets/avatars/girl.jpg";

const Main = () => {
  return (
    <div className={styles.main}>
      <Box round bgColor="#B22222" radius="100px">
        <h2>{i18n.t("Hello")}</h2>
      </Box>
      <h1>{i18n.t("Introduction")}</h1>
      <article>
        <section>
          <h3>Section 1</h3>
          <p>This is section 1 paragraph</p>
        </section>
        <section>
          <h3>Section 2</h3>
          <p>This is section 2 paragraph</p>
        </section>
      </article>
      <aside>Quick links come here</aside>
      <Box
        style={{
          marginTop: "50%",
        }}
        bgColor="#B22222"
        radius="150px"
        fill
      >
        <img src={girlimage} alt="girl" />
      </Box>
    </div>
  );
};

export default Main;
