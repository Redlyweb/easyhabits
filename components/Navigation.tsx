import Link from "next/link";
import GoogleAuthButton from "./GoogleAuthButton";

export default function Navigation() {
  
  return (
    <nav className="max-w-screen-sm mx-auto flex justify-between p-4 mt-5 items-center">
      <Link href='/' className="font-bold">Easy Habits</Link>
      <GoogleAuthButton/>
    </nav>
  )
}
