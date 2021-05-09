export const round = (value: number, precision?: number) => {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};
