import { useState } from "react";

import arrow from "../../assets/arrow_down.png";

const LinkArrow = () => {
    const [isActive, setActive] = useState(false);

    return (
        <img className={isActive ? 'link_arrow link_arrow--active' : 'link_arrow link_arrow--innactive'} 
             src={arrow}
             onClick={()=> setActive(!isActive)}
        />
    );
}

export default LinkArrow;