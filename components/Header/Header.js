import Link from "next/dist/client/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.nav}>
      <h2 className={styles.h1}>
        <Link href="/">GetaJob</Link>
      </h2>
      <Link href="/api/auth/login">
        <button className={styles.loginBtn} name="login">
          Login
        </button>
      </Link>
    </div>
  );
}
