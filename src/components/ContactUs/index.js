import React from "react";
import styles from "./contact.module.css";
import Card from "components/Card";
import { ReactComponent as PhoneIcon } from "assets/phone.svg";
import { ReactComponent as EmailIcon } from "assets/email.svg";
import { ReactComponent as LocationIcon } from "assets/location.svg";
import i18n from "utils/i18n";
import Social from "components/Social";

const ItemsList = [
  { icon: PhoneIcon, content: i18n.t("9845587949") },
  { icon: EmailIcon, content: i18n.t("mdsiri@gmail.com") },
  {
    icon: LocationIcon,
    content: i18n.t("#134, 2nd main, 3rd cross, Upkar Layout"),
  },
];

const ContactUs = () => {
  return (
    <div className={styles.container}>
      {ItemsList.map((item, id) => (
        <div className={styles.itemContainer}>
          <item.icon className={styles.icon} />
          {item.content}
        </div>
      ))}
      <div className={styles.mapContainer}>
        <Card style={{ marginTop: "2rem" }} size="max" noShadow>
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
      <div className={styles.socialContainer}>
        <p>Connect with us </p>
        <Social />
      </div>
    </div>
  );
};

export default ContactUs;
