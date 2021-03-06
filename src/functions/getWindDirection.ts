/**
 *  Function takes wind direction in degrees, returns wind direction with letter
 */

export default function getWindDirection(angle: number) {
  const directions = ["С", "С-В", "В", "Ю-В", "Ю", "Ю-З", "З", "С-З"];
  return directions[Math.round(angle / 45) % 8];
}
