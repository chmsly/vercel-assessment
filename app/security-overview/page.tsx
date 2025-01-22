import Link from "next/link"

export default function SecurityOverview() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Vercel Security Overview for Enterprise Deployment</h1>

          {/* Greeting */}
          <div className="text-gray-600 mb-6">Hello Ty,</div>

          {/* Introduction */}
          <p className="text-gray-700 mb-8">
            Here is a comprehensive overview of Vercel&apos;s security documentation and resources for your Enterprise
            deployment:
          </p>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Security Infrastructure */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Security Infrastructure</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Security Overview and Compliance</li>
                <li>Encryption in Transit and at Rest</li>
                <li>Network Security Controls</li>
                <li>Infrastructure Security</li>
              </ul>
            </section>

            {/* Enterprise Security Features */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Enterprise Security Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>SAML SSO Implementation</li>
                <li>SCIM Provisioning</li>
                <li>Audit Logs</li>
                <li>Role-Based Access Control (RBAC)</li>
              </ul>
            </section>

            {/* Secure Compute Features */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Secure Compute Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Network Isolation</li>
                <li>Private Source Code</li>
                <li>Dedicated Infrastructure</li>
              </ul>
            </section>

            {/* Key Documentation Links */}
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Vercel Security Features</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://vercel.com/docs/security"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
                  >
                    📚 Documentation: Security Overview
                  </a>
                </li>
                <li>
                  <a
                    href="https://vercel.com/docs/enterprise"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
                  >
                    📚 Documentation: Enterprise Features
                  </a>
                </li>
                <li>
                  <a
                    href="https://vercel.com/docs/security/compliance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
                  >
                    📚 Documentation: Compliance
                  </a>
                </li>
                <li>
                  <a
                    href="https://vercel.com/docs/security/enterprise/network-security"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center"
                  >
                    📚 Documentation: Network Security
                  </a>
                </li>
              </ul>
            </section>
          </div>

          {/* Video Recap */}
          <div className="mt-8">
            <p className="text-gray-700">Below is a quick video recapping these features:</p>
            {/* Note: Replace 'VIDEO_ID' with the actual YouTube video ID */}
            <div className="aspect-w-16 aspect-h-9 mt-4">
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-gray-700">
            Would you like to schedule a security architecture review to discuss these features in detail?
          </div>

          {/* Signature */}
          <div className="mt-4 text-gray-600">
            Best Regards,
            <br />
            Chris
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t">
            <Link href="/" className="text-blue-500 hover:text-blue-600">
              ← Back to all questions
            </Link>
            <Link href="/question-8" className="text-blue-500 hover:text-blue-600">
              Next Question →
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

