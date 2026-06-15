people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

    let resIndex = 1;
    let oldest = 0;
    for (const [index, person] of people.entries()) {
        const age = person.yearOfDeath - person.yearOfBirth;

        if (age > oldest) {
            oldest = age;
            resIndex = index;
        }
    }

console.log(people[0].yearOfDeath - people[0].yearOfBirth)
