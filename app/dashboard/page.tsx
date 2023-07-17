import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav className="text-center h-20">
      <div>
        <h1 className="flex text-3xl h-20 justify-center items-center">This is Dashboard</h1>
      </div>
    </nav>
    <ul id="side-menu" className="w-60 h-screen flex flex-col gap-10">
      <li className="text-center mt-5">
      <Link href="/">Home</Link>
      </li>

      <li className="text-center mt-5">
        Dashboard
      </li>
    </ul>
  </>
  )
}