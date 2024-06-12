export default function AppLayout({ children }) {
    return (
        <>
            <main>
                {children}
            </main>
            <style jsx global>{`
                html, body  {
                    padding: 0;
                    margin: 0;
                    font-family: common-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </>
    );
}
