import Image from "next/image";

export default function GradientSection() {
    const images = Array.from({ length: 9}, () => ({
        src: "https://picsum.photos/id/50/300/200",
    }));

    return (
        <section className="h-[600px] w-full flex flex-col items-center justify-center text-white text-center z-0 mask-test">
            {/* Contenedor de imágenes */}
            <ul className="grid grid-cols-3 w-full h-full gap-3 pt-3 pb-3 place-items-center">
                {images.map((image, index) => (
                    <li key={index} className="h-[100%] w-[100%]  flex justify-center items-center relative">
<Image 
                            src={image.src} 
                            alt={`Placeholder ${index + 1}`} 
                            fill={true}
                            className="rounded-lg shadow-lg"
                        />                    </li>
                ))}
            </ul>
        </section>
    );
}
 /*
                         <Image 
                            src={image.src} 
                            alt={`Placeholder ${index + 1}`} 
                            fill={true}
                            className="rounded-lg shadow-lg"
                        />
 */