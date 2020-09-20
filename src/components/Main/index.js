import React from "react";
import styles from "./index.module.css";
import i18n from "utils/i18n";
import { Element } from "react-scroll";
import Box from "components/generic/Box";
import girlimage from "assets/avatars/girl.jpg";

const Main = () => {
  const [loading, setLoading] = React.useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <Element name="aboutContainer" className={styles.main}>
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
        bgColor="rgb(178, 34, 34,0.5)"
        radius="120px"
        round
        showLoading
        isLoading={loading}
      >
        <img
          style={{
            display: loading ? "none" : "block",
          }}
          src={girlimage}
          alt="girlImage"
          onLoad={imageLoaded}
        />
      </Box>
    </Element>
  );
};

export default Main;
