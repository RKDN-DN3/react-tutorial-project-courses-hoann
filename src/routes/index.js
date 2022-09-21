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

import Sidebar from '../projects/sidebar';
import sidebar_thumb from '../assets/images/sidebar_thumb.png';

import Stripe from '../projects/stripe';
import stripe_thumb from '../assets/images/stripe_thumb.png';

import Card from '../projects/card';
import card_thumb from '../assets/images/card_thumb.png';

import Cocktails from '../projects/cocktails';
import cocktails_thumb from '../assets/images/cocktails_thumb.png';

import About from '../projects/cocktails/pages/About';
import CocktailDetail from '../projects/cocktails/components/CocktailDetail';
import CocktailNavbar from '../projects/cocktails/Navbar';

import Markdown from '../projects/markdown';
import markdown_thumb from '../assets/images/markdown_thumb.png';

import CardRedux from '../projects/card-redux';

import RandomPerson from '../projects/random-person';
import random_thumb from '../assets/images/random_thumb.png';

import Paging from '../projects/pagination';
import paging_thumb from '../assets/images/paging_thumb.png';

import StockPhotos from '../projects/stock';
import stock_thumb from '../assets/images/stock_thumb.png';

import DarkMode from '../projects/dark-mode';
import darkmode_thumb from '../assets/images/darkmode_thumb.png';

import Movie from '../projects/movie-store';
import movie_thumb from '../assets/images/movie_thumb.png';

const publicRoutes = [
    { path: routes.home, component: Home, name: 'Home', type: 'basic projects', display: false },
    {
        path: routes.birthdate,
        component: Birthdate,
        name: 'Birthdates reminder',
        img: birthdate_thumb,
        type: 'basic projects',
        display: true,
    },
    { path: routes.tours, component: Tours, name: 'Tours', img: tours_thumb, type: 'basic projects', display: true },
    {
        path: routes.reviews,
        component: Reviews,
        name: 'Reviews',
        img: reviews_thumb,
        type: 'basic projects',
        display: true,
    },
    {
        path: routes.accordion,
        component: Accordion,
        name: 'Accordion',
        img: ccordion_thumb,
        type: 'basic projects',
        display: true,
    },
    { path: routes.menu, component: Menu, name: 'Menu', img: menu_thumb, type: 'basic projects', display: true },
    { path: routes.tabs, component: Tabs, name: 'Tabs', img: tabs_thumb, type: 'basic projects', display: true },
    {
        path: routes.slider,
        component: Slider,
        name: 'Slider',
        img: slider_thumb,
        type: 'basic projects',
        display: true,
    },
    { path: routes.lorem, component: Lorem, name: 'Lorem', img: lorem_thumb, type: 'basic projects', display: true },
    {
        path: routes.color,
        component: Color,
        name: 'Color Genarate',
        img: color_thumb,
        type: 'basic projects',
        display: true,
    },
    {
        path: routes.grocery,
        component: Grocery,
        name: 'Grocery Bud',
        img: grocery_thumb,
        type: 'basic projects',
        display: true,
    },
    {
        path: routes.navbar,
        component: Navbar,
        name: 'Navbar',
        img: navbar_thumb,
        type: 'basic projects',
        display: true,
    },
    {
        path: routes.sidebar,
        component: Sidebar,
        name: 'Sidebar And Modal',
        img: sidebar_thumb,
        type: 'basic projects',
        display: true,
    },
    {
        path: routes.stripe,
        component: Stripe,
        name: 'Stripe Menu',
        img: stripe_thumb,
        type: 'basic projects',
        display: true,
    },
    { path: routes.card, component: Card, name: 'Card', img: card_thumb, type: 'basic projects', display: true },
    {
        path: routes.cocktails,
        component: Cocktails,
        name: 'Cocktails',
        img: cocktails_thumb,
        layout: CocktailNavbar,
        type: 'basic projects',
        display: true,
    },
    { path: routes.cocktailsAbout, component: About, layout: CocktailNavbar, display: false },
    { path: routes.cocktailsDetail, component: CocktailDetail, layout: CocktailNavbar, display: false },
    {
        path: routes.markdown,
        component: Markdown,
        name: 'Markdown Preview',
        img: markdown_thumb,
        type: 'course exclusive',
        display: true,
    },
    {
        path: routes.card_redux,
        component: CardRedux,
        name: 'Card with Redux Toolkit',
        img: card_thumb,
        type: 'course exclusive',
        display: true,
    },
    {
        path: routes.random_person,
        component: RandomPerson,
        name: 'Random Person',
        img: random_thumb,
        type: 'course exclusive',
        display: true,
    },
    {
        path: routes.paging,
        component: Paging,
        name: 'Pagination',
        img: paging_thumb,
        type: 'course exclusive',
        display: true,
    },
    {
        path: routes.stock,
        component: StockPhotos,
        name: 'Stock Photos',
        img: stock_thumb,
        type: 'course exclusive',
        display: true,
    },
    {
        path: routes.dark,
        component: DarkMode,
        name: 'Dark Mode',
        img: darkmode_thumb,
        type: 'course exclusive',
        display: true,
    },
    {
        path: routes.movie,
        component: Movie,
        name: 'Movie DB',
        img: movie_thumb,
        type: 'course exclusive',
        display: true,
    },
];

export { publicRoutes };
