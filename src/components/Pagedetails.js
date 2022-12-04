
import React from 'react'
import { Box, Grid, Typography,Divider,Stack } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudIcon from '@mui/icons-material/Cloud';
import AirIcon from '@mui/icons-material/Air';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import LightModeIcon from '@mui/icons-material/LightMode';

const Pagedetails = ({ data }) => {
console.log(data)
  return (
    <>
    <Box bgcolor="lightgray" >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }} direction={{ xs: 'column', sm: 'row' }} >
          <Grid item xs={6}>
          <Typography mt="18px" ml="25px"
             fontWeight="bold" fontSize="30px">
              {data.name}  ({data.country})
          </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography mt="18px" ml="25px"
             fontWeight="bold" fontSize="30px">
                 <WbSunnyIcon  fontSize="large" color="primary" />
                 Temperature: {data.temp}°c 
          </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography fontWeight="bold" fontSize="30px" mt="18px" ml="25px" >
             <ThermostatIcon fontSize="large" color="primary" />
                 Humidity: {data.humidity}%
             </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography mt="18px" ml="25px"
             fontWeight="bold" fontSize="30px">
                <AirIcon fontSize="large" />
                 Wind: {data.speed} m/s
            </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography mt="18px" ml="25px"
            fontWeight="bold" fontSize="30px">
                Pressure: {data.pressure} hPa
            </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography mt="18px" ml="25px"
            fontWeight="bold" fontSize="30px">
               <CloudIcon fontSize="large" color="primary" />
                Cloud cover: {data.main}
            </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography mt="18px" ml="25px"
            fontWeight="bold" fontSize="30px">
              <WbTwilightIcon fontSize="large" color="primary" />
               max-temp: {data.temp_max}°c 
            </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography mt="18px" ml="25px"
            fontWeight="bold" fontSize="30px">
              <LightModeIcon fontSize="large" color="primary" />
               min-temp: {data.temp_min}°c 
            </Typography>
          </Grid>

          </Grid>
        </Box>
        <Box sx={{bgcolor: 'darkBlue',color: 'white'}} >
        <Stack display='flex'
        flexDirection='row'
        justifyContent="space-around"
        color="whitesmoke"
        height='40px'
        textAlign="center"
         mt="10px"
        >
        <Typography textAlign='center'
        mt="5px" fontWeight="bold" fontSize="20px" >
          Other important weather data of your local city here
        </Typography>
        </Stack>
    
        </Box>
        <Box bgcolor="lightgray">
        <Stack
       direction='row'
       divider={<Divider color="black" orientation="vertical" flexItem />}
       spacing={1}
       justifyContent="space-around"
       bgcolor="darkgray" color="black"
       height="50px" >
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">Properties</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">values</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">||</Typography>
       </Stack>
       <Divider color="black" />
       <Stack
       direction="row"
       spacing={1}
       justifyContent="space-around"
       bgcolor="darkgray" color="black"
       height="50px" >
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">feels-like</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">{data.feels_like}</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">|</Typography>
      </Stack>
      <Divider color="black" />
      <Stack
       direction='row'
       spacing={1}
       justifyContent="space-around"
       bgcolor="darkgray" color="black"
       height="50px" >
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">Rain</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">{data.main}</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">{data.description}</Typography>
      </Stack>
      <Divider color="black" />
      <Stack
       direction='row'
       spacing={1}
       justifyContent="space-around"
       bgcolor="darkgray" color="black"
       height="50px" >
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">wind</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">{data.deg}°c</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">||</Typography>
      </Stack>
      <Divider color="black" />
      <Stack
       direction='row'
       spacing={1}
       justifyContent="space-around"
       bgcolor="darkgray" color="black"
       height="50px" >
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">clouds</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">{data.all}</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">||</Typography>
      </Stack>
      <Divider color="black" />
      <Stack
       direction='row'
       spacing={1}
       justifyContent="space-around"
       bgcolor="darkgray" color="black"
       height="50px" >
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">Latitude</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">{data.lat}</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">||</Typography>
      </Stack>
      <Divider color="black" />
      <Stack
       direction='row'
       spacing={1}
       justifyContent="space-around"
       bgcolor="darkgray" color="black"
       height="50px" >
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">longitude</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">{data.lon}</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">||</Typography>
      </Stack>
      <Divider color="black" />
      <Stack
       direction='row'
       spacing={1}
       justifyContent="space-around"
       bgcolor="darkgray" color="black"
       height="50px" >
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">Timezone</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">{data.timezone}</Typography>
        <Typography fontWeight="bold" textAlign="center" fontSize="20px">||</Typography>
      </Stack>
      <Divider color="black" />
    </Box>
    </>
  )
}

export default Pagedetails