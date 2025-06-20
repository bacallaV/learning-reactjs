import { NavLink } from "react-router-dom";

const routes = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/blog",
    name: "Blog",
  },
  {
    to: "/profile",
    name: "Profile",
  },
];

export function Menu() {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li>
            <NavLink
              to={route.to}
              style={({ isActive }) => ({  
                color: isActive ? 'red' : 'blue'
              })}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

