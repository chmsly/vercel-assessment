import Link from "next/link"

export default function ReactVsNextjs() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">React vs Next.js</h1>
          <div className="text-gray-600 mb-6">Hello Christy,</div>
          <p className="text-gray-700 mb-8">
            Great question, let me explain the key difference between React and Next.js, specifically focusing on core
            web vitals, SEO and conversion rates.
          </p>
          <div className="space-y-8">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-800">React</h2>
              <p className="text-gray-700">
                React is a JavaScript library for building user interfaces. By itself, React:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Requires setup for routing</li>
                <li>Runs primarily on the client side</li>
                <li>Needs additional configuration for SEO</li>
                <li>Requires manual optimization for performance</li>
              </ul>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-800">Next.js</h2>
              <p className="text-gray-700">Next.js builds on top of React by adding:</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">1. Built-in performance features</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Server-side rendering</li>
                    <li>Client-side routing</li>
                    <li>Automatic code splitting</li>
                    <li>Built-in image optimization</li>
                  </ul>
                  <a
                    href="https://nextjs.org/docs/getting-started/introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center mt-2"
                  >
                    📚 Source: Next.js Introduction
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">2. SEO optimization</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Automatic metadata support</li>
                    <li>Server rendering for search engines</li>
                    <li>Easy meta tag management</li>
                  </ul>
                  <a
                    href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center mt-2"
                  >
                    📚 Source: Next.js Metadata Optimization
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">3. Developer Experience</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>File-based routing</li>
                    <li>API Routes</li>
                    <li>Hot code reloading</li>
                  </ul>
                  <a
                    href="https://nextjs.org/docs/app/building-your-application/routing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center mt-2"
                  >
                    📚 Source: Next.js Routing
                  </a>
                </div>
              </div>
            </section>
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-800">Benefits for Your Marketing Team</h2>
              <p className="text-gray-700">These features help your marketing team achieve:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Better search engine visibility</li>
                <li>Faster page loads</li>
                <li>Improved performance metrics</li>
              </ul>
            </section>
          </div>
          {/* Signature */}
          <div className="mt-8 text-gray-600">
            Best Regards,
            <br />
            Chris
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 pt-4 border-t">
          <Link href="/" className="text-blue-500 hover:text-blue-600">
            ← Back to all questions
          </Link>
          <Link href="/edge-functions" className="text-blue-500 hover:text-blue-600">
            Next Question →
          </Link>
        </div>
      </div>
    </main>
  )
}

