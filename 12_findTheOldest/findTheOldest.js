const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        // Calculate age for the current oldest person
        const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : 2024 - oldest.yearOfBirth;

        // Calculate age for the current person
        const personAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : 2024 - person.yearOfBirth;

        // Return the person who is older
        return personAge > oldestAge ? person : oldest;
    });
};
// Do not edit below this line
module.exports = findTheOldest;
