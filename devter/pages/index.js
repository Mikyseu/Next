import Head from "next/head";
import Link from 'next/link'
import { useRouter } from "next/router";
import AppLayout from "@/components/AppLayout";

export default function Home() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Create Next App</title>

                <link rel="icon" href="/favicon.ico" />
            </Head>


            <AppLayout>
                <h1>
                    <a href="https://nextjs.org">Devter</a>
                </h1>
                <nav>
                    <Link href="/timeline">

                        Timeline

                    </Link>
                </nav>
            </AppLayout>

            <style jsx>{`
                h1 {
                    text-align: center;
                    font-size: 48px;
                    
                }

                a {
                    color: red;
                    text-decoration: none;
                }

                nav {
                    font-size: 24px;
                    text-align: center;
                }

            `}</style>

        </>
    );
}