import routes from '../config/routes';
import Home from '../components/Home';
import Birthdate from '../projects/birthdate-reminder';
import birthdate_thumb from '../assets/images/birthdate_thumb.png';

import Tours from '../projects/tours';
import tours_thumb from '../assets/images/tours_thumb.png';

import Reviews from '../projects/reviews';
import reviews_thumb from '../assets/images/reviews_thumb.png';

import Accordion from '../projects/accordion';
import ccordion_thumb from '../assets/images/accordion_thumb.png';

import Menu from '../projects/menu';
import menu_thumb from '../assets/images/menu_thumb.png';

import Tabs from '../projects/tabs';
import tabs_thumb from '../assets/images/tabs_thumb.png';

import Slider from '../projects/slider';
import slider_thumb from '../assets/images/slider_thumb.png';

import Lorem from '../projects/lorem';
import lorem_thumb from '../assets/images/lorem_thumb.png';

import Color from '../projects/color-genarate';
import color_thumb from '../assets/images/color_thumb.png';

import Grocery from '../projects/grocery';
import grocery_thumb from '../assets/images/grocery_thumb.png';

import Navbar from '../projects/navbar';
import navbar_thumb from '../assets/images/navbar_thumb.png';

const publicRoutes = [
    { path: routes.home, component: Home, name: 'Home' },
    { path: routes.birthdate, component: Birthdate, name: 'Birthdates reminder', img: birthdate_thumb },
    { path: routes.tours, component: Tours, name: 'Tours', img: tours_thumb },
    { path: routes.reviews, component: Reviews, name: 'Reviews', img: reviews_thumb },
    { path: routes.accordion, component: Accordion, name: 'Accordion', img: ccordion_thumb },
    { path: routes.menu, component: Menu, name: 'Menu', img: menu_thumb },
    { path: routes.tabs, component: Tabs, name: 'Tabs', img: tabs_thumb },
    { path: routes.slider, component: Slider, name: 'Slider', img: slider_thumb },
    { path: routes.lorem, component: Lorem, name: 'Lorem', img: lorem_thumb },
    { path: routes.color, component: Color, name: 'Color Genarate', img: color_thumb },
    { path: routes.grocery, component: Grocery, name: 'Grocery Bud', img: grocery_thumb },
    { path: routes.navbar, component: Navbar, name: 'Navbar', img: navbar_thumb },
];

export { publicRoutes };
