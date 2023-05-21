import { useEffect, useState } from "react";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
    const [galleryImage,setGalleryImage] = useState([]);

    useEffect(()=>{
        fetch('https://my-avenger-server.vercel.app/toy-gallery')
        .then(res=>res.json())
        .then(data=>setGalleryImage(data))
    },[])
    return (
        <div>
            <h2 className="text-5xl text-center my-5">Gallery</h2>
        <div className='grid sm:grid-cols-1 lg:grid-cols-4'>
            {
                galleryImage.map(im=><GalleryImage key={im._id} im={im}></GalleryImage>)
            }
            
        </div>
        </div>
        
    );
};

export default Gallery;