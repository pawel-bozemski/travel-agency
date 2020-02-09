import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'Happy Hour',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });
});

it('should render heading and description', () => {
  const component = shallow(<HappyHourAd />);
  expect(component.exists(select.title)).toEqual(true);
  expect(component.exists(select.promoDescription)).toEqual(true);
});

it('should render correct title', () => {
  const correctTitle =  mockProps.title;
  const component = shallow(<HappyHourAd {...mockProps} />);
  expect(component.find('.title').text()).toEqual(correctTitle);
});


