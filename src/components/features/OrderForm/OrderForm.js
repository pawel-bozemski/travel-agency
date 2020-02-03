import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';

const sendOrder = (options, tripCost, tripName, tripId, countryCode) => {

  if(options.name !== '' && options.contact !== '') {
    const totalCost = formatPrice(calculateTotal(tripCost, options));

    const payload = {
      ...options,
      totalCost,
      tripName,
      tripId,
      countryCode,
    };

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else window.confirm('Please state your name and contact info');
};

const OrderForm = ({options, tripCost, setOrderOption, tripId, tripName, countryCode}) => (
  console.log('countryCode', countryCode),

  <Row>
    {pricing.map(option =>
      <Col md={4} key={option.id}>
        <OrderOption {...option}
          currentValue={options[option.id]}
          setOrderOption={setOrderOption}
        />
      </Col>)}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options} />
      <Button onClick={() => sendOrder(options, tripCost, tripId, tripName, countryCode)}>Order now!</Button>
    </Col>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  countryCode: PropTypes.string,
};


export default OrderForm;



