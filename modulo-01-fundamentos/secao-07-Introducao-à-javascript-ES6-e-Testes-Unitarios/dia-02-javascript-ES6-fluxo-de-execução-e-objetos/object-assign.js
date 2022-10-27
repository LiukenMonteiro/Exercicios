// const person = {
//     name: 'Alberto',
//     lastName: 'Gomes',
//     age: 20,
//   };
  
//   const info = {
//     age: 23,
//     job: 'engenheiro',
//   };
  
//   const family = {
//     children: ['Maria', 'João'],
//     wife: 'Ana',
//   };
  
//   Object.assign(person, info, family)
//   console.log(person)

const band = {
    name: 'Blind Guardian',
    formedIn: 1986,
    lastAlbum: 'Beyond the Red Mirror',
  };
  
  const info = {
    genre: 'Power Metal',
    lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
  };
  
  console.log(Object.assign(band, info));

// const person = {
//     name: 'Roberto',
//   };
  
//   const lastName = {
//     lastName: 'Silva',
//   };
  
//   const newPerson = Object.assign({},person,lastName);
//   newPerson.name = 'Gilberto';
//   console.log(newPerson);
//   console.log(person);