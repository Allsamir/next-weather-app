export function convertToCelsius(value: number): string {
  const celsius = value - 273.5;

  return celsius.toFixed(0);
}
