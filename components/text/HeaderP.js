export default function HeaderP({ children, classes }) {
    return (
        <>
            <p className={`text-lg ${classes} last:mb-0`}>{children}</p>
        </>
    );
}
