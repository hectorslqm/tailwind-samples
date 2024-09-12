import Link from "next/link"


export default function Home() {
    return (
    <div className="text-center p-5 bg-slate-400 rounded-b-2xl flex items-end">
        <Link href="/PlayGround" className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-800 focus:outline-none focus:ring focus:ring-green-400 active:bg-blue-800">
            Open Playground
        </Link>
    </div>
    )
}