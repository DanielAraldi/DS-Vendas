import { format } from "date-fns";

export const formatLocalDate = (date: string, pattern: string) => {
  const dt = new Date(date);
  const DateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
  return format(DateOnly, pattern);
};
