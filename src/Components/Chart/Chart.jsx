import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { fetchDailyData } from "../../api/";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
    };

    fetchAPI();
  }, []);

  const lineChart = ( 
  
        dailyData.length ? (
          <Line
            data={{
              labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
              datasets: [
                {
                  data: dailyData.map(({ confirmed }) => confirmed),
                  label: "Infected",
                  borderColor: "#3333ff",
                  fill: true,
                },
                {
                  data: dailyData.map(({ deaths }) => deaths),
                  label: "Deaths",
                  borderColor: "red",
                  backgroundColor: "rgba(255,0,0,0.5)",
                  fill: true,
                },
              ],
            }}
            options={{
              title: {
                display: true,
                text: "Total infected vs Total Deaths",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "top",
              },
            }}
          />
        ) : null
  );
  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
