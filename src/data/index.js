import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const MENUS = [
    {
        id: 1,
        tag: 'breakfast',
        mainTitle: 'Steelhead Trout Rice Bowls',
        subTitle: 'with Avocado, Bok Choy \u0026 Yuzu Kosho Mayo',
        image: 'https://media.blueapron.com/recipes/33266/c_main_dish_images/1659366784-5200-0014-4748/0705_2P12_Steelhead-Trout-Poke-Bowl_243_horiz_Web_splash_feature.jpg',
        overall: 40,
        price: 25,
    },
    {
        id: 2,
        tag: 'lunch',
        mainTitle: 'Pancetta Jam \u0026 Cheddar Cheeseburgers',
        subTitle: 'with Arugula \u0026 Grape Salad',
        image: 'https://media.blueapron.com/recipes/33459/c_main_dish_images/1659366864-8426-0031-5130/0905_2P19_Pancetta-Jam-Parm-Mayo-Craft-Burger_470_Web_splash_feature.jpg',
        overall: 40,
        price: 40,
    },
    {
        id: 3,
        tag: 'shakes',
        mainTitle: 'Cheesy Truffle Cavatappi',
        subTitle: 'with Mushrooms \u0026 Kale',
        image: 'https://media.blueapron.com/recipes/34303/c_main_dish_images/1659368924-8018-0052-7429/H_E_CheesyTruffleCavatappi_horiz_splash_feature.jpg',
        overall: 5,
        price: 30,
    },
    {
        id: 4,
        tag: 'breakfast',
        mainTitle: 'Soy-Miso Chicken \u0026 Udon Noodles',
        subTitle: 'with Bok Choy \u0026 Mushrooms',
        image: 'https://media.blueapron.com/recipes/34304/c_main_dish_images/1659368901-8426-0047-0741/H_E_SoyMisoChickenUdonNoodle_horiz_Web_splash_feature.jpg',
        overall: 5,
        price: 50,
    },
    {
        id: 5,
        tag: 'lunch',
        mainTitle: 'Spanish-Style Beef \u0026 Rice',
        subTitle: 'with Red Peppers, Peas \u0026 Raisins',
        image: 'https://media.blueapron.com/recipes/34306/c_main_dish_images/1659368873-8018-0048-0221/H_E_SpanishBeefRice_horiz_splash_feature.jpg',
        overall: 5,
        price: 10,
    },
    {
        id: 6,
        tag: 'shakes',
        mainTitle: 'Shawarma-Spiced Chicken',
        subTitle: 'with Garlic-Tomato Couscous, Labneh \u0026 Almonds',
        image: 'https://media.blueapron.com/recipes/23762/c_main_dish_images/1659669369-49-0037-3035/0905_2P7_Morroccan-Chicken_064_Web_splash_feature.jpg',
        overall: 25,
        price: 25,
    },
    {
        id: 7,
        tag: 'breakfast',
        mainTitle: 'Oven-Baked Pesto Chicken \u0026 Orzo',
        subTitle: 'with Spinach, Tomatoes \u0026 Ricotta',
        image: 'https://media.blueapron.com/recipes/33203/c_main_dish_images/1659670776-48-0102-4280/0905_2P11_Pesto-Chicken-Orzo_221_Web_splash_feature.jpg',
        overall: 35,
        price: 40,
    },
    {
        id: 8,
        tag: 'lunch',
        mainTitle: 'Oven-Baked Sweet Chili Udon \u0026 Vegetables',
        subTitle: 'with Coconut Chips \u0026 Sesame Seeds',
        image: 'https://media.blueapron.com/recipes/33685/c_main_dish_images/1661525730-48-0003-2475/0905_2PV2_Sweet-Chili-Udon__026_Web_splash_feature.jpg',
        overall: 25,
        price: 30,
    },
    {
        id: 9,
        tag: 'shakes',
        mainTitle: 'Romesco Beef \u0026 Vegetables',
        subTitle: 'with Spanish-Spiced Rice \u0026 Lemon Mayo',
        image: 'https://media.blueapron.com/recipes/33775/c_main_dish_images/1659669284-15110-0081-2731/0905_2PM_Spanish-Spiced-Beef_034_Web_splash_feature.jpg',
        overall: 25,
        price: 100,
    },
    {
        id: 10,
        tag: 'breakfast',
        mainTitle: 'Shrimp Tacos \u0026 Peach Salsa',
        subTitle: 'with Roasted Potato Wedges',
        image: 'https://media.blueapron.com/recipes/33783/c_main_dish_images/1661527371-51-0001-0556/0905_2P9_Shrimp-Tacos-Peach-Salsa_071_Web_splash_feature.jpg',
        overall: 30,
        price: 20,
    },
];

export const SLIDER = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        name: 'maria ferguson',
        title: 'office manager',
        quote: 'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        name: 'john doe',
        title: 'regular guy',
        quote: 'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
        name: 'peter smith',
        title: 'product designer',
        quote: 'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        name: 'susan andersen',
        title: 'the boss',
        quote: 'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
    },
];
export const LOREM = [
    `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
    `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
    `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
    `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
    `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
  I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
    `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
    `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
    `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
    `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
];

export const LINKS = [
    {
        id: 1,
        url: '/',
        text: 'home',
    },
    {
        id: 2,
        url: '/about',
        text: 'about',
    },
    {
        id: 3,
        url: '/projects',
        text: 'projects',
    },
    {
        id: 4,
        url: '/contact',
        text: 'contact',
    },
    {
        id: 5,
        url: '/profile',
        text: 'profile',
    },
];

export const SOCIALS = [
    {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FaFacebook />,
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />,
    },
    {
        id: 3,
        url: 'https://www.twitter.com',
        icon: <FaLinkedin />,
    },
    {
        id: 4,
        url: 'https://www.twitter.com',
        icon: <FaBehance />,
    },
];
