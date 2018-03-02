import React, { Component } from 'react';//se modifica si hay un constructor import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constant/weathers';

//creando const para llamar api
const api_key = '32f4d92a2030fc42f873f259012da074';
const location = 'Santiago,scl';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;

/*const data = {
  temperature:20,
  weatherState: SUN,
  humidity: 10,
  wind: '10m/s',
}*/
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
}


//para crear un constructor se usa la palabra class
//component se agrega 'extends Component' para los componentes de tipo class
//render() redibuja cosas
class WeatherLocation extends Component {
  constructor () {
    super();
    this.state = {
      city: 'Santiago',
      data: data1
    }
  }
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

  handleUpdateClick = () => {
    //no necesitamos este this state porque llamaremos a la api
    /*this.setState({
      data: data2
    })*/
    fetch(api_weather).then(data => {
      console.log(data);
      return data.json();
    }).then(weather_data => {
      const data = this.getData(weather_data);//se crea para llamar los datos que yo quiero
      this.setState({data})
      console.log(weather_data);
    })
    console.log('actualizado')
  }
  render = () => {
    //se puede crear la constante para optimizar el codigo
    const {city, data} = this.state
    return(
      <div className="weatherLocation">
        <Location city={city /*this.state.city*/}/>
        <WeatherData data={ data /*this.state.data*/ } />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    )
  }
}

/* componente funcional
    <div className="weatherLocation">
      <Location city={'Santiago!!'}/>
      <WeatherData />
    </div>
  );*/

export default WeatherLocation;