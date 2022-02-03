/**
 * Function takes unixTime, returns matched day of the week
 */

export default function getWeekDay(unixTime: number): string {
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  const weekDayID = new Date(unixTime * 1000).getDay();

  return days[weekDayID];
}
