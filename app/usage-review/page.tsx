import Link from "next/link"

export default function UsageReview() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Vercel Usage Review and Support</h1>

          {/* Greeting */}
          <div className="text-gray-600 mb-6">Hello Alex,</div>

          {/* Content */}
          <div className="space-y-4 text-gray-700">
            <p className="text-gray-700">
              I&apos;m reaching out as I&apos;ve noticed some recent changes in your team&apos;s Vercel usage that I&apos;d like to discuss...
            </p>
            <p>
              I&apos;ve also noticed some build errors related to your Cloudflare configuration that we should address to
              ensure your marketing pages are performing optimally.
            </p>
            <p>Given these changes, I&apos;d love to schedule a brief call to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Review your current setup and address any technical challenges</li>
              <li>Share best practices for Cloudflare integration with Vercel</li>
              <li>Connect any new team members with our platform resources</li>
              <li>Discuss how we can better support your marketing team&apos;s goals</li>
            </ul>
            <p>
              Being your only developer, I know your time is valuable. I&apos;m happy to help address the Cloudflare
              integration challenges.
            </p>
            <p>
              Would you have 30 minutes this week for a quick discussion? We want to ensure you&apos;re getting the most
              value from your Vercel investment.
            </p>
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
            <Link href="/vercel-for-universities" className="text-blue-500 hover:text-blue-600">
              Next Question →
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

