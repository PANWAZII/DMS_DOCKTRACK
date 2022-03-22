export default function getGovYear() {
  let date = new Date();
  const currentYear = date.getFullYear();
  const currentThaiYear = currentYear + 543;
  const currentMonth = date.getMonth() + 1;
//   console.log("currentThaiYear ", currentThaiYear);
//   console.log("currentMonth ", currentMonth);
  let govYear = "";
  if (currentMonth < 10) {
    return currentThaiYear;
  } else {
    return currentThaiYear + 1;
  }
}
