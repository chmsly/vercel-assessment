import Link from "next/link"

export default function PerformanceAndCost() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Performance Optimization and Cost Management</h1>

          <div className="text-gray-600 mb-6">Hey Travis,</div>

          <div className="space-y-4 text-gray-700">
            <p>I'm reaching out regarding your Vercel usage, as our analytics show two areas we should address:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>A recent increase in data transfer costs from $900 to $2,100</li>
              <li>Core Web Vitals performance issues, specifically with Largest Contentful Paint (LCP)</li>
            </ul>

            <p>
              For the LCP score, our Speed Insights indicate this is often caused by slow-loading main content (images,
              background images, or large text blocks). Here are some solutions from our docs:
            </p>

            <div className="space-y-2">
              <h2 className="font-semibold">Immediate Actions to Improve LCP:</h2>
              <p>Implement the next/image component for automatic:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Image optimization</li>
                <li>WebP conversion</li>
                <li>Immediate caching</li>
              </ul>
              <p>Enable Edge Network caching for faster content delivery</p>
            </div>

            <p>To address the increased data transfer costs:</p>
            <div className="space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>Implement cache-control headers</li>
                <li>Optimize asset delivery</li>
                <li>Configure automatic image optimization</li>
              </ul>
            </div>

            <p>Given you're in Singapore, would you be available Thursday at 9:00 AM SGT (your time) to review:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Current performance metrics</li>
              <li>Implementation of image optimization</li>
              <li>Caching strategy updates</li>
            </ul>

            <p>Reference documentation to review before our call:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a
                  href="https://vercel.com/docs/speed-insights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
                >
                  📚 Documentation: Speed Insights
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com/docs/image-optimization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
                >
                  📚 Documentation: Image Optimization
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com/docs/edge-network/caching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
                >
                  📚 Documentation: Edge Caching
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-gray-600">
            Best regards,
            <br />
            Chris
          </div>

          <div className="flex justify-between items-center mt-8 pt-4 border-t">
            <Link href="/" className="text-blue-500 hover:text-blue-600">
              ← Back to all questions
            </Link>
            <Link href="/billing-explanation" className="text-blue-500 hover:text-blue-600">
              Next Question →
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

