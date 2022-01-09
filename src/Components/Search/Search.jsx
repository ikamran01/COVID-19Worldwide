import { FormControl, MenuItem, Select, } from "@material-ui/core";

import { Card, CardContent } from "@material-ui/core";
import React,{useEffect, useState}from "react";
import Cards from './InfoBox'
import Casesinfo from './Casesinfo'

import styles from './Search.module.css'

const Search = () => {

      const [countries, setCountries]=useState([]);
      const [country, setCountry] = useState("WorldWide");
      const [countryInfo, setCountryInfo] = useState({});
      const [tableData, setTableData] = useState({});
          useEffect(() => {
            fetch("https://corona.lmao.ninja/v2/all?yesterday")
            .then(response => response.json())
            .then(data => {
              setCountryInfo(data);
            })
          }, []);

      useEffect(() => {
        const getCountriesData = async () => {
          await fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort')
          .then((response) => response.json())
          .then((data) => {
            const countries = data.map((country) => (
              {
                name: country.country,
                value: country.countryInfo.iso2,
              }));

              setTableData(data);
              setCountries(countries);

          });
        };
        getCountriesData();
      }, []);

      const onCountryChange = async (event) => {
        const countryCode = event.target.value;
         setCountry(countryCode);

         
        const url = countryCode === 'WorldWide' ?
         "https://corona.lmao.ninja/v2/all?yesterday" : 
           `https://disease.sh/v3/covid-19/countries/${countryCode}`;
        await fetch(url)
        .then(response => response.json())
        .then(data => {
            setCountryInfo(data);
        }) 
      };
          console.log(countryInfo)
    return(
      <div className="serc">
        <div className={styles.Search}>
          <p>Select your Country</p>
          <FormControl className={styles.Search_dropdwon}>
            <Select variant="outlined" onChange={onCountryChange} value={country}>
              <MenuItem value="WorldWide">World Wide</MenuItem>
              {countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              )

              )}
            </Select>
          </FormControl>
          <div className={styles.InfoBox}>
          <Cards title='Confirmed' cases={countryInfo.todayCases} total={countryInfo.cases}/>
          <Cards title='Recoveds' cases={countryInfo.todayRecovered}  total={countryInfo.recovered}/>
          <Cards title='Deaths' cases={countryInfo.todayDeaths}  total={countryInfo.deaths}/>
        </div>
        <Card className={styles.ctable}>
            <CardContent>
                <h3>Live cases by country</h3>
                
            </CardContent>
        </Card>
        </div>
       
      
      </div>

        
    )
}

export default Search