"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavbarVisibility({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Obtener la ruta actual
  const [shouldShowNavbar, setShouldShowNavbar] = useState(true);

  // Este effect se ejecuta cuando cambie la ruta (pathname)
  useEffect(() => {
    const hideNavbarRoutes = ["/projects-development", "/projects-development/transvium"]; // Rutas donde ocultamos la navbar
    setShouldShowNavbar(!hideNavbarRoutes.includes(pathname)); // Si estamos en la ruta que queremos ocultar
  }, [pathname]); // Dependemos de pathname para ejecutarse cuando cambie la ruta

  if (!shouldShowNavbar) return null; // Si no debemos mostrar la navbar, no renderizamos nada

  return <>{children}</>; // Si debemos mostrar la navbar, mostramos los hijos (lo que envuelvas)
}
