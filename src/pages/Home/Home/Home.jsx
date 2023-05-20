import { useEffect } from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import Aos from "aos";
import 'aos/dist/aos.css';



const Home = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-3'>
            <Gallery></Gallery>
            <Gallery></Gallery>
            <Gallery></Gallery>
            <Gallery></Gallery>
            <Gallery></Gallery>
            </div>
            <Gallery></Gallery>
            <h2 className="text-5xl text-center my-5">Best selling product category</h2>
            <div className="flex  justify-items-center align-center">
                <div className="text-white bg-black  p-5 m-5 w-60 h-60" data-aos ="fade-right">
                    {/* <h1>Box 1</h1> */}
                    <img className="w-full h-full" src="https://i.ibb.co/wcjTCFL/spiderman-3093340-960-720.jpg" alt="" />
                    <h2 className="text-center">Marvel</h2>
                </div>
                <div className="text-white bg-black p-5 m-5 w-60 h-60" data-aos ="fade-left">
                    <img src="https://i.ibb.co/gtN4zcJ/avenger-hulk-hero-4340712-640.jpg" className="w-full h-full" alt="" />
                    <h2 className="text-center">Avengers</h2>
                </div>
                <div className="text-white bg-black p-5 m-5 w-60 h-60" data-aos ="fade-down">
                    <img className="w-full h-full" src="https://i.ibb.co/dp6nq2Q/transformer-7269271-640.jpg" alt="" />
                    <h2 className="text-center">Transformers</h2>
                </div>
                <div className="text-white bg-black p-5 m-5 w-60 h-60" data-aos ="fade-up">
                <img className="w-full h-full" src="https://i.ibb.co/RDgfTY5/starwars.jpg" alt="" />
                    <h2 className="text-center">Star Wars</h2>
                    
                </div>
            </div>
            <div className="text-center">
            <ShopCategory></ShopCategory>
            </div>
            
        </div>
    );
};

export default Home;