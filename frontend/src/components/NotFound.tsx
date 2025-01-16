import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-9xl font-bold text-[#FFFF00]">404</h1>
            <h2 className="text-3xl font-semibold text-[#FFD700] mt-4">
                Page Not Found
            </h2>
            <p className="text-lg text-[#FFD700] mt-2">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-[#FFD700] text-black rounded-lg hover:bg-[#FFFF00] transition font-semibold"
            >
                Go to Homepage
            </Link>
        </div>
    );
};
