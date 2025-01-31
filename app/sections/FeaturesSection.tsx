import Heading from "../components/Heading";

const cards = [
    {
        id: 1,
        title: "Fueling the Metaverse",
        desc: "The Metaverse is the next evolution of the internet, and you’re among its earliest pioneers. Together, we’ll drive its growth and unlock limitless possibilities.",
    },
    {
        id: 2,
        title: "Initial Metaverse Offering",
        desc: "Be part of the groundbreaking phase of the Metaverse. As an early explorer, you’ll play a key role in shaping its foundation and fueling its expansion.",
    },
    {
        id: 3,
        title: "Incubation",
        desc: "The Metaverse is in its infancy, and we’re here to nurture its growth. Join us as we develop innovative solutions to power this transformative digital frontier.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="w-full col center gap-4">
            <Heading
                heading="Key Features"
                subHeading="Access The Future"
                className="text-center"
            />
            <div className="row w-full justify-center gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-gradient-to-br from-white/10 col rounded-2xl items-start gap-4 py-6 px-4 md:flex-1"
                    >
                        <img
                            className="w-16 h-w-16"
                            src={`/assets/${card.id}.png`}
                            alt={card.title}
                        />
                        <h4 className="font-redzone text-2xl">{card.title}</h4>
                        <span className="text-app_gray/70">{card.desc}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
