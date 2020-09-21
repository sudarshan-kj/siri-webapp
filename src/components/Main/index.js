import React from "react";
import styles from "./index.module.css";
import i18n from "utils/i18n";
import { Element } from "react-scroll";
import Box from "components/generic/Box";
import drVeeren from "assets/avatars/drVeeren.jpg";
import hemavathiHeggade from "assets/avatars/hemavathiheggade.jpg";
import Card from "components/Card";

const Main = () => {
  const [loading, setLoading] = React.useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <Element name="aboutContainer" className={styles.main}>
      <div className={styles.introContainer}>
        <Box round bgColor="#B22222" radius="100px">
          <h2>{i18n.t("Hello")}</h2>
        </Box>
        <h1>{i18n.t("Introduction")}</h1>
      </div>
      <div>
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
      <div className={styles.foundersListContainer}>
        <h1>{i18n.t("Founders")}</h1>
        <div className={styles.foundersAvatarList}>
          <div className={styles.founderContainer}>
            <Box
              bgColor="rgb(178, 34, 34,0.5)"
              radius="100px"
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
              radius="100px"
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
            <p>Hemavathi Heggade</p>
          </div>
        </div>
      </div>

      <div className={styles.contactUsContainer}>
        <hr />
        <h1 className={styles.contactUsHeader}>{i18n.t("Contact")}</h1>
        <div className={styles.cardContainer}>
          <Card style={{ marginTop: "5rem" }} size="xl">
            <iframe
              title="G Maps Siri Location"
              className={styles.frame}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7775.3037460087935!2d75.3139384!3d12.994104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3830e430a3619d9c!2sSIRI%20Dharmasthala%20Gramodhyoga%20Samsthe!5e0!3m2!1sen!2sin!4v1600696755942!5m2!1sen!2sin"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </Card>
        </div>
      </div>
    </Element>
  );
};

export default Main;
