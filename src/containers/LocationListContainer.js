import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {

  handlerSelectionLocation = city => {
    this.setState({city});
    console.log(`handlerSelectionLocation ${city}`);
    this.props.setCity(city);
  }

  render() {
    return (
      <LocationList cities={this.props.cities} onSelectedLocation={this.handlerSelectionLocation}>
      </LocationList>
    )
  }
}

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer)