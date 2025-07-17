import {useSelector} from "react-redux";
import {Logo} from "../index";
import {Link} from "react-router-dom";
const Header = () => {
  const user = useSelector((state) => state.authSlice);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },

    {
      name: "Service",
      slug: "/service",
      active: true,
    },
    {
      name: "About",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/auth",
      active: !user,
    },
    {
      name: "Sign Up",
      slug: "/auth",
      active: !user,
    },
  ];

  return (
    <>
      <header>
        <nav>
          <div className="p-10 flex justify-between items-center border text-black">
            <div>
              <Logo />
            </div>

            <ul className="flex gap-6 items-center">
              {navItems.map(
                (item, i) =>
                  item.active &&
                  (item.name === "Home" ||
                    item.name === "Service" ||
                    item.name === "About") && (
                    <li
                      key={i}
                      className="text-black hover:underline cursor-pointer"
                    >
                      <Link to={item.slug}>{item.name}</Link>
                    </li>
                  )
              )}
            </ul>

            <ul className="flex gap-4 items-center">
              {navItems.map(
                (item, i) =>
                  item.active &&
                  (item.name === "Login" || item.name === "Sign Up") && (
                    <li
                      key={i}
                      className="text-black hover:underline cursor-pointer"
                    >
                      <Link to={item.slug}>{item.name}</Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
