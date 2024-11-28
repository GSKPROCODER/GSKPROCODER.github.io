'use client'

import { useAuth } from '@/context/auth-context'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function AuthButton() {
  const { isAuthenticated, user, logout } = useAuth()

  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700 dark:text-gray-300">
          {user.name}
        </span>
        <Button
          variant="outline"
          onClick={logout}
          className="bg-white text-blue-600 hover:bg-gray-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
        >
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <Link href="/auth/signin">
      <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
        Sign In
      </Button>
    </Link>
  )
}