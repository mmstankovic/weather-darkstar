import React from 'react';
import Card from './components/UI/Card'
import CurrentWeather from './components/Weather/CurrentWeather';
import Forecast from './components/Weather/Forecast';
import CityProvider from './context/CityProvider';

function App() {
  return (
      <Card className='app'>
        <CityProvider>
          <CurrentWeather />
          <Forecast />
        </CityProvider>
      </Card>
  );
}

export default App;
