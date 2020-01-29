import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOptionText = (props) => (

  <input
    className={styles.input}
    type='text'
    onChange={event => props.setOptionValue(event.currentTarget.value)}
    value={props.currentValue}
  />
);
OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};


export default OrderOptionText;
