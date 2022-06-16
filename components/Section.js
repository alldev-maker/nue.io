export default function Section({ children, bgColor = "bg-transparent" }) {
    return (
        <section className={`relative z-10 overflow-hidden ${bgColor}`}>
            {children}
        </section>
    );
}
