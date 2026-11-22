import Link from 'next/link';
import { getDictionary } from './dictionaries';

export default async function NotFound() {
  const dict = await getDictionary();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-purple-400 mb-4">{dict.notFound.title}</p>
        <h1 className="text-3xl font-bold text-white mb-4">{dict.notFound.heading}</h1>
        <p className="text-gray-400 mb-8">{dict.notFound.description}</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          {dict.notFound.goHome}
        </Link>
      </div>
    </div>
  );
}
