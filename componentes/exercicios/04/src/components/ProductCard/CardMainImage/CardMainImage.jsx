//images
import shoeImage from './../../../assets/images/nike19.png';

const CardMainImage = (imageDescription) => {

    return (
        <div className="main-image">
        <img src={shoeImage} alt={imageDescription} className="featured-image"/>
    </div>
    );
  };
  
  export default CardMainImage;