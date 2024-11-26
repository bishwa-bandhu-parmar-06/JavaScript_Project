const submitButton = document.getElementById('submit');
const year = document.getElementById("Year");
const month = document.getElementById("Month");
const day = document.getElementById("Day");
const resetbtn = document.querySelector("#reset");

submitButton.addEventListener('click', function() {
    const inputDob = document.getElementById('dob').value;
    var userDob = new Date(inputDob);
    var todayDate = new Date();

    var yearDiff = todayDate.getFullYear() - userDob.getFullYear();
    var monthDiff = todayDate.getMonth() - userDob.getMonth();
    var dayDiff = todayDate.getDate() - userDob.getDate();

    // Adjust for negative month or day differences
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        yearDiff--;
        monthDiff += 12; // Add 12 months to compensate for negative month difference
        if (dayDiff < 0) {
            var lastMonthDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0);
            dayDiff += lastMonthDate.getDate(); // Add days of last month to day difference
            monthDiff--; // Adjust month difference again if the current day is earlier
        }
    }

    console.log(`Your age is ${yearDiff} year(s), ${monthDiff} month(s), and ${dayDiff} day(s)`);

    year.innerHTML = `${yearDiff} Years,`;
    month.innerHTML = `${monthDiff} Months,`;
    day.innerHTML = `${dayDiff} Days.`;
});

resetbtn.addEventListener('click', function() {
    // Display a confirmation dialog
    if (confirm("Are you sure you want to reset? All details will be erased.")) {
        // If user confirms, reload the page
        location.reload();
    }
});