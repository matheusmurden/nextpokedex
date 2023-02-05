export const formatDexNumber = (number: number | string) =>
  Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 3,
  }).format(Number(number));
