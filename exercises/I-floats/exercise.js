const numberOfStudents = 15;
const numberOfMentors = 8;

const total = numberOfStudents + numberOfMentors;
const studentPercentage = (numberOfStudents / total) * 100;
const mentorPercentage = (numberOfMentors / total) * 100;

console.log(`Percentage of students: ${studentPercentage}%`);
console.log(`Percentage of mentors: ${mentorPercentage}%`);

console.log(Math.round(studentPercentage));
console.log(Math.round(mentorPercentage));
