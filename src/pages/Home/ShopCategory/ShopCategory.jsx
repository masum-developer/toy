import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const ShopCategory = () => {
    const [shop, setShop] = useState([]);
    const [activeTab, setActiveTab] = useState('marvel');
    const [tabIndex, setTabIndex] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:5000/all-toy/${activeTab}`)
            .then(res => res.json())
            .then(data => setShop(data))
    }, [activeTab])
    return (
        <div>
            <h2>Shop by Category</h2>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
                <TabPanel>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi et velit non libero quam dolor eligendi exercitationem debitis reprehenderit facere ipsa, ex sint! Dolore dicta eligendi magnam distinctio, aut a?</p>
                </TabPanel>
                <TabPanel>
                    <p>masum</p>
                </TabPanel>
                <TabPanel>
                    <p>Tinni</p>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;