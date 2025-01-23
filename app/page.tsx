import Link from "next/link"

const questions = [
  { href: "/vercel-intro", text: "1. Exercise Overview" },
  { href: "/edge-functions", text: "2. Edge Functions vs Serverless" },
  { href: "/usage-review", text: "3. Usage Review" },
  { href: "/vercel-for-universities", text: "4. Vercel for Universities" },
  { href: "/performance-and-cost", text: "5. Performance and Cost" },
  { href: "/billing-explanation", text: "6. Billing Explanation" },
  { href: "/security-overview", text: "7. Security Overview" },
  { href: "/question-8", text: "8. Exercise Feedback" }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Vercel Take-Home Exercise
          </h1>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions.map((question, index) => (
                <Link
                  key={index}
                  href={question.href}
                  className="text-blue-500 hover:text-blue-600 p-4 rounded-lg border border-gray-200"
                >
                  {question.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

