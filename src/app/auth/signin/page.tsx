import { AuthForm } from '@/components/auth/auth-form'

export default function SignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Use demo@gdg.dev to sign in
          </p>
        </div>
        <div className="mt-8">
          <AuthForm />
        </div>
      </div>
    </div>
  )
}