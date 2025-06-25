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
  {
    to: "/login",
    name: "Iniciar sesión",
  },
  {
    to: "/logout",
    name: "Cerrar sesión",
  },
];

export function Menu() {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.to}>
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

