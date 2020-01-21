import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';


const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (

  <div className={styles.icon}>
    {required ? '' : (
      <div onClick={() => setOptionValue('')}>
        <Icon name='times-circle' /> NONE
      </div>
    )}
    {values.map(value => (
      <div
        className={styles.icon + (currentValue === value.id ? styles.iconActive : '')}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        {console.log('value.id', value.id),
        console.log('currentValue', currentValue)}
        <Icon name={value.icon}></Icon> {value.name} ({formatPrice(value.price)})
      </div>
    ))}

  </div>

);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  required: PropTypes.bool,
};

export default OrderOptionIcons;



