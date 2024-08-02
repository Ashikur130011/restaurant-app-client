import Cover from '../../Shared/Cover/Cover';
import orderImg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../FoodCard/FoodCard';
import OrderTab from '../../OrderTab/OrderTab';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex)



    const [menu] = useMenu()
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'pizza')
    const pizza = menu.filter(item => item.category === 'dessert')
    return (
        <div className='mb-12'>
            <Helmet>
                <title>Restaurant | Food</title>
            </Helmet>
            <Cover img={orderImg} heading="Our Food" subHeading="Would you like to try a dish ?" />
            <Tabs  className='mt-12 font-serif text-orange-500' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad} />
                </TabPanel>
                <TabPanel><OrderTab items={pizza} /></TabPanel>
                <TabPanel><OrderTab items={soup} /></TabPanel>
                <TabPanel><OrderTab items={dessert} /></TabPanel>
                <TabPanel><OrderTab items={drinks} /></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;