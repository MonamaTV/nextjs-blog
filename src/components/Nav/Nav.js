import styles from "./Nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <h3>
          <Link href="/">TadBlog.</Link>
        </h3>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
