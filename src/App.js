import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";

import styles from "./App.module.css";
import { fetchData } from "./api";

/* export default class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
} */
export default function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    async function apiData() {
      const data = await fetchData();

      setData(data);

      console.log(data);
    }
    apiData();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <Chart />
      <CountryPicker />
    </div>
  );
}
