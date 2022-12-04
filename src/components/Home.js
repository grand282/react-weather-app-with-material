import React from 'react';
import { useState, useEffect } from 'react';
import {TextField,Toolbar, Box} from '@mui/material';
import { fetchData } from '../utils/fetchData';
import Pagedetails from './Pagedetails';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const Home = () => {
    
 
  const [city, setCity] = useState("paris");
  const[weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await fetchData(city);
      setWeather(data);

    };

    fetchWeatherData();
  }, [city]);

  
  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.target.value.toLowerCase());
      e.currentTarget.blur();
    }
  };

  return (
    <Box sx={{bgcolor: 'lightGrey'}}>
      {weather &&(
        <Box>
        <Toolbar sx={{bgcolor: 'darkBlue',color: 'white', fontWeight: 'bold'}}>
        <ThunderstormIcon fontSize="large"/>
        Weather Dox
        </Toolbar>
        <TextField
          sx={{width: '85%', marginLeft: '10px', marginTop: '20px', textAlign: 'center' }}
          onKeyDown={enterKeyPressed}
          id="filled-search"
          label="Search location"
          type="search"
          variant="filled"
        />
        
        <Box>
          <Pagedetails data={weather} />
        </Box>
        </Box>
      )}
    </Box>
    
  )
}

export default Home