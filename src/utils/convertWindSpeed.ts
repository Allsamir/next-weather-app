function convertWindSpeed(windSpeed: number): string {
  const speed = windSpeed * 3.6;
  return `${Math.round(speed)} km/h`;
}
export default convertWindSpeed;
