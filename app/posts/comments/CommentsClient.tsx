'use client';

import Link from 'next/link';

export default function CommentsClient() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800">
      <header className="bg-white shadow-md py-4 px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">Comments</h1>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-2xl mx-auto bg-black shadow-lg rounded-lg p-10 text-white">
          <h1 className="text-3xl font-bold mb-4">Comments Section</h1>
          <p className="mb-4">
            This is the comments section for all posts.
          </p>
          <div className="mt-6">
            <Link 
              href="/"
              className="inline-flex items-center text-white hover:text-blue-100"
            >
              <svg
                className="mr-1 h-5 w-5 transform rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-white py-6 px-8 shadow-inner">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2023 Routing Demo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
