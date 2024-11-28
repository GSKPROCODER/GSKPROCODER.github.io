import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block text-blue-600 dark:text-blue-400">
                GDG Gulzar Group
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Join our community of developers, designers, and tech enthusiasts.
              Learn, share, and grow together.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#events"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 md:px-10 md:py-4 md:text-lg"
                >
                  Upcoming Events
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
                <a
                  href="#join"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-gray-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700 md:px-10 md:py-4 md:text-lg"
                >
                  Join Community
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}