import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';


describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='Lorem ipsum' name='Lorem ipsum' />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should show title when given props name', () => {
    const givenTitle = 'title';
    const component = shallow(<OrderOption name='title' type='text'/>);
    expect(component.find('.title').text()).toEqual(givenTitle);
  });



});
