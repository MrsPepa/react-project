import React, { Component } from 'react';
import { connect } from 'react-redux';//me sirve par conectar mis componentes de react a redux
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
  render() {
    return(
      this.props.city &&
      <ForecastExtended city={this.props.city}></ForecastExtended>
    )
  }
}

const mapStateToProps = ({city}) => (
  console.log(`este es el valor de mapStateToProps ${city}`), {city}
);

export default connect(mapStateToProps, null)(ForecastExtendedContainer)//es null segundo para que limpie una vez mostrado el estado