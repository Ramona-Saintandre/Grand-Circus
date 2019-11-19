const instructors = {
    roger: [],
    chris: [],
    bj: []
};

let students = [
    'Josh Hall',
    'Samantha Stutzman',
    'Chase Baker',
    'Jordan Gaza',
    'Benjamin Rolls ',
    'Jonathan Olson',
    'Ryan DeVree',
    'Otto Keresztes',
    'Robert Harman',
    'Matthew Maeda',
    'Bryce Byker',
    'Michael Vanderloon',
    'John McCarthy',
    'Spencer Morris',
    'Brielle Robinson',
    'Spencer Deering',
    'Rachael Watson',
    'Grady Peck',
    'Kevin Marusek',
    'Ramona SaintAndre',
    'Abigail Lundgren',
    'Samuel Scholtens',
];

// Shuffle group randomly
students = students.sort( (first, second) => {
    return Math.floor(Math.random() * 2 - 1);
});
//console.log(students);
const size = Math.floor(students.length / Object.values(instructors).length);

// Divide up into groups of size students.length / instructors.length
while (instructor in instructors){
    const size = Math.floor(students.length /Object.value(instructors).length);
    const newStudents = students.splice(0,size);
    instructors[instructor] = newStudents;
}
console.log(instructors);
console.log(students);
// Account for possible odd number
//Add to BJ's array
if(students.length !== 0){
    instructors.bj.push= students.pop();
}
// Print out the results
console.log(students);