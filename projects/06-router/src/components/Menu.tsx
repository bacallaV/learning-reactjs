import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth";

const routes: {
  to: string;
  name: string;
  privacity: 'public' | 'public-only' | 'private';
}[] = [
  {
    to: "/",
    name: "Home",
    privacity: 'public',
  },
  {
    to: "/blog",
    name: "Blog",
    privacity: 'public',
  },
  {
    to: "/profile",
    name: "Profile",
    privacity: 'private',
  },
  {
    to: "/login",
    name: "Iniciar sesión",
    privacity: 'public-only',
  },
  {
    to: "/logout",
    name: "Cerrar sesión",
    privacity: 'private',
  },
];

export function Menu() {
  const { user } = useAuth();

  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if (route.privacity === 'private' && !user) return null;

          if (route.privacity === 'public-only' && user) return null;

          return (
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
          )
        })}
      </ul>
    </nav>
  )
}

