function meterToKilometers(meter: number): string {
  const meterToKm = meter / 1000;
  return `${meterToKm.toFixed(0)}km`;
}
export default meterToKilometers;
