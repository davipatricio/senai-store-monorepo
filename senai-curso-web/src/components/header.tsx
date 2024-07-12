import { Link } from "react-router-dom";
import Gopher from "../assets/gopher.png";

export default function Header() {
  return (
    <header className="flex flex-wrap gap-2 md:gap-20 p-4 justify-evenly items-center bg-neutral-950 border-b border-neutral-700 min-h-16">
      <div className="size-14 flex items-center justify-center">
        <Link to="/">
          <img src={Gopher} className="object-fill" />
        </Link>
      </div>
      <nav className="flex flex-wrap justify-center gap-4 sm:text-lg">
        <Link className="font-bold hover:underline" to="/">
          Home
        </Link>
        <Link
          className="font-bold hover:underline text-center"
          to="/cadastro-produtos"
        >
          Cadastro de Produtos
        </Link>
        <Link className="font-bold hover:underline text-center" to="/#">
          Lista de Produtos
        </Link>
      </nav>
    </header>
  );
}
