// Ensure the script runs after the entire page, including images and stylesheets, has fully loaded
window.onload = function() {
    console.log('The page and all its resources have fully loaded!');
 
    // The number of days between the two dates
    const startDate = new Date("2026-01-01");
    const endDate = new Date();
    const days = dateDifferenceInDays(startDate, endDate);
    console.log(`The number of days between the two dates is: ${days}`);

    // Get the span element by its ID
    const daySpan = document.getElementById('days-remaining');

    // Change its text content
    daySpan.textContent = days;
};

// Function to calculate the difference in days between two dates
function dateDifferenceInDays(date1, date2) {
  // Convert both dates to milliseconds
  const date1InMs = date1.getTime();
  const date2InMs = date2.getTime();

  // Calculate the difference in milliseconds
  const differenceInMs = Math.abs(date2InMs - date1InMs);

  // Convert milliseconds to days
  // 1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
  const msInDay = 1000 * 60 * 60 * 24;

  // Round to the nearest whole number to handle daylight saving time changes and time differences
  return Math.round(differenceInMs / msInDay);
}