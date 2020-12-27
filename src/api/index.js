import axios from "axios";

const url = "https://covid19.mathdro.id/api/";
const urlDaily = "https://covid19.mathdro.id/api/daily";
const urlCountries = "https://covid19.mathdro.id/api/countries";

export const fetchData = async (country) => {
  let changeableURL = url;
  if (country) {
    changeableURL = `https://covid19.mathdro.id/api/countries/${country}`;
  }
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
    } = await axios.get(changeableURL);
    // const modifiedData = {
    //   confirmed: confirmed,
    //   recovered: recovered,
    //   deaths: deaths,
    //   lastUpdated: lastUpdate, //rather than storing them like this , even more effective way is to directly return them
    // };
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
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
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(urlCountries);

    return countries.map((country) => country.name);

    //return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
