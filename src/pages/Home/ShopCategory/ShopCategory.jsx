import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import SingleCategory from "./SingleCategory";


const ShopCategory = () => {
    const [shops, setShops] = useState([]);
    const [activeTab, setActiveTab] = useState('marvel');
    const [tabIndex, setTabIndex] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:5000/all-toy/${activeTab}`)
            .then(res => res.json())
            .then(data => setShops(data))
    }, [activeTab])
    return (
        <div>
            
            <h2 className="text-5xl text-center my-5">Shop by Category</h2>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => 
                {
                    setTabIndex(index)
                    if(index===0){
                        setActiveTab('marvel');
                    }
                    if(index===1){
                        setActiveTab('avengers');
                    }
                    if(index===2){
                        setActiveTab('transformers');
                    }
                }
                }>
                <TabList>
                    <Tab>Marvel</Tab>
                    <Tab>Avenger</Tab>
                    <Tab>Transformers</Tab>
                </TabList>
                <TabPanel>
                <div className="grid md:grid-cols-4">
                {
                    shops.map(shop=><SingleCategory shop={shop} key={shop._id}></SingleCategory>)
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="grid md:grid-cols-4">
                {
                    shops.map(shop=><SingleCategory shop={shop} key={shop._id}></SingleCategory>)
                }
                </div>
                </TabPanel>
                <TabPanel>
                <div className="grid md:grid-cols-2">
                {
                    shops.map(shop=><SingleCategory shop={shop} key={shop._id}></SingleCategory>)
                }
                </div>
                </TabPanel>
            </Tabs>
            

        </div>
    );
};

export default ShopCategory;