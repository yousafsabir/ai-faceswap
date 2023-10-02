import InitialCard from "@/components/home/InitialCard";

export default function Initial() {
    return (
        <section className="mx-auto">
            <h2 className="text-white text-center mb-6 text-xl">Choose Your Preferred Styles</h2>
            <main className="flex gap-5">
                {[
                    {
                        headerImg: "/images/img-professional-card-header.jpg",
                        heading: "Professional Styles",
                    },
                    {
                        headerImg: "/images/img-creative-card-header.jpg",
                        heading: "Creative Styles",
                    },
                ].map((card, i) => (
                    <InitialCard {...card} key={i} />
                ))}
            </main>
        </section>
    );
}
