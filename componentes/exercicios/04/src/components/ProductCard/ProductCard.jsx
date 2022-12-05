import './styles.css';

import CardHeader from './CardHeader/CardHeader';
import CardMainContent from './CardMainContent/CardMainContent';
import CardFooter from './CardFooter/CardFooter';
import CardMainImage from './CardMainImage/CardMainImage';


const ProductCard = ({product}) => {
   return ( 
        <div className="product-card">
            <div className="card-body">

                < CardHeader 
                    brandLogo = {product.brandLogo}
                    brandName = {product.brandName}
                    price = {product.price}
                />

                < CardMainContent
                    title = {product.title}
                    description  = {product.description}
                />

                <span className="text-effect">{product.productName}</span>
            </div>

            < CardMainImage 
                imageDescription = {product.imageDescription}
            />

            < CardFooter 
                category = {product.category}
                inStock  = {product.inStock}
            />
           
        </div>)

}

export default ProductCard