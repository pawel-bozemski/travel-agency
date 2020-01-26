import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({setOptionValue, currentValue, values}) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label
        key={value.id}>
        <input
          type='checkbox'
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}
          value={value.id}>
        </input>
        {value.name} ({formatPrice(value.price)})
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  icon: PropTypes.node,
  currentValue: PropTypes.array,
};

export default OrderOptionCheckboxes;
