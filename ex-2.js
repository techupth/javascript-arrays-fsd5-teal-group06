const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex = employees[0].name;
let alexHobbies = employees[0].hobbies;
let alexAndJamesAge = employees[0].age + employees[1].age;

console.log(alex, alexHobbies, alexAndJamesAge);
