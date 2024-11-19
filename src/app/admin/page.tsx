"use client"
import { signIn, signOut, useSession } from 'next-auth/react'

const Admin = () => {
  const session = useSession()
  
  return (
    <div>
      {/* <button onClick={async () => await signIn("google", {callbackUrl: "/admin/dashboard"})}>Signin</button>
      <button onClick={()=>signOut()}>Signout</button>
      {JSON.stringify(session)} */}
      under development
    </div>
  )
}

export default Admin
