import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      {/*<nav className="bg-white shadow p-4 flex gap-6">
        <Link to="/" className="text-blue-600 font-semibold">Inicio</Link>
        <Link to="/perfil" className="text-blue-600 font-semibold">Perfil</Link>
      </nav> */}
      <Navbar />

      {/* Aquí se renderizan las páginas */}
      <div >
        <Outlet />
      </div>
    </div>
  );
}
