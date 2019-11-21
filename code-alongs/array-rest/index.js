const csv = [
    ["BJ", "Clark", "Frontend", "Instructor"],
    ["Tommy", "W", "Backend", "Instructor"],
    ["Computer", "TV", "Radio", "Cellphone"],
   [ "Computer", "TV", "Radio", "Cellphone"],
];

function printList(firstName, lastName, cohort, title) {
    console.log(`${firstName} ${lastName} is a ${cohort} ${title}`);
}

csv.forEach( (row) => {
  //  const {instructor} = row;
    console.log(row[3])
    const instructor = row[3];
})

this.props = {
    color: 'blue',
    size: 43,
}

const {color} = this.props;
console.log(color);

