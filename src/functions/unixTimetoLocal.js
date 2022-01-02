// function takes unixTime and returns local time in "hours : minutes: seconds" format
// function takes onlyHourMinute as "true" agrument if it needs to return only "hours : minutes"

export default function unixTimeToLocal(unix_timestamp, onlyHourMinute) {
  let date = new Date(unix_timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let result = hours + ":" + minutes.substr(-2);

  return onlyHourMinute ? result : result + ":" + seconds.substr(-2);
}
