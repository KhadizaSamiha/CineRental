import Logo from "../assets/logo.svg"
import RingIcon from "../assets/ring.svg"
import MoonIcon from "../assets/icons/moon.svg"
import ShoppingCartIcon from "../assets/shoppingCart.svg"

const Header = () => {
  return (
    <header>
      <nav class="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul class="flex items-center space-x-5">
          <li>
            <a
              class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={RingIcon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={MoonIcon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={ShoppingCartIcon}
                width="24"
                height="24"
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
