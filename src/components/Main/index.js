import React from "react";
import styles from "./index.module.css";
import i18n from "utils/i18n";
import Card from "components/Card";

const Main = () => {
  return (
    <div className={styles.main}>
      <h1>{i18n.t("Introduction")}</h1>
      <Card size="l" />
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
    </div>
  );
};

export default Main;
