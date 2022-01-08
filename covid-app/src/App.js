import "./App.css";
import Countries from "./Components/CountrySelector/Countries";
import HightLight from "./Components/HightLight/HightLight";
import LineChart from "./Components/LineCharts/LineChart";
import { getCountries, getReportByCountry } from "./apis/apis";
import { useEffect, useState } from "react";
import { sortBy } from "lodash";
import moment from "moment";
import 'moment/locale/vi'

moment.locale('vi')

function App() {
  const [countries, setCountries] = useState([]);

  const [selectedCountryId, setselectedCountryId] = useState("");

  const [optionsChart, setOptionsChart] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const country = sortBy(res.data, "Country");
      console.log(country);
      setCountries(country);
      setselectedCountryId("vn");
    });
  }, []);

  const handleOnChange = (e) => {
    setselectedCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (item) => item.ISO2.toLowerCase() === selectedCountryId
      );
      getReportByCountry(Slug).then((res) => {
        res.data.pop();
        setOptionsChart(res.data);
      });
    }
  }, [selectedCountryId, countries]);

  return (
    <div className="App">
      <div className="body">
        <p className="title">Số liệu COVID - 19</p>
        <p>{moment().format('LLL')}</p>
        <Countries
          countries={countries}
          handleOnChange={handleOnChange}
          value={selectedCountryId}
        />
        <HightLight data={optionsChart} />
        <LineChart data={optionsChart} selectedCountryId={selectedCountryId} />
      </div>
    </div>
  );
}

export default App;
