import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';


const OrderOptionNumber =({currentValue, limits, setOptionValue, price})=> (
  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      type='number'
      value = {currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}>
    </input>
    {' '}({formatPrice(price)})
  </div>

);
OrderOptionNumber.propTypes = {
  currentValue: PropTypes.string,
  limits: PropTypes.number,
  setOptionValue: PropTypes.func,
  price: PropTypes.node,
};


export default OrderOptionNumber;



