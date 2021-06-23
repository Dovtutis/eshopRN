import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Super Mario 3D World + Bowser\'s Fury',
    'https://gameroom.lt/34814/super-mario-3d-world-bowser-s-fury.jpg',
    'The cat’s out of the bag—Super Mario™ 3D World is coming to the Nintendo Switch™ system! Pounce and climb through dozens of colorful stages! Mario (and his friends) '
    +  'can use power-ups like the Super Bell, which grants catlike abilities, like climbing and scratching. Work together locally* or online** with up to three other players to reach the goal…and to see who can get a high score.',
    49.99
  ),
  new Product(
    'p2',
    'u1',
    'Mario Kart 8 Deluxe',
    'https://gameroom.lt/19433/mario-kart-8-deluxe.jpg',
    'Enjoy the biggest Mario Kart yet and race anytime, anywhere, with anyone in Mario Kart 8 Deluxe, only on Nintendo Switch! Whether you’re racing your family on the big' 
    + ' screen in your living room, playing in the park, or visiting a friend’s place, Nintendo Switch lets you play Mario Kart any way you like! Up to eight players can connect'
    + ' for local multiplayer fun via Wireless Play. If you\'re playing in TV mode or tabletop mode, up to four players can enjoy split-screen multiplayer!*',
    59.99
  ),
  new Product(
    'p3',
    'u2',
    'Animal Crossing: New Horizons',
    'https://gameroom.lt/27117/animal-crossing-new-horizons.jpg',
    'Beloved franchise Animal Crossing gets ready for its Nintendo Switch debut! If the hustle and bustle of modern life’s got you down, Tom Nook has a new business venture up his'
    + ' sleeve that he knows you’ll adore: the Nook Inc. Deserted Island Getaway Package! Sure, you’ve crossed paths with colorful characters near and far. Had a grand time as one '
    + 'of the city folk. May’ve even turned over a new leaf and dedicated yourself to public service! But deep down, isn’t there a part of you that longs for…freedom? Then perhaps'
    + ' a long walk on the beach of a deserted island, where a rich wealth of untouched nature awaits, is just what the doctor ordered!',
    54.99
  ),
  new Product(
    'p4',
    'u3',
    'Monster Hunter Rise',
    'https://gameroom.lt/34003/monster-hunter-rise.jpg',
    "The critically acclaimed action-RPG series returns to the Nintendo Switch™! Set in the ninja-inspired land of Kamura Village, explore lush ecosystems and battle fearsome monsters to"
    +" become the ultimate hunter. It’s been half a century since the last calamity struck, but a terrifying new monster has reared its head and threatens to plunge the land into chaos once again.",
    59.99
  ),
  new Product(
    'p5',
    'u3',
    'Nintendo Switch V2',
    'https://gameroom.lt/17512/nintendo-switch-konsole-su-neon-red-ir-neon-blue-joy-con-v11.jpg',
    'The Nintendo Switch is a video game console developed by Nintendo and released worldwide in most regions on March 3, 2017. The console itself is a tablet that can either be docked for use as a home console or used as a portable device, making it a hybrid console.',
    339.99
  ),
  new Product(
    'p6',
    'u1',
    'Nintendo Switch Lite',
    'https://gameroom.lt/16546/nintendo-switch-lite-geltona.jpg',
    "The Nintendo Switch Lite is being welcomed to the Nintendo family this September. The compact and lightweight design is perfect for the gamers on the go who want to take their exhilarating adventures with them.",
    224.99
  )
];

export default PRODUCTS;
