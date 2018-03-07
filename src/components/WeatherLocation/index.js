import React, { Component } from 'react';//se modifica si hay un constructor import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';

//creando const para llamar api
const api_key = '32f4d92a2030fc42f873f259012da074';
//const location = 'Santiago,scl';
const url = 'https://api.openweathermap.org/data/2.5/weather';

/*const data = {
  temperature:20,
  weatherState: SUN,
  humidity: 10,
  wind: '10m/s',
}
const data1 = {
  temperature:20,
  weatherState: SUN,
  humidity: 10,
  wind: '10m/s',
}
const data2 = {
  temperature:10,
  weatherState: SNOW,
  humidity: 5,
  wind: '100m/s',
}*/


//para crear un constructor se usa la palabra class
//component se agrega 'extends Component' para los componentes de tipo class
//render() redibuja cosas
class WeatherLocation extends Component {
  constructor({city}) {
    super();
    this.state = {
      city,
      data: null
    }
    console.log('constructor');
  }
  //esto se va al archivo transformWeather
  /*
  getWeatherState = weather => {
    return WINDY;
  }

  getData = (weather_data) => {//datos que quiero obtener de la data
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = this.getWeatherState(this.weather);

    const data = {
      humidity,
      temperature: temp,
      weatherState,
      wind: `${speed} m/s`
    }
    return data;
  }
  */
  //reemplazamos handlerUpdateClick por nuestro componente componentWillMount

  componentWillMount = () => {
    const {city} = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
    //no necesitamos este this state porque llamaremos a la api
    /*this.setState({
      data: data2
    })*/
    fetch(api_weather).then(data => {
      console.log(data);
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data);//se crea para llamar los datos que yo quiero
      this.setState({data})
      console.log(weather_data);
    })
  }
  render = () => {
    //se puede crear la constante para optimizar el codigo
    const {onWeatherLocationClick} = this.props;
    console.log('render');
    const {city, data} = this.state
    return(
      <div className="weatherLocation" onClick={onWeatherLocationClick}>
        <Location city = {city}/>
        {data ? <WeatherData data = {data} /> : <CircularProgress size={60} thinckness={7}/>}
      </div>
    );
  }
}
// ? = null
/* componente funcional
    <div className="weatherLocation">
      <Location city={'Santiago!!'}/>
      <WeatherData />
    </div>
  );*/

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;