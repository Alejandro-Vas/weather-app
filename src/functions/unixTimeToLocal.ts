/**
 *  Function takes unixTime and returns local time in "hours : minutes" format
 */

export default function unixTimeToLocal(
  unix_timestamp: number,
  timezone: number
): string {
  let date = new Date((unix_timestamp + timezone) * 1000);
  let hours = date.getUTCHours();
  let minutes = "0" + date.getUTCMinutes();

  return hours + ":" + minutes.slice(-2);
}
