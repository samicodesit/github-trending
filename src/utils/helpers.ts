export const getLastWeek = () => {
  const today = new Date();
  const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

  const lastWeekMonth = lastWeek.getMonth() + 1;
  const lastWeekDay = lastWeek.getDate();
  const lastWeekYear = lastWeek.getFullYear();

  const lastWeekDisplayPadded =
    ("0000" + lastWeekYear.toString()).slice(-4) +
    "-" +
    ("00" + lastWeekMonth.toString()).slice(-2) +
    "-" +
    ("00" + lastWeekDay.toString()).slice(-2);

  return lastWeekDisplayPadded;
};
