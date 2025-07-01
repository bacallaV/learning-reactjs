import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { useEffect, useState } from "react";

const ROUTES: {
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
  const [routes, setRoutes] = useState(ROUTES);

  useEffect(() => {
    // Update the profile route to include the username if the user is logged in
    if (user) {
      setRoutes((prevRoutes) => {
        const index = prevRoutes.findIndex((prevRoute) => prevRoute.to.includes('profile'));

        prevRoutes[index] = {
          ...prevRoutes[index],
          to: `/profile/${user.username}`,
        }

        return [...prevRoutes];
      });
    }
  }, [user]);


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

