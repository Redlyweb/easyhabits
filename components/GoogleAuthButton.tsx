'use client'
import { FcGoogle } from "react-icons/fc";
import { useSession, signOut, signIn } from "next-auth/react";
export default function GoogleAuthButton() {

  const session = useSession()

  if(!session.data) {
    return (
      <button onClick={() => signIn('google')} className="bg-white text-black flex items-center py-2.5 px-4 rounded cursor-pointer">
        <FcGoogle className="mr-1"/>
        Sign in with Google
      </button>
    )
  } else {
    return (
      <button className="cursor-pointer bg-sky-600 px-4 py-2.5 rounded" onClick={() => signOut({callbackUrl: '/'})}>
        Sign Out
      </button>
    )
  }
}
