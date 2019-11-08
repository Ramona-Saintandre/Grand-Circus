const grandCircus = { location: "Detroit", rooms: 6, colors: ["teal", "orange", "charcoal"] };

for (let prop in grandCircus) {
  console.log(prop);
  console.log(grandCircus[prop]);
}