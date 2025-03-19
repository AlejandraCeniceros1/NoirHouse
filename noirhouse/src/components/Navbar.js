import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src="/imago.svg" alt="Noir House Logo" width={40} height={40} />
        <span className={styles.logoText}>NOIR · HOUSE</span>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/models">Modelos</Link>
        </li>
        <li>
          <Link href="/about">Nosotros</Link>
        </li>
      </ul>
      <div className={styles.authButtons}>
        <Link href="/login" className={styles.login}>Log In</Link>
        <Link href="/join" className={styles.join}>Join</Link>
      </div>
    </nav>
  );
}
