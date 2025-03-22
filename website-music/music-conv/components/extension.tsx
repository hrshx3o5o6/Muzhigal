import Link from 'next/link'

export function Extension() {
  return (
    <div className="flex justify-center">
      <Link
        href="https://chrome.google.com/webstore"
        target="_blank"
        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-200 transform hover:scale-105"
      >
        Click here to get the extension now!
      </Link>
    </div>
  )
}