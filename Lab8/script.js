const DateTime = luxon.DateTime;

const today = DateTime.now().startOf("day");
const birthdate = DateTime.fromISO("1994-12-20");
// Exercise 1 - Total days since birth
const days = Math.floor(today.diff(birthdate, "days").days);
document.getElementById("exercise1").textContent =
    `Days since birth: ${days}`;

// Exercise 2 - Years, months and days
const age = today.diff(birthdate, ["years", "months", "days"]);
document.getElementById("exercise2").textContent =
    `Age: ${age.years} years, ${age.months} months, and ${Math.floor(age.days)} days`;

// Exercise 3 - Date closest to today
const date1 = DateTime.fromISO("2026-01-01");
const date2 = DateTime.fromISO("2027-01-01");

const difference1 = Math.abs(today.diff(date1, "days").days);
const difference2 = Math.abs(today.diff(date2, "days").days);

const closest = difference1 <= difference2 ? date1 : date2;

document.getElementById("exercise3").textContent =
    `Closest date: ${closest.toISODate()}`;


// Exercise 4 - Compare two dates
const comparison = date1 < date2 ? "before" :
    date1 > date2 ? "after" : "equal to";
document.getElementById("exercise4").textContent =
    `${date1.toISODate()} is ${comparison} ${date2.toISODate()}`;


// Exercise 5 - Current time in London
const london = DateTime.now().setZone("Europe/London");
document.getElementById("exercise5").textContent =
    `London time: ${london.toFormat("hh:mm:ss a")}`;