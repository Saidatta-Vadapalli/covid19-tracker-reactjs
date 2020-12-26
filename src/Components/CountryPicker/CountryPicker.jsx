import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { countries } from "../../api";

const CountryPicker = () => {
  const [fetchCountries, setFetchCountires] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchCountires(await countries);
    };

    fetchCountries();
  }, [setFetchCountires]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value="global">Global</option>
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
