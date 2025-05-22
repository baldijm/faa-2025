import React from "react";
import ServiceCard from "./servicecard";

export default function FullNav() {
  return (
    <div className="text-white bg-black">
      {/* Header fijo */}
      <header className="sticky top-0 border-b border-gray-700 z-50 px-6 py-4 flex justify-between items-center bg-black">
        <h1 className="text-2xl font-bold">fulladminaccess</h1>
        <a
          href="https://wa.me/"
          className="text-sm bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition"
        >
          Contáctame
        </a>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 leading-tight text-white">
          Soluciones digitales para negocios reales
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Desde sitios web hasta sistemas completos. Te ayudo a digitalizar, automatizar y vender mejor.
        </p>
        <a
          href="https://wa.me/"
          className="inline-block bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-200 transition"
        >
          Solicita tu propuesta
        </a>
      </section>

      {/* Servicios */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-10 text-center text-white">Servicios</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            title="Sitios Profesionales"
            description="Webs rápidas, elegantes y funcionales que representan tu marca y convierten visitantes en clientes."
          />
          <ServiceCard
            title="Sistemas Internos"
            description="Automatiza procesos con paneles, dashboards, CRM o control de usuarios adaptado a tu negocio."
          />
          <ServiceCard
            title="Tienda Online"
            description="Tu ecommerce con pasarela de pago, inventario y gestión de pedidos. Desde el día uno."
          />
          <ServiceCard
            title="MVPs y Plataformas"
            description="Desarrollo ágil para validar tu idea de negocio. MVP funcional, escalable y preparado para crecer."
          />
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center py-20">
        <h4 className="text-2xl font-semibold mb-4 text-white">
          ¿Tienes una idea o proyecto en mente?
        </h4>
        <p className="mb-6 text-gray-300">
          Cuéntame lo que necesitas y te ayudo a llevarlo a la realidad.
        </p>
        <a
          href="https://wa.me/"
          className="bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-200 transition"
        >
          Escríbeme ahora
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-700 text-sm text-center text-gray-400">
        &copy; {new Date().getFullYear()} FullAdminAccess. Todos los derechos reservados.
      </footer>
    </div>
  );
}
