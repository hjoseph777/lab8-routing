import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <header className="bg-white shadow-md py-4 px-8">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={30}
            priority
          />
          <h1 className="text-2xl font-bold text-gray-800">Routing Demo</h1>
        </div>
      </header>
      
      <main className="flex-grow py-12 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-black shadow-lg rounded-lg p-8 text-white">
            <h2 className="text-xl font-bold mb-4">Navigation Examples</h2>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/posts/1" 
                  className="inline-flex items-center text-white hover:text-blue-100 font-medium"
                >
                  View Post #1
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="/posts/2" 
                  className="inline-flex items-center text-white hover:text-blue-100 font-medium"
                >
                  View Post #2
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link 
                  href="/posts/comments" 
                  className="inline-flex items-center text-white hover:text-blue-100 font-medium"
                >
                  View Comments
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <footer className="bg-white py-6 px-8 shadow-inner">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2023 Routing Demo. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link 
              href="https://nextjs.org/docs" 
              className="hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </Link>
            <span>|</span>
            <Link 
              href="https://github.com/vercel/next.js" 
              className="hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
