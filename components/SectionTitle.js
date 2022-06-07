export default function SectionTitle({left, children}) {
    return (
        <h2 className={`font-semibold text-2xl font-mono ${!left ? " text-center" : ""}`}>{children}</h2>
    );
};
