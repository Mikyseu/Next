import AppLayout from "@/components/AppLayout";
import Link from "next/link";

export default function Timeline({ userName }) {
    return (
        <>
            <AppLayout>
                <h1>This is the timeline of {userName}</h1>
                <Link href="/">Go home</Link>
                <style jsx>{`
            h1 {
                
                font-size: 48px;
                color: red;
            }
        `}</style>
            </AppLayout>
        </>

    );
}

Timeline.getInitialProps = () => {
    return fetch('http://localhost:3000/api/hello')
        .then(res => res.json())
}