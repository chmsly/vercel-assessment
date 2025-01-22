import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const questions = [
    { text: "React vs Next.js", href: "/react-vs-nextjs" },
    { text: "Edge Functions", href: "/edge-functions" },
    { text: "Usage Review", href: "/usage-review" },
    { text: "Vercel for Universities", href: "/vercel-for-universities" },
    { text: "Performance and Cost", href: "/performance-and-cost" },
    { text: "Billing Explanation", href: "/billing-explanation" },
    { text: "Security Overview", href: "/security-overview" },
    { text: "Question 8", href: "/question-8" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-white">
      <div className="flex flex-col items-center flex-grow justify-center">
        <Image
          src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
          alt="Next.js Logo"
          width={1200}
          height={247}
          priority
        />
      </div>

      <div className="w-full flex flex-wrap justify-between gap-y-6 mb-8">
        {questions.map((question, index) => (
          <div key={index} className="text-base w-[22%]">
            <Link href={question.href} className="font-semibold hover:underline">
              {question.text} →
            </Link>
          </div>
        ))}
      </div>
      <footer className="h-8"></footer>
    </main>
  )
}

