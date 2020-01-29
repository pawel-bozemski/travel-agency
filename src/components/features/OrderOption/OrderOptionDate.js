
import React from 'react';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

class OrderOptionDate extends React.Component {
  // state = {
  //   startDate: new Date(),
  // };

  // handleChange = date => {
  //   this.setState({
  //     startDate: date,
  //   });
  // };

  render() {
    const { currentValue, setOptionValue } = this.props;
    console.log('currentValue', currentValue);

    return (
      <DatePicker
        className={styles.date}
        selected={currentValue}
        onChange={setOptionValue}
      />
    );
  }
}

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
