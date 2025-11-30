import DashboardLayout from "../../layouts/DashboardLayout";

export default function EventosInvitado(){

    const celebrations = [
        { id: 1, title: "Graduación", date:"2024-05-20", img:"/img/g.png" }
    ];

        const giftLists = [
        { id: 1, title: "regalos de 15", date:"2024-04-20", img:"/img/g.png" }
    ];

    return (
        <DashboardLayout
            title="Eventos Invitado"
            celebrations={celebrations}
            giftLists={giftLists}
            cardActionsCelebrations={[
                { label: "Ver", onClick: () => alert("Ver") }
            ]}
        />
    );
}
