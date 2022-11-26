import { Button } from "components/button";
import { Text } from "components/text/Text";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Text>안녕</Text>
      <Button
        onClick={() => {
          console.log("hi");
        }}
      >
        로그인
      </Button>
    </div>
  );
}
