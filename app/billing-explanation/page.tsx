import Link from "next/link"

export default function BillingExplanation() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Understanding Your Bill and Optimizing Costs</h1>

          {/* Greeting */}
          <div className="text-gray-600 mb-6">Hello,</div>

          {/* Introduction */}
          <p className="text-gray-700 mb-8">
            Let&apos;s address your questions about MIUs and billing:
          </p>
          <p className="text-gray-700">
            I understand you&apos;re seeing unexpected charges for fast origin transfer and fast data transfer, even though you haven&apos;t used all your MIUs.
          </p>

          {/* Main Content */}
          <div className="space-y-8">
            {/* MIUs Explanation */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Why didn&apos;t my MIUs cover this bill?</h2>
              <p className="text-gray-700">
                I can see why this might be confusing. While your MIUs (Managed Infrastructure Units) cover compute
                resources, Fast Origin Transfer and Fast Data Transfer are separate charges based on actual bandwidth
                usage through our Edge Network. Think of it like a phone plan where your monthly fee covers calls, but
                data usage is billed separately.
              </p>
            </section>

            {/* Mitigation Strategies */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">How to mitigate future overage bills?</h2>
              <p className="text-gray-700 mb-4">
                With this usage pattern, here are some immediate steps we can take to help reduce these
                costs:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Implement caching strategies:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Use Cache-Control headers to keep frequently accessed content closer to your users</li>
                    <li>Enable stale-while-revalidate to serve cached content while updating in the background</li>
                    <li>Set appropriate max-age values to optimize cache duration</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Optimize data transfer:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Enable compression to reduce file sizes</li>
                    <li>Use Image Optimization to automatically serve the right image sizes</li>
                    <li>Implement Edge Caching to reduce origin requests</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section>
              <p className="text-gray-700">
                I&apos;d be happy to help you implement these changes. Would you
                like to schedule a call to walk through these optimizations together? We can look at your specific usage
                patterns and create a customized plan to prevent future unexpected charges.
              </p>
            </section>

            {/* Key Documentation Links */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Relevant documentation for reference:</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://vercel.com/docs/edge-network/features/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
                  >
                    📚 Documentation: Edge Network Features
                  </a>
                </li>
                <li>
                  <a
                    href="https://vercel.com/docs/edge-network/bandwidth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
                  >
                    📚 Documentation: Bandwidth Usage
                  </a>
                </li>
                <li>
                  <a
                    href="https://vercel.com/docs/concepts/payments-and-billing/usage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
                  >
                    📚 Documentation: Usage & Billing
                  </a>
                </li>
              </ul>
            </section>
          </div>

          {/* Signature */}
          <div className="mt-8 text-gray-600">
            Best regards,
            <br />
            Chris
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t">
            <Link href="/" className="text-blue-500 hover:text-blue-600">
              ← Back to all questions
            </Link>
            <Link href="/security-overview" className="text-blue-500 hover:text-blue-600">
              Next Question →
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

