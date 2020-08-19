import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

export default function Chart() {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };

    console.log(dailyData);
    fetchApi();
  }, [dailyData]);

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Infectados",
              borderColor: "#333fff",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Infectados",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return <div className={styles.container}>{lineChart}</div>;
}
