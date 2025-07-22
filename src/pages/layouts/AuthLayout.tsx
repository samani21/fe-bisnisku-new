'use client'
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Login Form */}
            {children}

            {/* Right side - Illustration */}
            <div className="hidden md:flex items-center justify-center h-screen p-4 bg-[#F4F7FA]">
                <img
                    src="/image/image_auth.png"
                    alt="Login Illustration"
                    className="w-full h-full object-contain rounded-lg"
                />
            </div>
        </div>
    );
}
