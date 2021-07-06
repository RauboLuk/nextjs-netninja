import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1>Homepage</h1>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
    </>
  );
}
