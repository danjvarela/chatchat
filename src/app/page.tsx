'use client'

import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Loader2 } from 'lucide-react'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="flex flex-col justify-center items-center h-screen prose-cn">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    )
  }

  if (!session)
    return (
      <div className="flex flex-col justify-center items-center h-screen prose-cn">
        <div className="text-center">
          <h1>ChatChat</h1>
          <p className="large">
            Sign in with Google or Github to join the chat!
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-10">
          <Button onClick={() => signIn('google')}>Continue with Google</Button>
          <Button onClick={() => signIn('github')}>Continue with Github</Button>
        </div>
      </div>
    )

  return (
    <div className="flex flex-col justify-center items-center h-screen prose-cn">
      <p>You are signed in!</p>
      <Button variant="secondary" onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  )
}
