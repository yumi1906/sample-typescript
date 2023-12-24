// enum Pet {
//     Cat,
//     Dog,
//     Rabbit,
// }

// console.log(Pet.Cat, Pet.Dog, Pet.Rabbit);
// 実体は数値

enum Pet {
    Cat = 'cat',
    Dog = 'dog',
    Rabbit = 'rabbit',
}

// let Tom: Pet = Pet.Cat;
// Tom = 'dog'; // Type '"dog"' is not assignable to type 'Pet'.

let Tom: 'cat' = 'cat';
// Tom = 'mouse'; // Type '"mouse"' is not assignable to type '"cat"'.

let Mary: 'Cat' | 'Dog' | 'Rabbit' = 'Cat';
Mary = 'Rabbit';
// Mary = 'Parrot'; // Type '"Parrot"' is not assignable to type '"Cat" | "Dog" | "Rabbit"'.