/**
 * Utility to manipulate date
 */
class DateUtility {
  // convert non standard date format to a standard date format (Date ISO) which can be used to sort
  public static enAULocaleToDateISO(enAULocaleDate: string): string {
    const [date, month, year] = enAULocaleDate.split("/");
    return `${year}-${month.padStart(2, "0")}-${date.padStart(2, "0")}`;
  }
}

export default DateUtility;
