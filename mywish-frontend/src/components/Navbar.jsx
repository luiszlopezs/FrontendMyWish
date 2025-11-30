export default function Navbar() {
    return (
        <nav className="bg-white/80 shadow flex gap-6 ">
            <div className="flex justify-between p-4 w-full max-w-[1200px] mx-auto">
                <div className="flex gap-4 items-center">
                <img src="/path/to/logo.png" alt="Logo" className="w-10 h-10" />
                <h1 className="font-bold text-blue-500 text-xl">MyWish</h1>
                </div>
                <div className="flex gap-12 items-center">
                    <a href="/" className="text-blue-600 font-semibold">Tiendas</a>
                    <a href="/eventos-invitado" className="text-blue-600 font-semibold">Eventos Invitado</a>
                    <a href="/mis-eventos" className="text-blue-600 font-semibold">Mis Eventos</a>
                    <a href="/perfil" className="text-blue-600 font-semibold">Mi perfil</a>
                </div>
            </div>


        </nav>
    );
}