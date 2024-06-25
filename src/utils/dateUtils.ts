function getYearsAndMonthFromDates(
  startDate: Date,
  endDate: Date | null
): string {
  const endDateTime = endDate ? endDate.getTime() : new Date().getTime();

  const diffInMilliseconds = endDateTime - startDate.getTime();

  const totalMonths = diffInMilliseconds / (1000 * 60 * 60 * 24 * 30.44);

  const years = Math.floor(totalMonths / 12);
  const months = Math.round(totalMonths % 12);

  const yearsText = years > 0 ? `${years} year${years > 1 ? "s" : ""} ` : "";
  const monthsText =
    months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

  return `${yearsText}${monthsText}`;
}

export const dateUtils = {
  getYearsAndMonthFromDates,
};
