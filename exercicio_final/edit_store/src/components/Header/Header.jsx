import Link from "./Link";
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src="" alt="logo" />
            <nav className="left_navigation">
               <Link text="SHOP" href="#" dropDown={true}></Link>
               <Link text="FABRIC" href="#" dropDown={true}></Link>
               <Link text="JOURNAL" href="#" dropDown={true}></Link>
               <Link text="ABOUT" href="#" dropDown={true}></Link>
            </nav>
            <nav className="right_navigation">
                <Link text="LOGIN" href="#" dropDown={false}></Link>
            </nav>
        </div>
    )
}

export default Header