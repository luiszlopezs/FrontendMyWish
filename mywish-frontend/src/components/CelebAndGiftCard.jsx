export default function CelebAndGiftCard({ title, date, img, actions = [] }) {
    return (
        <div className="flex flex-col items-center bg-white/80 p-4 rounded-lg shadow-md hover:shadow-lg">
            
            <img src={img} alt="Celebration" className="w-[100px] h-[100px] mb-4"/>

            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{date}</p>

            <section className="flex flex-wrap gap-2 justify-center mt-3">
                {actions.map((action, idx) => (
                    <button
                        key={idx}
                        className="px-3 py-1 bg-blue-500 text-white rounded"
                        onClick={action.onClick}
                    >
                        {action.label}
                    </button>
                ))}
            </section>

        </div>
    );
}
