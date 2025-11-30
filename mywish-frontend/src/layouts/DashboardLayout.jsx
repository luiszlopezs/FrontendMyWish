import { useState } from "react";

import CelebAndGiftCard from "../components/CelebAndGiftCard";

export default function DashboardLayout({
    title,
    showCreateButton = false,
    celebrations = [],
    giftLists = [],
    cardActionsCelebrations = [],
    cardActionsLists = []
}) {
    const [tab, setTab] = useState("celebraciones");

    const activeClass = "border-b-4 border-blue-500 text-blue-600";
    const inactiveClass = "text-gray-500 hover:text-blue-600 cursor-pointer";

    return (
        <div className="flex items-center flex-col max-w-[1200px] mx-auto px-4 py-8">

            {/* HEADER */}
            <div className="flex justify-between w-full mb-8">
                <h2 className="text-2xl font-semibold">{title}</h2>

                {showCreateButton && (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                        Crear 
                    </button>
                )}
            </div>


            {/* TABS */}
            <div className="flex w-full gap-16 border-b mb-6">

                <button
                    onClick={() => setTab("celebraciones")}
                    className={`text-xl font-semibold p-2 ${tab === "celebraciones" ? activeClass : inactiveClass}`}
                >
                    Celebraciones
                </button>

                <button
                    onClick={() => setTab("listas")}
                    className={`text-xl font-semibold p-2 ${tab === "listas" ? activeClass : inactiveClass}`}
                >
                    Lista de regalos
                </button>

            </div>


            {/* CONTENIDO DINÁMICO */}
            <section className="grid grid-cols-4 gap-8 w-full">

                {tab === "celebraciones" && celebrations.map(event => (
                    <CelebAndGiftCard
                        key={event.id}
                        {...event}
                        actions={cardActionsCelebrations}
                    />
                ))}

                {tab === "listas" && giftLists.map(list => (
                    <CelebAndGiftCard
                        key={list.id}
                        {...list}
                        actions={cardActionsLists}
                    />
                ))}

            </section>

        </div>
    );
}
