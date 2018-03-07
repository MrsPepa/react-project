import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
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

class App extends Component {
  handlerSelectionLocationClick = city => {
    console.log('handlerSelectionLocationClick')
  }
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col></Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
      /*
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities} onSelectedLocation={this.handlerSelectionLocationClick}/>
        </div>
      </MuiThemeProvider>
      */
    );
  }
}

export default App;
