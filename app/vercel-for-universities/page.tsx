import Link from "next/link"

export default function VercelForUniversities() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Vercel for Universities: Enhancing Your Search Engine Visibility
          </h1>

          {/* Greeting */}
          <div className="text-gray-600 mb-6">Hello Clara,</div>

          {/* Content */}
          <div className="space-y-4 text-gray-700">
            <p>
              Vercel is a platform that helps universities achieve better visibility in search engines and deliver
              faster loading websites. When your marketing team updates content, Vercel automatically optimizes it to
              rank better in search results and load instantly for prospective students around the world. We handle all
              the technical details that make your university&apos;s website perform well in Google searches, like fast page
              loading and mobile optimization, so your team can focus on creating great content.
            </p>
            <p className="mt-4">I&apos;d be happy to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Show you our analytics dashboard where you can track your website&apos;s search performance</li>
              <li>Demonstrate how our platform automatically optimizes your content for search engines</li>
              <li>Walk through examples of how other organizations have improved their search rankings</li>
            </ul>
            <p className="mt-4">
              Which aspects of search engine optimization are most important for your university&apos;s marketing goals?
            </p>
          </div>

          {/* Signature */}
          <div className="mt-8 text-gray-600">
            Best Regards,
            <br />
            Chris
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t">
            <Link href="/" className="text-blue-500 hover:text-blue-600">
              ← Back to all questions
            </Link>
            <Link href="/performance-and-cost" className="text-blue-500 hover:text-blue-600">
              Next Question →
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

