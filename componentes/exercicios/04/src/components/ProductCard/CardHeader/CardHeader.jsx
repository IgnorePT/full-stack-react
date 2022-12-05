const CardHeader = (props) => {
// Props é um objecto:
// {brandLogo : string, brandName : string, price : number}
  return (
    <div className="card-header">
      <div className="brand">
        <img src={props.brandLogo} alt={props['brandName']} />
      </div>
      <div className="price">
        <span>{props.price.toFixed()}€</span>
      </div>
    </div>
  );
};

export default CardHeader;
