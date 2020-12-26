import axios from "axios";

const url = "https://covid19.mathdro.id/api/";
const urlDaily = "https://covid19.mathdro.id/api/daily";

export const fetchData = async () => {
  try {
    //one way of destructuring the data not the most efficient way to do it
    // const { data } = await axios.get(url);
    // const modifiedData = {

    //   confirmed: data.confirmed,
    //   recovered: data.recovered,
    //   deaths: data.deaths,
    //   lastUpdate: data.lastUpdate,

    // };
    //efficient way to destructure the data
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    // const modifiedData = {
    //   confirmed: confirmed,
    //   recovered: recovered,
    //   deaths: deaths,
    //   lastUpdated: lastUpdate, //rather than storing them like this , even more effective way is to directly return them
    // };
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(urlDaily);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};
