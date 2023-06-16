const products = [
  {
    title: 'Морська',
    image: require('../assets/229405/lx0_p1.jpg'),

    price: 99,
    type: 'Pizza',
  },
  {
    title: 'Журавлина',
    image: require('../assets/229405/lx0_p2.jpg'),

    price: 89,
    type: 'Pizza',
  },
  {
    title: 'Чилі з куркою',
    image: require('../assets/229405/lx0_p3.jpg'),

    price: 83,
    type: 'Pizza',
  },
  {
    title: 'Копчений пепероні',
    image: require('../assets/229405/lx0_p4.jpg'),

    price: 84,
    type: 'Pizza',
  },
  {
    title: 'Солодка маргарита',
    image: require('../assets/229405/lx0_p5.jpg'),

    price: 60,
    type: 'Pizza',
  },
  {
    title: 'Філадельфія з авокадо',
    image: require('../assets/229405/lx0_r1.jpg'),

    price: 48,
    type: 'Rolls',
  },
  {
    title: 'Філадельфія з креветками',
    image: require('../assets/229405/lx0_r2.jpg'),

    price: 49,
    type: 'Rolls',
  },
  {
    title: 'Ролли унаги',
    image: require('../assets/229405/lx0_r3.jpg'),

    price: 54,
    type: 'Rolls',
  },
  {
    title: 'Японський ролл',
    image: require('../assets/229405/lx0_r4.jpg'),

    price: 52,
    type: 'Rolls',
  },
  {
    title: 'Вершковий вугор',
    image: require('../assets/229405/lx0_r5.jpg'),

    price: 38,
    type: 'Rolls',
  },
  {
    title: 'Суші з атуном',
    image: require('../assets/229405/lx0_s1.jpg'),

    price: 99,
    type: 'Sushi',
  },
  {
    title: 'Суші з креветками',
    image: require('../assets/229405/lx0_s2.jpg'),

    price: 11,
    type: 'Sushi',
  },
  {
    title: 'Суші з лососем',
    image: require('../assets/229405/lx0_s33.jpg'),

    price: 12,
    type: 'Sushi',
  },
  {
    title: 'Суші з вугром',
    image: require('../assets/229405/lx0_s4.jpg'),

    price: 10,
    type: 'Sushi',
  },
  {
    title: 'Гункан з тунцем',
    image: require('../assets/229405/lx0_s5.jpg'),

    price: 11,
    type: 'Sushi',
  },
  {
    title: 'Гавайський солодкий рол',
    image: require('../assets/229405/lx0_d1.jpg'),

    price: 25,
    type: 'Dessert',
  },
  {
    title: 'Ролло дульче тропічний',
    image: require('../assets/229405/lx0_d2.jpg'),

    price: 26,
    type: 'Dessert',
  },
  {
    title: 'Ролло дульче Бонджорно',
    image: require('../assets/229405/lx0_d3.jpg'),

    price: 25,
    type: 'Dessert',
  },
  {
    title: 'Ролл Солодке життя',
    image: require('../assets/229405/lx0_d4.jpg'),

    price: 25,
    type: 'Dessert',
  },
  {
    title: 'Набір солодких булочок',
    image: require('../assets/229405/lx0_d5.jpg'),

    price: 97,
    type: 'Dessert',
  },
];

const productsList = products.map(el => {
  return {
    ...el,
    added: false,
    cnt: 1,
    id: Math.random(),
  };
});

export default productsList;
