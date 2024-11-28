export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Welcome to <span className="text-blue-600">GDG Gulzar Group</span>
        </h1>
        <p className="mb-8 text-gray-600">
          Join our community of developers and tech enthusiasts
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Join Now
          </button>
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}