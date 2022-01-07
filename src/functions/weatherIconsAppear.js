// Function takes icon id from openweathermap.org (for ex. '01d'), returns icon of matching weather (sun, cloudly etc...)

// Weather icons condition table:
// https://openweathermap.org/weather-conditions

export default function weatherIconsApper(icon) {
  const icon01d = require("../resources/icons/weahterIcons/01d.png");
  const icon01n = require("../resources/icons/weahterIcons/01n.png");
  const icon02d = require("../resources/icons/weahterIcons/02d.png");
  const icon02n = require("../resources/icons/weahterIcons/02n.png");
  const icon03d = require("../resources/icons/weahterIcons/03d.png");
  const icon03n = require("../resources/icons/weahterIcons/03n.png");
  const icon04d = require("../resources/icons/weahterIcons/04d.png");
  const icon04n = require("../resources/icons/weahterIcons/04n.png");
  const icon09n = require("../resources/icons/weahterIcons/09n.png");
  const icon09d = require("../resources/icons/weahterIcons/09d.png");
  const icon10n = require("../resources/icons/weahterIcons/10n.png");
  const icon10d = require("../resources/icons/weahterIcons/10d.png");
  const icon11n = require("../resources/icons/weahterIcons/11n.png");
  const icon11d = require("../resources/icons/weahterIcons/11d.png");
  const icon13n = require("../resources/icons/weahterIcons/13n.png");
  const icon13d = require("../resources/icons/weahterIcons/13d.png");
  const icon50n = require("../resources/icons/weahterIcons/50n.png");
  const icon50d = require("../resources/icons/weahterIcons/50d.png");

  if (icon === "01d") return icon01d;
  if (icon === "01n") return icon01n;
  if (icon === "02d") return icon02d;
  if (icon === "02n") return icon02n;
  if (icon === "03d") return icon03d;
  if (icon === "03n") return icon03n;
  if (icon === "04d") return icon04d;
  if (icon === "04n") return icon04n;
  if (icon === "09d") return icon09d;
  if (icon === "09n") return icon09n;
  if (icon === "10d") return icon10d;
  if (icon === "10n") return icon10n;
  if (icon === "11d") return icon11d;
  if (icon === "11n") return icon11n;
  if (icon === "13d") return icon13d;
  if (icon === "13n") return icon13n;
  if (icon === "50d") return icon50d;
  if (icon === "50n") return icon50n;
  return null;
}
