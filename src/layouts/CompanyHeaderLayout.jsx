import { Navbar } from "flowbite-react";
import Logo from "../components/Logo";
import "../assets/styles/index.css";

const navbarItems = ["Jobs", "Companies", "Profiles", "About Us"];
const navbarLinks = ["/jobs", "/companies", "/profiles", "/about-us"];

function HeaderLayout() {
  // Assume you have a variable to track the user's login status, e.g., isLoggedIn
  const isLoggedIn = false; // Replace with your logic to determine the user's login status

  const itemList = navbarItems.map((name, index) => (
    <div className="items" key={name}>
      {name}
    </div>
  ));

  const HeaderContent = (
    <Navbar fluid rounded>
      <Navbar.Brand href="">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navbarItems.map((name, index) => (
          <Navbar.Link key={name} href={navbarLinks[index]}>
            <p>{name}</p>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
      {isLoggedIn ? null : (
        <div className="loginBtn">
          <a href="/login">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Login
            </button>
          </a>
        </div>
      )}
    </Navbar>
  );

  return HeaderContent;
}

export default HeaderLayout;
