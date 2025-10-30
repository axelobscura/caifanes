export default function Home() {
  return (
    <main className="min-h-screen flex-col custom-bg w-full">
      <div className="grid grid-cols-[1fr_2fr] place-items-center p-3">
        <h1 className="font-Rajdhani bg-blue-td text-7xl font-100 drop-shadow-lg text-left text-white align-middle justify-center">LOS CAIFANES</h1>
        <p className="font-Rajdhani text-left pr-5 sm:pr-1 pl-5 sm:pl-1 text-1xl drop-shadow-lg text-white">La palabra caifán es un mexicanismo, no muy usado en la época actual y casi restringido a la Ciudad de México, por lo que su definición se vuelve huidiza. Según Carlos Monsiváis, quien también aparece en la película, proviene de los mexicanos avecindados en California, conocidos como pachucos, que mezclan las palabras en español e inglés -cae fine-, que cae bien, -caifan-</p>
      </div>
    </main>
  );
}
