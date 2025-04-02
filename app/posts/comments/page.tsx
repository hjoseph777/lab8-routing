import Link from 'next/link';

export default function Comments() {
  // Sample comments data
  const comments = [
    { id: 1, author: 'User1', text: 'Great post!', date: '2 days ago' },
    { id: 2, author: 'User2', text: 'Thanks for sharing this insight.', date: '1 day ago' },
    { id: 3, author: 'User3', text: 'I learned a lot from this content.', date: '5 hours ago' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-800">
      <header className="bg-white shadow-md py-4 px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">Comments</h1>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-3xl w-full bg-black shadow-lg rounded-lg p-10 text-white">
          <h2 className="text-3xl font-bold mb-6">Comments Section</h2>
          <ul className="space-y-4 mb-8">
            {comments.map(comment => (
              <li key={comment.id} className="border-l-4 border-gray-600 pl-4 py-2">
                <p className="font-semibold">{comment.author}</p>
                <p className="opacity-90">{comment.text}</p>
                <p className="text-xs opacity-75 mt-1">{comment.date}</p>
              </li>
            ))}
          </ul>
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
      </main>
      
      <footer className="bg-white py-6 px-8 shadow-inner">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2023 Routing Demo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
