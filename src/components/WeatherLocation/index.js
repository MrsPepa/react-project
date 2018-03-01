import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = () => (
    <div>
      <Location city={'Santiago'}/>
      <WeatherData />
    </div>
  );

export default WeatherLocation;