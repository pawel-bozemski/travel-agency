import React from 'react';
import styles from './DaysToSummer.scss';


class DaysToSummer extends React.Component {

  summerCountdown() {

    const currentDate = new Date();
    const summerStart = new Date (Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    const summerEnd = new Date (Date.UTC(currentDate.getUTCFullYear(), 8, 23));
    const nextSummer = currentDate.getUTCFullYear() + 1;
    const newSummer = new Date (Date.UTC(nextSummer, 5, 21));

    const msInDay = 24 * 60 * 60 * 1000;

    let summer;

    if (currentDate < summerStart) {
      summer = Math.floor ((summerStart.getTime() - currentDate.getTime())/msInDay) + ' '+'days to summer';
    }
    else if (currentDate > summerEnd) {
      summer = Math.floor ((newSummer.getTime() -  currentDate.getTime())/msInDay) + ' '+'days to summer';
    }
    else if (summerStart <= currentDate && currentDate <= summerEnd){
      summer = 'It is summer time, take a break from work and see world :)';
    }

    return summer;

  }

  render() {
    return(
      <div>
        <h3 className={styles.component}>{this.summerCountdown()}</h3>
      </div>
    );


  }
}

export default DaysToSummer;
