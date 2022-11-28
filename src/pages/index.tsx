import { Button } from "components/button";
import { CheckBox, TextArea, TextField } from "components/form";
import { Img } from "components/img";
import { Text } from "components/text";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "styles/Home.module.css";

export default function Home() {
  const [value, setValue] = useState<string>("");

  const [isChecked, setIsChecked] = useState<boolean>(false);
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
      <TextField
        placeholder="텍스트 입력"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <TextArea
        placeholder="hi"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Text maxLength={10}>{value}</Text>
      <Img src={"/assets/icons/ic_Article.png"} />
      <CheckBox
        type="circle"
        checked={isChecked}
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      />
    </div>
  );
}
