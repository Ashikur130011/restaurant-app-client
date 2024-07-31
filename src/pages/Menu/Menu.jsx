import { Helmet} from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'pizza')
    const pizza = menu.filter(item => item.category === 'dessert')
    return (
        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>
            <Cover img={menuImg} heading="Our Menu"  subHeading="Would you like to try a dish?" />
            <SectionTitle
                subHeading="Don't miss"
                heading="TODAY'S OFFER"
            ></SectionTitle>
            <MenuCategory btnText={'ORDER YOUR FAVOURITE FOOD'} items={offered} />
            <MenuCategory 
                items={dessert}
                title={'Desserts'}
                img={dessertImg}
                text={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                btnText={'ORDER YOUR FAVOURITE FOOD'}
            />
            <MenuCategory 
                items={salad}
                title={'Salad'}
                img={saladImg}
                text={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                btnText={'ORDER YOUR FAVOURITE FOOD'}
            />
            <MenuCategory 
                items={pizza}
                title={'Pizza'}
                img={pizzaImg}
                text={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                btnText={'ORDER YOUR FAVOURITE FOOD'}
            />
            <MenuCategory 
                items={soup}
                title={'Soup'}
                img={soupImg}
                text={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                btnText={'ORDER YOUR FAVOURITE FOOD'}
            />
        </div>
    );
};

export default Menu;