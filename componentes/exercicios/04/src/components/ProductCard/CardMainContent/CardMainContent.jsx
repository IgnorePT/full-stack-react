const CardMainContent = ({title, description}) => {

      return (
        <div className="main-content">
            <h2 className="title">
                {title}
            </h2>
            <p className="description">
                {description}
            </p>
        </div>
      );
};
    
export default CardMainContent;