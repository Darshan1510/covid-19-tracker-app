import React from "react";
import { Cards, CountryPicker,Chart } from "./components";
import styles from './App.module.css';
import {fetchData} from './api'

class App extends React.Component {
  
  state={
    data:{},
    country:'',
  }

  async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({data:fetchedData})
  }

  handleCountryChange = async (country) => {
    const fetchedData=await fetchData(country);
    this.setState({data:fetchedData,country:country})
  }

  render(){

    const {data,country}=this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" alt="covid-19"></img>
       <Cards data={data}></Cards>
       <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
       <Chart data={data} country={country}></Chart>
      </div>
    );
  }
}

export default App;
