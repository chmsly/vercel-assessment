import Link from "next/link"

export default function VercelIntro() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Vercel Take-Home Exercise Overview
        </h1>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Exercise Goals</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Read and comprehend technical documentation</li>
              <li>Manipulate a Next.js template and deploy it to Vercel</li>
              <li>Explain technical concepts in writing to Enterprise customers</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Setup Requirements</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>GitHub, GitLab, or Bitbucket account</li>
              <li>Code editor</li>
              <li>Node.js and Git installed locally</li>
              <li>Vercel Hobby tier (free) account</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Important Notes</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use App Router (Next.js 13+) or Pages Router if needed</li>
              <li>JSX/TSX not mandatory - use what works best</li>
              <li>Focus is on problem-solving and communication, not visual design</li>
              <li>Document your research and decision-making process</li>
              <li>Aim to complete within 3-4 hours</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Evaluation Criteria</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Problem-solving approach</li>
              <li>Written communication and tone</li>
              <li>Understanding of Customer Success role</li>
              <li>Ability to navigate and implement documentation</li>
            </ul>
          </div>

          {/* Back Link */}
          <div className="mt-6">
            <Link href="/" className="text-blue-500 hover:underline">
              ← Back to all sections
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 