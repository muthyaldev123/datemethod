//  1) Get Current Date and Time

// Input: None
// Output: Current date and time(e.g., "2024-08-28T14:30:00.000Z")

// const current_date_time = new Date().toISOString()
// console.log('Current Date and Time  : ' + current_date_time)

// Output:
// Current Date and Time: 2024 -09-01T13:06: 18.041Z

// 2) Add Days to Date

// Input: Date string(e.g., "2024-08-28"), number of days to add(e.g., 3)
// Output: New date string(e.g., "2024-08-31")

// const date = new Date("2024-08-28")
// date.setDate(31)
// year = date.getFullYear()
// month = date.getMonth() + 1
// day = date.getDate()
// console.log(New Date String : ${year}-${month}-${day})

// Output: 
// New Date String: 2024 - 8 - 31







// 3) Format Date as MM / DD / YYYY

// Input: Date string(e.g., "2024-08-28")
// Output: Formatted date string(e.g., "08/28/2024")

// const datee = new Date("2024-08-28")
// year = datee.getFullYear()
// month = datee.getMonth() + 1
// day = datee.getDate()
// console.log(Formatted Date String is : ${month}/${day}/${year})

// Output:
// Formatted Date String is: 8 / 28 / 2024

// 4) Get Number of Days Between Dates

// Input: Two date strings(e.g., "2024-08-28", "2024-09-01")
// Output: Number of days between dates(e.g., 4)

// const date1 = new Date("2024-08-28")
// const date2 = new Date("2024-09-01")
// console.log('Number of Days between dates : ' + (date2 - date1) / (24 * 60 * 60 * 1000))

// Output:
// Number of Days between dates: 4
// [22:50, 02/09/2024]