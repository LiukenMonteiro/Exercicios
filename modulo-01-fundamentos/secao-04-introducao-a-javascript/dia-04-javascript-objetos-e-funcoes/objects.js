let person = {
    firstName: 'Flavia',
    lastName: 'Pereira',
    favoriteMovies: ['Harry Pottter', 'O senhor dos anéis'],
}

//console.log(person);
// console.log(person.firstName); //dot notation
// console.log(person.favoriteMovies[1]); //bracketts notation

person.firstName = 'Gilmar';
person.city = 'Curitiba';
person['lastName'] = 'Silva';
person.users = ['user1', 'user2', 'user3'];
person.addres = {
    street: 'Rua Dalvo Trombeta',
    number: 123,
    other: 'Fundos',
}

// console.log(person.addres.street);
console.log(typeof(person));
console.log(typeof(price));

delete person.city;
console.log(person);