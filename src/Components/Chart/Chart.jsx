import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { fetchDailyData } from "../../api";

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const dailyData2 = await fetchDailyData();
      setDailyData(dailyData2);
    };

    console.log(dailyData);
    
    fetchAPI();
  }, []);

  const lineChart = (
    dailyData[0] ? ( // checking if the dailData is avaialble, if not the return null
      <Line
        data={{
          labels: '',
          databases: [{}, {}],
        }}
      />
    ) : null
  );

  return (
    <div>
      <h1>Charts</h1>
    </div>
  );
};

export default Chart;
