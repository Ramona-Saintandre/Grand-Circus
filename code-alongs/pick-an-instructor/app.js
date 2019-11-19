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
    return Math.floor(randomNumber * 2 - 1);
});
// students= students.sort((first, second,) =>{
//     // let randomNumber = Math.random();
//     // console.log(randomNumber);
//     // console.log(Math.floor(randomNumber * 2 -1));

// Math.round(Math.random() * 2 - 1);
// });

// Divide up into groups of size students.length / instructors.length
for (instructor in instructors){
    const size = Math.floor(students.length /Object.value(instructors).length);
    const newStudents = students.splice(0,size);
    instructors[instructor] = newStudents;
}
console.log(instructors);
console.log(students);
// Account for possible odd number

// Print out the results
