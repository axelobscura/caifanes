export default function Home() {
  return (
    <main className="min-h-screen flex-col custom-bg w-full">
      <div className="grid grid-cols-[1fr] place-items-center items-center justify-center p-3 min-h-screen bg-[url('/caifanes.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat h-auto">
        <div className="px-96">
          <h1 className="font-Rajdhani bg-blue-td text-9xl font-bold drop-shadow-lg text-center text-white align-middle justify-center">LOS CAIFANES</h1>
          <p className="font-Rajdhani text-center pr-5 sm:pr-1 pl-5 sm:pl-1 text-1xl drop-shadow-lg text-white pb-4">La palabra caifán es un mexicanismo, no muy usado en la época actual y casi restringido a la Ciudad de México, por lo que su definición se vuelve huidiza. Según Carlos Monsiváis, quien también aparece en la película, proviene de los mexicanos avecindados en California, conocidos como pachucos, que mezclan las palabras en español e inglés -cae fine-, que cae bien, -caifan-</p>
          <p className="font-Rajdhani text-center text-white">La emblemática cinta se filmó en la época navideña de 1966 y se estrenó en 1967, en la cual <b>Óscar Chávez</b> actúo bajo la dirección de <b>Juan Ibáñez</b>, interpretando aquí al “Estilos”, un caifán que se las daba del más sácale punta. Chávez reveló varios detalles de la película en una entrevista inédita que dio antes de morir, en donde contó que en el guión se tenía contemplado que fueran 5 caifanes los que integrarán el grupo, pero al final quedaron cuatro y lo que se tenía escrito para ese quinto miembro, le fue entregado al personaje de Chávez, por lo que su <b>“Estilos”</b>, fue acompañado por <b>“Capitán Gato”</b>, <b>“Mazacote”</b> y el <b>“Azteca”</b>.</p>
        </div>
      </div>
    </main>
  );
}
