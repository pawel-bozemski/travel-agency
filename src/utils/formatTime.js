export const formatTime = time => {

  if (time === undefined || isNaN(time) || time < 0) {
    return null;
  } else {

    const sec = Math.floor(time % 60).toString();
    const min = Math.floor((time/60) % 60).toString();
    const hour = Math.floor((time/ 3600) % 60).toString();

    return hour.padStart(2,'0') + ':' + min.padStart(2,'0') + ':' + sec.padStart(2,'0');

  }
};
