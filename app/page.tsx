import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="text-center h-20">
        <div>
          <h1 className="flex text-3xl h-20 justify-center items-center">This is Home</h1>
        </div>
      </nav>
      <div className="flex">
        <ul id="side-menu" className="w-60 h-screen flex flex-col gap-10">
          <li className="text-center mt-5">Home</li>

          <li className="text-center mt-5">
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <div className="flex w-screen items-center justify-center">
          <h1 className="text-3xl">hello world</h1>
        </div>
      </div>
    </>
  );
}
