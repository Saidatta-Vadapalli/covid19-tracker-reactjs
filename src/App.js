import React from "react";

// Not the efficient way of importing the jsx files
// import Cards from "./Components/Cards/Cards";
// import Chart from "./Components/Chart/Chart";
// import CountryPicker from "./Components/CountryPicker/CountryPicker";

// more readable and efficient way of exporting the components, index.js is required in the components directory
// for the undermentioned to work
import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api/";
// npm install --save axios react-chartjs-2 react-countup classnames

// for classes, it's a good practice to mention them dynamically as mentioned below so that always the right style is applied to the element.

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
