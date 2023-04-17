export const numberSeparator = (num: number | string, seperator: string) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, seperator);
