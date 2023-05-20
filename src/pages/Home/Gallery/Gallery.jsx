import { useEffect, useState } from "react";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
    const [galleryImage,setGalleryImage] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/toy-gallery')
        .then(res=>res.json())
        .then(data=>setGalleryImage(data))
    },[])
    return (

        <div className='grid grid-cols-4'>
            {
                galleryImage.map(im=><GalleryImage key={im._id} im={im}></GalleryImage>)
            }
            
        </div>
        
    );
};

export default Gallery;