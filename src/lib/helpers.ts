export const isWithinLatinAmerica = (lat: number, lng: number): boolean => {
  // Latin America geographical boundaries
  const north = 32; // Northernmost point
  const south = -56; // Southernmost point
  const west = -118; // Westernmost point
  const east = -34; // Easternmost point

  return lat <= north && lat >= south && lng >= west && lng <= east;
};
