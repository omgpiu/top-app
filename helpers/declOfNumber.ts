export const declOfNumber = (number: number, titles: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4) && (number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};
