import Link from "next/link"

export default function EdgeFunctions() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Choosing Between Edge Functions, Serverless Functions, and Edge Middleware
          </h1>

          {/* Greeting */}
          <div className="text-gray-600 mb-6">Hey Trevor,</div>

          {/* Introduction */}
          <p className="text-gray-700 mb-8">
            Thanks for reaching out! Let me help you understand when to use each type of function for your winery's
            geolocation-based shipping restrictions. For your specific needs, here's what each function type is best
            used for:
          </p>

          {/* Main Content Sections */}
          <div className="space-y-8">
            {/* Edge Middleware Section */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-800">Edge Middleware (Recommended Primary Solution)</h2>
              <p className="text-gray-700">Best for your geolocation needs because:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Runs before the page loads</li>
                <li>Provides immediate access to visitor location data through request headers</li>
                <li>Can instantly redirect or block access based on shipping restrictions</li>
                <li>Zero cold starts and extremely low latency</li>
              </ul>
              <a
                href="https://vercel.com/docs/functions/edge-middleware"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
              >
                📚 Documentation: Edge Middleware
              </a>
            </section>

            {/* Edge Functions Section */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-800">Edge Functions</h2>
              <p className="text-gray-700">Use these for:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Generating dynamic pricing based on location</li>
                <li>Customizing product availability by region</li>
                <li>Quick regional compliance checks</li>
              </ul>
              <p className="text-gray-700 mt-2">
                Best for fast, lightweight operations that need to be close to your users
              </p>
              <a
                href="https://vercel.com/docs/functions/edge-functions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
              >
                📚 Documentation: Edge Functions
              </a>
            </section>

            {/* Serverless Functions Section */}
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-800">Serverless Functions</h2>
              <p className="text-gray-700">Best for:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Complex shipping calculations</li>
                <li>Integration with external shipping providers</li>
                <li>Database operations for order processing</li>
              </ul>
              <p className="text-gray-700 mt-2">Use when you need more computing power or longer execution times</p>
              <a
                href="https://vercel.com/docs/functions/serverless-functions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
              >
                📚 Documentation: Serverless Functions
              </a>
            </section>

            {/* Recommended Implementation Strategy */}
            <section className="p-6 rounded-lg mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended Implementation Strategy</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Use Edge Middleware to immediately check visitor location and shipping eligibility
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Store your shipping restriction rules in Edge Config for fast access
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Use Edge Functions for dynamic content and pricing updates
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  Implement Serverless Functions for complex shipping provider integrations
                </li>
              </ul>
              <a
                href="https://vercel.com/docs/storage/edge-config"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center mt-4"
              >
                📚 Documentation: Edge Config
              </a>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-gray-700"></div>

          {/* Signature */}
          <div className="mt-4 text-gray-600">
            Best regards,
            <br />
            Chris
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t">
            <Link href="/" className="text-blue-500 hover:text-blue-600">
              ← Back to all questions
            </Link>
            <Link href="/usage-review" className="text-blue-500 hover:text-blue-600">
              Next Question →
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

