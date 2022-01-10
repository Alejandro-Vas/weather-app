export default function getWeekDay(unixTime) {
  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  const weekDayID = new Date(unixTime * 1000).getDay();

  return days[weekDayID];
}
