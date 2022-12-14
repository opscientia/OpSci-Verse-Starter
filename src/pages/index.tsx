import { checkCookies, getCookie, getCookies } from "cookies-next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/api/orcid">Login with ORCID</Link>
      <Link href="/login">Login page</Link>

    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    const cookieExists = getCookie("token", { req, res });
    console.log("cookie Exists:" + cookieExists);
    if (cookieExists) return { redirect: { destination: "/dashboard" } };
    return { props: {} };
  } catch (err) {
    return { props: {} };
  }
}
