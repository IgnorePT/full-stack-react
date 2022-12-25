import LinkArrow from "./LinkArrow";

const Link = (props) => {
    if(props.dropDown == undefined) props.dropDown = false;

    return (
        <div className="navigation_link">
            <a href={props.href}>{props.text}</a>
            {props.dropDown && <LinkArrow/>}
        </div>
    )
}

export default Link;