import { useEffect,useState,useContext } from "react";
import {useLocation ,useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { BiHeart } from "react-icons/bi";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";



import "./Header.scss";
const Header = () => {
    const  [scrolled,setScrolled] = useState(true);
    const  [showCart,setShowCart] = useState(false);
    const  [showSearch,setShowSearch] = useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    

    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 200) {
          setScrolled(true);
        }else{
            setScrolled(false);
        }
      }
     useEffect (() => {
        window.addEventListener("scroll",handleScroll)
     },[])

     const scrollToCategories = () => {
        const section = document.getElementById("categories");
        if (section) {
            const offset = 100; // Adjust this value based on your header height
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }
    };

    
    const scrollToProducts = () => {
        const section = document.getElementById("products");
        if (section) {
            const offset = 100; // Adjust this value based on your header height
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: sectionPosition, behavior: "smooth" });
        }
    };

    const scrollTohome = () => {
        if (location.pathname !== "/") {
            navigate("/"); // Navigate first
        }

        // Wait for the homepage to load, then scroll
        setTimeout(() => {
            const section = document.getElementById("home");
            if (section) {
                const header = document.querySelector(".main-header");
                const offset = header ? header.offsetHeight + 100 : 150;
                const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
                
                // Ensure smooth scrolling happens after navigation
                requestAnimationFrame(() => {
                    window.scrollTo({ top: sectionPosition, behavior: "smooth" });
                });
            }
        }, 100); // Increased delay to ensure page loads fully
    };

    
    

    return (
        <>
    <header className={`main-header ${scrolled ? "sticky-header": ""}`}>
        <div className="header-content" >
            <ul className="left">
                <li onClick={scrollTohome}>Home</li>
                <li>About</li>
                <li onClick={scrollToCategories}>Categories</li>
                <li onClick={scrollToProducts}>Products</li>

            </ul>
            <div className="center" onClick={scrollTohome}>Mojri.</div>
            <div className="right">
                <TbSearch onClick={()=> setShowSearch(true)} />
                <BiHeart />
                <span className="cart-icon"
                 onClick={()=> setShowCart(true)}>
                    <CgShoppingCart />
                    {!! cartCount && <span>{cartCount}</span>}

                </span>
            </div>
        </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart} />}
    {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
    );
};

export default Header;
