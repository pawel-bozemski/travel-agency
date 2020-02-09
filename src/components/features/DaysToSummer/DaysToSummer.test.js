import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';


const mockProps = {
  title: '.component',
};


describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should render heading ', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(mockProps.title)).toEqual(true);
  });

});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkSummerDate = (date, expectDate) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.000Z`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const days = component.find('.component').text();
    expect(days).toEqual(expectDate);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked date', () => {

  //before summer  > 21.06
  checkSummerDate('2019-05-22', '30 days to summer');
  checkSummerDate('2019-01-21', '151 days to summer');
  checkSummerDate('2019-06-20', '1 days to summer');

  // during summer 21.06 - 23.09

  checkSummerDate('2019-07-22', 'It is summer time, take a break from work and see world :)');
  checkSummerDate('2019-06-21', 'It is summer time, take a break from work and see world :)');
  checkSummerDate('2019-09-23', 'It is summer time, take a break from work and see world :)');

  //after summer 23.09 <
  checkSummerDate('2019-09-24', '95 days to summer');
  checkSummerDate('2019-10-21', '122 days to summer');
  checkSummerDate('2019-12-20', '182 days to summer');

});



