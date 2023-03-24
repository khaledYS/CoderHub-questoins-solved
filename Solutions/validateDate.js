function kSumSubset(dateString) {
  const currentDate = new Date();
  const inputDate = new Date(dateString);

  // Check if input date is valid
  if (isNaN(inputDate)) {
    return false;
  }

  // Check if input date is before current date
  if (inputDate >= currentDate) {
    return false;
  }

  // Check if input date is at least 4 years before current date
  const minDate = new Date(
    currentDate.getFullYear() - 4,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  if (inputDate.getTime() > minDate.getTime()) {
    return false;
  }

  // Check if input date is not more than 200 years in the past
  const maxDate = new Date(
    currentDate.getFullYear() - 200,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  if (inputDate < maxDate) {
    return false;
  }

  return true;
}
