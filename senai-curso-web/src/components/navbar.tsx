import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <aside className="hidden sm:flex flex-col min-h-full max-w-[260px] w-full p-4 bg-neutral-950 border-r border-neutral-700">
      <h1 className="font-bold text-lg">Departamentos</h1>
      <div className="flex flex-col ml-2">
        <Link className="hover:underline" to="#">
          Celulares
        </Link>
        <Link className="hover:underline" to="#">
          Computadores
        </Link>
        <Link className="hover:underline" to="#">
          Teclados
        </Link>
        <Link className="hover:underline" to="#">
          Mouses
        </Link>
      </div>
      <h1 className="font-bold text-lg mt-4">Lawg Store</h1>
      <div className="flex flex-col ml-2">
        <Link className="hover:underline" to="#">
          Sobre nós
        </Link>
        <Link className="hover:underline" to="#">
          Política de Privacidade
        </Link>
      </div>
    </aside>
  );
}
