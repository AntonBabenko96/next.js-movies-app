import Link from "next/link";
import Head from "next/head";
import styles from "./Nav.module.css";

export const MainLayout = ({ children, title = "" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next, javascript, react, movies" />
        <meta name="description" content="this is movie app" />
        <meta charSet="utf-8" />
      </Head>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/movies" className={styles.link}>
          Movies
        </Link>
        <Link href="/cart" className={styles.link}>
          Cart
        </Link>
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
};
