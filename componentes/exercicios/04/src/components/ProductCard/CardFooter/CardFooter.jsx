const  isInstock = (inStock) => {
     if (inStock){
         return 'Buy'
     }
 
     return 'Sold out';
 }

const CardFooter = ({category, inStock}) => {

      return (
        <div className="card-footer">
            <button className="btn-buy">
            {isInstock(inStock)}
            </button>
            <span className="product-category">{category}</span>
        </div>
      );
    };
    
    export default CardFooter;