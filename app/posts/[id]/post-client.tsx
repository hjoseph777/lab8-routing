'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function PostClient() {
  // Extract the id parameter correctly
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Post ID: {id}</h1>
        <p className="mb-4">
          This is the content for post with ID: {id}
        </p>
        <div className="mt-6 flex gap-4">
          <Link 
            href="/posts/comments" 
            className="text-blue-600 hover:underline"
          >
            View Comments
          </Link>
          <Link 
            href="/" 
            className="text-blue-600 hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}