import React from "react";
import styles from "./index.module.css";
import i18n from "utils/i18n";
import Box from "components/generic/Box";
import drVeeren from "assets/avatars/drVeerendraHeggade.jpg";
import hemavathiHeggade from "assets/avatars/hemavathiheggade.jpg";
import ContactUs from "components/ContactUs";
import { Link } from "react-router-dom";
import useAutoScroll from "hooks/useAutoScroll";

const Main = () => {
  const [loading, setLoading] = React.useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  useAutoScroll();

  return (
    <div className={styles.main}>
      <div className={styles.introContainer}>
        <h1>{i18n.t("Introduction")}</h1>
      </div>
      <div>
        <article>
          <section>
            <Link to="/#video">Click to watch a short video</Link>

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
      <div className={styles.horizontalDivider}>
        <hr />
      </div>
      <section className={styles.sectionContainer}>
        <h1>{i18n.t("Founders")}</h1>
        <div className={styles.foundersAvatarList}>
          <div className={styles.founderContainer}>
            <Box
              bgColor="rgb(178, 34, 34,0.5)"
              radius="175px"
              round
              showLoading
              isLoading={loading}
            >
              <img
                style={{
                  display: loading ? "none" : "block",
                }}
                src={drVeeren}
                alt="Dr Veerendra Heggade"
                onLoad={imageLoaded}
              />
            </Box>
            <p>Dr D Veerendra Heggade</p>
          </div>
          <div className={styles.founderContainer}>
            <Box
              bgColor="rgb(178, 34, 34,0.5)"
              radius="175px"
              round
              showLoading
              isLoading={loading}
            >
              <img
                style={{
                  display: loading ? "none" : "block",
                }}
                src={hemavathiHeggade}
                alt="Hemavathi Heggade"
                onLoad={imageLoaded}
              />
            </Box>
            <p>Smt. Hemavathi Heggade</p>
          </div>
        </div>
      </section>
      <div className={styles.horizontalDivider}>
        <hr />
      </div>
      <div id="contact">
        <section className={styles.sectionContainer}>
          <h1 className={styles.contactUsHeader}>{i18n.t("Contact")}</h1>
          <div className={styles.contactContentContainer}>
            <ContactUs />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
