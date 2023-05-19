import { useEffect, useState } from "react";


const ShopCategory = () => {
    const [shop,setShop] =useState([]);
    const [activeTab,setActiveTab] =useState('marvel');
    useEffect(()=>{
        fetch(`http://localhost:5000/all-toy/${activeTab}`)
        .then(res=>res.json())
        .then(data=>setShop(data))
    },[activeTab])
    return (
        <div>
            <h2>Shop by Category</h2>
        </div>
    );
};

export default ShopCategory;