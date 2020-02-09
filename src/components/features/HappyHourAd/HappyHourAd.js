import React from 'react';
// import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }

  constructor(){
    super();
    /* run this.forceUpdate() every second */
    setInterval(() => {this.forceUpdate();}, 1000);
  }

  render(){
    const happyHour = this.getCountdownTime();
    return(
      <div>
        <h3 className='title'>Happy Hour</h3>
        {/* 23 * 60 * 60 = 82800 */}
        {/* if(happyHour > 82800 ) {this.props.promoDescription} else {happyHour} */}
        <div className='promoDescription'>{happyHour > 82800 ? this.props.promoDescription : happyHour}</div>
      </div>
    );
  }
}

export default HappyHourAd;

