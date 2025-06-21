import Link from "next/link"

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to Re-Edit</h1>
        <p className="text-lg mb-8">Your Next.js app is ready!</p>
        <Link href="/docs/123" className="text-blue-500 hover:underline">
            Go to Editor
        </Link>
        </div>
    );
}

export default HomePage;