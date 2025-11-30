import DashboardLayout from "../../layouts/DashboardLayout";

export default function MisEventos() {

    const celebrations = [
        { id: 1, title: "Birthday", date: "2024-06-15", img: "/img/b1.png" },
        { id: 2, title: "Wedding", date: "2024-08-01", img: "/img/w1.png" }
    ];

    const giftLists = [
        { id: 1, title: "gitlistbirth", date: "2024-06-35", img: "/img/b1.png" },
        { id: 2, title: "giftlistbayshower", date: "2024-08-04", img: "/img/w1.png" }
    ];


    const celebrationActions = [
        { label: "Editar", onClick: () => alert("Editar") },
        { label: "Invitar", onClick: () => alert("Invitar") },
        { label: "Conectar con Lista", onClick: () => alert("Conectar") }
    ];

    const listActions = [
        { label: "Editar", onClick: () => alert("Editar") },
        { label: "Invitar", onClick: () => alert("Invitar") },
        { label: "Añadir regalo", onClick: () => alert("Añadir") },
        { label: "Conectar con Celebracion", onClick: () => alert("Conectar") }
    ];

    return (
        <DashboardLayout
            title="Mis Eventos"
            showCreateButton={true}
            celebrations={celebrations}
            giftLists={giftLists}
            cardActionsCelebrations={celebrationActions}
            cardActionsLists={listActions}
        />
    );
}
