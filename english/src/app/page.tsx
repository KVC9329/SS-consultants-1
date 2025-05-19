import Image from "next/image";
import Link from "next/link";
import PostForm from "../../components/postForm.jsx";
import GetList from "../../components/GetList.jsx";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1 className="text-3xl font-bold">Home</h1>
     <p>This is the home route</p>
     <nav>
      <ul className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </ul>
     </nav>
     <PostForm />
     <GetList />
    </div>
  );
}
