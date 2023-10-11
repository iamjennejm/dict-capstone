import { Navbar } from "flowbite-react";
import Logo from "../components/Logo";
import "../assets/styles/index.css";

const navbarItems = ['Jobs', 'Companies', 'Profiles', 'About Us']
const navbarLinks = ['/jobs', '/companies', '/profiles', '/about-us']

function HeaderLayout() {
    
  let itemList = []

  for (let i of navbarItems) {
    itemList.push(<div className="items">{i}</div>)
  }

  const HeaderContent = (
      <Navbar
        fluid
        rounded
        className="navbar-custom shadow-xl" 
      >
        <Navbar.Brand
          href=""
        >
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {navbarItems.map((name, index)=> (
            <Navbar.Link
              key={name}
              href={navbarLinks[index]}
            >
            <p>{name}</p>
          </Navbar.Link>
          ))}

        </Navbar.Collapse>
        <a href="/login">
          <button className="loginBtn">
            Login
          </button>
        </a>
      </Navbar>
      
  )
  return HeaderContent
}

export default HeaderLayout