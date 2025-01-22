import Link from "next/link"

export default function EdgeFunctions() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Edge Functions vs Serverless Functions</h1>

          <div className="text-gray-600 mb-6">Hi Trevor,</div>

          <div className="space-y-4 text-gray-700">
            <p className="text-gray-700">
              I&apos;m reaching out to help clarify when to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel,
              specifically for your wine shipping geolocation requirements.
            </p>

            <div className="space-y-2">
              <h2 className="font-semibold">Edge Functions - Best for Your Use Case</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Run closest to your users (150+ global locations)</li>
                <li>Perfect for geolocation-based decisions</li>
                <li>Ultra-low latency responses</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Implementation Example</h3>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`// pages/api/check-shipping.ts
import { geolocation } from '@vercel/edge';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  const { country } = geolocation(req);
  const canShipWine = !['US-UT', 'US-MS'].includes(country);
  
  return new Response(JSON.stringify({ canShipWine }));
}`}
              </pre>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold">When to Use Each Option:</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Edge Functions:</h3>
                  <ul className="list-disc pl-5">
                    <li>Geolocation checks (your case)</li>
                    <li>A/B testing</li>
                    <li>Real-time personalization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Serverless Functions:</h3>
                  <ul className="list-disc pl-5">
                    <li>Complex database operations</li>
                    <li>Third-party API integrations</li>
                    <li>Heavy computational tasks</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold">Edge Middleware:</h3>
                  <ul className="list-disc pl-5">
                    <li>Request/response modifications</li>
                    <li>Authentication</li>
                    <li>Bot protection</li>
                  </ul>
                </div>
              </div>
            </div>

            <p>Would you like to schedule a call to discuss implementing this for your specific use case?</p>
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
            <Link href="/usage-review" className="text-blue-500 hover:text-blue-600">
              Next Question →
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

