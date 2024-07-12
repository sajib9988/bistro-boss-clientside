import { Helmet } from 'react-helmet-async';

import menuImg from '../assets/menu/menu-bg.jpg';
import soupImg from '../assets/menu/soup-bg.jpg';
import saladImg from '../assets/menu/salad-bg.jpg';
import pizzaImg from '../assets/menu/pizza-bg.jpg';
import dessertImg from '../assets/menu/dessert-bg.jpeg';



import Cover from '../Cover/Cover';
import useMenu from '../Hooks/useMenu';
import SectionTitle from '../SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';
import Navbar from '../Home/Navbar';
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <Navbar></Navbar>
            <Cover img={menuImg} title="our menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
        </div>
    );
};
export default Menu;
