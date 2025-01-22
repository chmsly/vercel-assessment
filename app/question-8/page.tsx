import Link from "next/link"

export default function Question8() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Time Allocation Framework</h1>

          {/* Content */}
          <div className="space-y-6 text-gray-700">
            <p>Providing a time allocation framework would have been helpful. For example:</p>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <span className="font-semibold">Thirty minutes</span> for initial setup
              </li>
              <li>
                <span className="font-semibold">One hour</span> for technical implementation
              </li>
              <li>
                <span className="font-semibold">Ninety minutes</span> for crafting responses
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t">
            <Link href="/" className="text-blue-500 hover:text-blue-600">
              ← Back to all questions
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

