const pets = [
  {
    pet: 'Mèo',
    pets: [
      {
        id: '1',
        name: 'Lily',
        image: require('../assets/cat1.png'),
        type: 'Chausie',
        age: '5 tuổi',
      },
      {
        id: '2',
        name: 'Lucy',
        image: require('../assets/cat2.png'),
        type: 'Bobtail',
        age: '2 tuổi',
      },
      {
        id: '3',
        name: 'Nala',
        image: require('../assets/cat3.png'),
        type: 'Ragamuffin',
        age: '2 tuổi',
      },
      {
        id: '4',
        name: 'Nina',
        image: { uri: 'https://placekitten.com/300/300' },
        type: 'Bobtail',
        age: '5 tuổi',
      },
      {
        id: '5',
        name: 'Maxi',
        image: { uri: 'https://placekitten.com/g/300/300' },
        type: 'Chausie',
        age: '5 tuổi',
      },
    ],
  },
  {
    pet: 'Chó',
    pets: [
      {
        id: '1',
        name: 'Bally',
        image: require('../assets/dog1.png'),
        type: 'German Shepherd',
        age: '2 tuổi',
      },
      {
        id: '2',
        name: 'Max',
        image: require('../assets/dog2.png'),
        type: 'Foxhound',
        age: '2 tuổi',
      },
    ],
  },
  {
    pet: 'Chim',
    pets: [
      {
        id: '1',
        name: 'Coco',
        image: require('../assets/bird1.png'),
        type: 'Parrot',
        age: '2 tuổi',
      },
      {
        id: '2',
        name: 'Alfie',
        image: require('../assets/bird2.png'),
        type: 'Parrot',
        age: '4 tuổi',
      },
    ],
  },
  {
    pet: 'Thỏ',
    pets: [
      {
        id: '1',
        name: 'Boots',
        image: require('../assets/bunny1.png'),
        type: 'Angora',
        age: '1 tuổi',
      },
      {
        id: '2',
        name: 'Pookie',
        image: require('../assets/bunny2.png'),
        type: 'Angora',
        age: '1 tuổi',
      },
    ],
  },
];

export default pets;
