import {useSelector} from "react-redux";
import {Logo} from "../index";
import {Link} from "react-router-dom";
import {Container} from "../../components/index";
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
      <Container>
        <header>
          <nav>
            <div className="px-10 py-6  flex justify-between items-center font-extrabold  text-black ">
              <div>
                <Logo />
              </div>

              <ul className="flex gap-6 text-[1.1rem] items-center">
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

              <ul className="flex gap-4 text-[1.1rem] items-center">
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
      </Container>
    </>
  );
};

export default Header;
