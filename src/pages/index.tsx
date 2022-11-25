import { Text } from "components/text/Text";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>hi</div>
      <div className="title">세상에 이런 폰트가 나오다니 천재인듯</div>
      <Text>안녕</Text>
    </div>
  );
}
