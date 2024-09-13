import Link from "next/link"


export default function Home() {
    return (
    <div className="h-full text-center pt-5 bg-slate-400 rounded-b-2xl flex flex-row ">
        <Link href="/PlayGround" className="gradient-button">
            Open Playground
        </Link>
    </div>
    )
}