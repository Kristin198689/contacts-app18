import React from "react";
import snapchatLogo from "../../assets/snapchat.png"; // Предполагается, что логотипы находятся в папке assets
import facebookLogo from "../../assets/facebook.png";
import xLogo from "../../assets/x.png";
import styles from "./Contacts.module.css"; // Импорт стилей

const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.contactsInfo}>
        <h1>Контакты</h1>
        <ul>
          <li>Телефон: +1 234 567 890</li>
          <li>Email: example@example.com</li>
        </ul>
        <form className={styles.contactForm}>
          <input type="email" placeholder="Ваш Email" required />
          <input type="text" placeholder="Ваше Имя" required />
          <textarea placeholder="Ваше Сообщение" required></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
      <div className={styles.socialLinks}>
        <p>Найдите нас на:</p>
        <a href="https://www.snapchat.com">
          <img src={snapchatLogo} alt="Snapchat" />
        </a>
        <a href="https://www.facebook.com">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://www.x.com">
          <img src={xLogo} alt="X" />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
