import React, { Component } from 'react';
//import { connect } from 'react-redux'; se fue de aca porque lo estoy usando en locationlistcontainer
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-flexbox-grid';
//import { createStore } from 'redux';
import Paper from 'material-ui/Paper';//hace una sombra
import AppBar from 'material-ui/AppBar';//aparece un nav
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
//import { setCity } from './actions'; lo llamamos el locationlistcontainer
//import { store } from './store';
import './App.css';

const cities = [
  'Santiago,scl',
  'Buenos Aires,ar',
  'Bogotá,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Rio de Janeiro,br',
  'London,uk'
];

// Store de redux con un reducer dentro.
// const store = createStore(() => {});

/*const store = createStore(() => {}, window.__REDUX_DEVTOOLS_EXTENSION__&&
  window.__REDUX_DEVTOOLS_EXTENSION__());*/

  /*const setCity = value => ({
    type: 'setCity',
    value
  })*/

class App extends Component {
  /*constructor(){
    super();
    this.state = {
      city: null
    }
  } se saca ya que se esta llamando en forecast extended container */

  /*hadlerSelectionLocation = city => {
    this.setState({city});
    console.log(`hadlerSelectionLocationClick ${city}`);
    // const action = {type: 'setState', value: city}
    // store.dispatch(setCity(city));
    this.props.setCity(city);
  } antes se hacia asi sin redux */

  render() {
    //const {city} = this.state; se va porque esta llamado en forecast extended container
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="weather app"/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities = {cities}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  <ForecastExtendedContainer>
                  </ForecastExtendedContainer>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
      /*
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities = {cities}
          onSelectedLocation = {this.hadlerSelectionLocation}/>
        </div>
      </MuiThemeProvider>
      */
    );
  }
}
/*
lo saco de detail y lo coloco en forecastextendedcontainer
  {city === null ? <h1 className='nocity'>No se seleccionó ciudad</h1> : <ForecastExtended city={city}></ForecastExtended>}
  */

//const mapDispatchToPropsActions = () => {};
//const componentConnected = connect(null, mapDispatchToPropsActions)(App)

/*const AppConnected = connect(null, mapDispatchToPropsActions)(App)

export default AppConnected; asi se hacia */

/*const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(App) lo estamos llamando en locationlistcontainer */

export default App;