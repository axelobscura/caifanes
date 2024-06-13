import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-hero-image items-center justify-center p-24">
      <h1 className="font-Rajdhani bg-blue-td text-8xl font-100 drop-shadow-lg border-b border-gray-100">LOS CAIFANES</h1>
      <p className="font-Rajdhani text-center pr-5 pl-5 text-2xl mt-3 drop-shadow-lg">La palabra caifán es un mexicanismo, no muy usado en la época actual y casi restringido a la Ciudad de México, por lo que su definición se vuelve huidiza. Según Carlos Monsiváis, quien también aparece en la película, proviene de los mexicanos avecindados en California, conocidos como pachucos, que mezclan las palabras en español e inglés "cae fine", que cae bien, "caifan"</p>
    </main>
  );
}
