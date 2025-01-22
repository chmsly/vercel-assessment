import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const questions = [
    { text: "QUESTION 1", href: "/react-vs-nextjs" },
    { text: "QUESTION 2", href: "/edge-functions" },
    { text: "QUESTION 3", href: "/usage-review" },
    { text: "QUESTION 4", href: "/vercel-for-universities" },
    { text: "QUESTION 5", href: "/performance-and-cost" },
    { text: "QUESTION 6", href: "/billing-explanation" },
    { text: "QUESTION 7", href: "/security-overview" },
    { text: "QUESTION 8", href: "/question-8" },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-white">
      <div className="flex flex-col items-center flex-grow justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pZL81lTC5ryrtMjrrLPxOqVBZAha8C.png"
          alt="Next.js Logo"
          width={180}
          height={37}
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

