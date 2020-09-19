import React from "react";
import styles from "./index.module.css";
import i18n from "utils/i18n";
import RoundContent from "components/generic/RoundContent";

const Main = () => {
  return (
    <div className={styles.main}>
      <RoundContent bgColor="#B22222" radius="100px">
        <h2>{i18n.t("Hello")}</h2>
      </RoundContent>
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
      <RoundContent
        style={{ marginTop: "50%" }}
        bgColor="#B22222"
        radius="150px"
      >
        <h2>{i18n.t("Sudarshan")}</h2>
      </RoundContent>
    </div>
  );
};

export default Main;
