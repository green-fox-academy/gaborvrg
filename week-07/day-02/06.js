'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52


var semesterLengthWeeks = 17;
var codeHoursDaily = 6;
var workdays = 5;
var averageWorkHoursWeekly = 52;

var codingByAttendee = semesterLengthWeeks * workdays;

console.log('An attendee spends ' + codingByAttendee * codeHoursDaily + ' hour in a semester with coding');
console.log(Math.floor(100 * codeHoursDaily * workdays / averageWorkHoursWeekly));