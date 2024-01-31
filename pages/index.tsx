import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ClickyColorChanger } from "@/components/ClickyColorChanger";

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24`}
        >
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <Link href={"/test_route"}>Go to the test page!</Link>
            </div>
            <ClickyColorChanger />
        </main>
    );
}
