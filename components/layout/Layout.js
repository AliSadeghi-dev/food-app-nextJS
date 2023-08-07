import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">FoodApp</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menus">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        Next.js | FoodApp Project &copy;
      </footer>
    </>
  );
}

export default Layout;
