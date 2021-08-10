import React from "react";
import styles from "./index.module.css";
import i18n from "utils/i18n";
import Box from "components/generic/Box";
import drVeeren from "assets/avatars/drVeerendraHeggade.jpg";
import tenderDocument from "assets/files/tenderDocument.docx";
import hemavathiHeggade from "assets/avatars/hemavathiheggade.jpg";
import ContactUs from "components/ContactUs";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import { ReactComponent as FranchiseIcon } from "assets/icons/categories/franchise.svg";
import { ReactComponent as PlayIcon } from "assets/icons/common/play-button.svg";
import { ReactComponent as CatalogIcon } from "assets/icons/common/catalog.svg";
import { ReactComponent as ContactUsIcon } from "assets/icons/common/contact-us.svg";
import useAutoScroll from "hooks/useAutoScroll";
import useSlideIn from "hooks/useSlideIn";

const Main = () => {
  const [loading, setLoading] = React.useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };

  const [founderRef, slideIn] = useSlideIn();
  useAutoScroll();

  return (
    <>
      <a className={styles.downloadFile} href={tenderDocument} target="_blank">
        Click here to Download Jackfruit Cluster Tender Document
      </a>
      <div className={styles.main}>
        <div className={styles.introContainer}>
          <h1>{i18n.t("intro_heading")}</h1>
          <p>
            <Trans i18nKey="content_para_0">
              <strong />
              <i />
            </Trans>
          </p>
          <p>
            <Trans i18nKey="content_para_1">
              <strong />
              <i />
            </Trans>
          </p>
        </div>
        <div>
          <article>
            <section>
              <p>
                <Trans i18nKey="content_para_2">
                  <strong />
                  <i />
                </Trans>
              </p>
            </section>
            <Link to="/#video">
              <PlayIcon className={styles.linkIcon} />
              {i18n.t("watch_video")}
            </Link>
            <Link to="/products">
              <CatalogIcon className={styles.linkIcon} />
              {i18n.t("check_product_range")}
            </Link>
          </article>
          <div className={styles.horizontalDivider}>
            <hr />
          </div>
          <section>
            <div className={` ${styles.iconContainer}`}>
              <FranchiseIcon className={styles.franchiseIcon} />
              <h3>{i18n.t("franchise_call_out")}</h3>
            </div>
            <p>
              <Trans i18nKey="content_para_3">
                <strong />
                <i />
              </Trans>
            </p>
            <Link to="/#contact">
              <ContactUsIcon className={styles.linkIcon} />
              {i18n.t("contact_us")}
            </Link>
          </section>
        </div>
        <div className={styles.horizontalDivider}>
          <hr />
        </div>
        <section className={styles.sectionContainer}>
          <h1>{i18n.t("Founders")}</h1>
          <div
            ref={founderRef}
            className={`${styles.foundersAvatarList} ${styles[slideIn]}`}
          >
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
              <p>{i18n.t("dr_d_veerendra_heggade")}</p>
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
              <p>
                <p>{i18n.t("smt_hemavathi_heggade")}</p>
              </p>
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
    </>
  );
};

export default Main;
