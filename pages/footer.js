import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <Link href="/about" className="text-gray-300 hover:text-white">About
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact
          </Link>
          
          <Link href="/archives" className="text-gray-300 hover:text-white">Archives
          </Link>
          
          <Link href="/blog" className="text-gray-300 hover:text-white">Blog
          </Link>
          
          <Link href="/terms" className="text-gray-300 hover:text-white">Terms
          </Link>
          
          <Link href="/content-policy" className="text-gray-300 hover:text-white">Content Policy
          </Link>
        
          <Link href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
