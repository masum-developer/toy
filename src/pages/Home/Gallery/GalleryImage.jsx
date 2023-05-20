

const GalleryImage = ({im}) => {
    const {toyPicture}=im;
    return (
        <div className="card w-60 h-60 bg-base-100 shadow-xl mt-5">
            
                
            <img src={toyPicture} className="w-full h-full" alt="toy" />
            
            
        </div>
    );
};

export default GalleryImage;