import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

/*const strToComponent = cities => (
  cities.map(city => (
    <WeatherLocation
      key={city}
      city={city}
      onWeatherLocationClick={() =>

      }
      />))
);*/

/*const LocationList = ({cities}) => (//va a obtener un arreglo de ciudades, asi era antes de pasarle el map
  <div>
    <WeatherLocation city={'Santiago,scl'} />
    <WeatherLocation city={'Bogotá,col'} />
    <WeatherLocation city={'Buenos Aires,ar'} />
    <WeatherLocation city={'Rio de Janeiro,br'} />
  </div>
);*/

const LocationList = ({cities, onSelectedLocation}) => {
  const handlerWeatherLocationClick = city => {
    console.log('handlerWeatherLocationClick');
    onSelectedLocation(city);
  }
  const strToComponent = cities => (
    cities.map(city => (
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick={() =>
          handlerWeatherLocationClick(city)}/>))
);
  return (
  <div>
    {strToComponent(cities)}
  </div>
  )
};



LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default LocationList;