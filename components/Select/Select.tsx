import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { options } from "../../helpers/helpers";
import Option from "../Option/Option";
import styles from "./Select.module.scss";

const Select = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string>(router.asPath === "/cars" ? "DEFAULT" : router.asPath.split("/")[2]);

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "All" || e.target.value === "DEFAULT") {
      router.push(`/cars`);
    } else {
      router.push(`/cars/${e.target.value}`);
      setSelectedOption(e.target.value);
    }
  };

  return (
    <select className={styles.select} onChange={onChangeSelect} value={selectedOption}>
      {options.map(({ id, value, isDisabled, text }) => (
        <Option
          key={id}
          value={value}
          disabled={isDisabled}
        >
          {text}
        </Option>
      ))}
    </select>
  );
};

export default Select;
