export default function PageDefault({ children }) {
    return (
        <>
            <div className="container py-40">
                <div className="flex justify-center">
                    <div className="w-11/12 lg:w-10/12 xl:w-8/12">
                        <div className="content">{children}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
