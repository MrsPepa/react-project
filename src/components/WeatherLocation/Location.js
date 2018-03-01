import React from 'react';
import PropTypes from 'prop-types';

/*const Location = () => (
  <div>
    <h1></h1>
  </div>
);*/
const Location = ({city}) => (//{
//const city = props.city; una forma
//const {city} = props;

//return (
    <div>
      <h1>{city}</h1>
    </div>
//  )
//}
)

Location.propTypes = {
  city: PropTypes.string.isRequired,
}

export default Location;