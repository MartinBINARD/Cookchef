import styles from "./HeaderMenu.module.scss";

export default function HeaderMenu() {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
      <li>Whislit</li>
      <li>Connexion</li>
    </ul>
  );
}