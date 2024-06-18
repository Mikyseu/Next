
import { colors } from "@/styles/theme";

export default function Button({ children, onClick }) {
    return (
        <>
            <button onClick={onClick}>{children}</button>
            <style jsx>{`
                button {
                    align-items: center;
                    background-color: ${colors.black};
                    border: 0;
                    color: #fff;
                    border-radius: 9999px;
                    font-size: 16px;
                    padding: 8px 24px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: opacity 0.3s ease;
                    display: flex;
                    justify-content: center;
                    vertical-align: middle;
                }

                button > :global(svg) {
                    margin-right: 8px;
                }

                button:hover {
                    opacity: 0.8;
                }
            `}</style>
        </>
    );
}
