import Image from "next/image";
import Nav from "./componentes/navigation/nav";

export default function Home() {
  return (
    <main id="desktop" className="scrollbar-hide flex flex-col gap-[3rem] h-[100dvh] ">
      <Nav/>
      <div className="h-full w-full">
      <Image 
      src={'/c/baldijm/bg-angel.jpg'}
      alt="bg angel"
      fill={true}
      objectFit="cover"
      />
      </div>
      <div className="absolute h-full w-full backdrop-blur-md"></div>
    </main>
  );
}

/*
    <main className="h-full overflow-auto">
      <section>
        <h1>
          
        </h1>
      </section>
    </main>
 */

/**
 <section className="h-screen flex flex-col items-center justify-center  text-white text-center p-6 bg-green-700">
 <h1 className="text-5xl font-bold mb-4">
   Tu negocio merece más que una web promedio.
 </h1>
 <p className="text-lg max-w-2xl">
   Creamos experiencias digitales rápidas, potentes y listas para vender. Webs que no solo se ven bien, sino que funcionan. 
 </p>
 <button className="mt-6 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
   Cuéntanos tu idea 🚀
 </button>
</section>
<section className=" py-20  text-center">
 <h2 className="text-4xl mb-10">¿Qué hacemos?</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
   <div className="p-6 bg-white shadow-md rounded-lg">
     <h3 className="text-xl ">Desarrollo Web a medida</h3>
     <p className="text-gray-600">
       Webs rápidas, seguras y escalables con Next.js. No más plantillas genéricas.
     </p>
   </div>
   <div className="p-6 bg-white shadow-md rounded-lg">
     <h3 className="text-xl ">Optimización y SEO</h3>
     <p className="text-gray-600">
       Acelera tu sitio, mejora su ranking en Google y convierte visitas en clientes.
     </p>
   </div>
   <div className="p-6 bg-white shadow-md rounded-lg">
     <h3 className="text-xl ">Apps y UI/UX que enamoran</h3>
     <p className="text-gray-600">
       Diseño centrado en el usuario y desarrollo que convierte ideas en productos.
     </p>
   </div>
 </div>
</section>

<section className=" py-20 text-center">
 <h2 className="text-4xl mb-6">Hablemos sin rodeos.</h2>
 <p className="mb-6">
   Si tu web es lenta, nadie la encuentra o no vende, necesitas una solución real. Nosotros te la damos.
 </p>
 <button className="px-6 py-3 bg-white text-blue-900  rounded-lg shadow-md hover:bg-gray-200 transition">
   Escríbenos 📩
 </button>
</section>

 */