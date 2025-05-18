import Logo from "../assets/logo.svg";
import RingIcon from "../assets/ring.svg";
import MoonIcon from "../assets/icons/moon.svg";
import ShoppingCartIcon from "../assets/shoppingCart.svg";
import { useState } from "react";
import CartDetails from '../components/cine/CartDetails'

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleCartShow = () =>{
    setShowCart(!showCart)
  }
  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)}/>}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={RingIcon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={MoonIcon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
             onClick={handleCartShow}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ShoppingCartIcon} width="24" height="24" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
