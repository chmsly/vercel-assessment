import Link from "next/link"

export default function Question8() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Exercise Feedback</h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Suggested Improvements</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Time Management</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Consider breaking the exercise into smaller, timed segments</li>
                    <li>Provide estimated time for each question</li>
                    <li>Allow partial submissions for time-constrained candidates</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Technical Setup</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Include a pre-configured template with basic routing</li>
                    <li>Provide TypeScript types for common components</li>
                    <li>Add example responses for reference</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Documentation</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Link directly to relevant Vercel documentation for each question</li>
                    <li>Include more real-world scenarios and examples</li>
                    <li>Add guidelines for tone and communication style</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Additional Suggestions</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Include more diverse customer scenarios</li>
                <li>Add interactive components to demonstrate technical skills</li>
                <li>Incorporate accessibility requirements</li>
                <li>Add section for handling customer escalations</li>
              </ul>
            </section>
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

