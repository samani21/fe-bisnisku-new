'use client'
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="bg-blue-100 md:bg-gray-100 min-h-screen flex md:items-center justify-center md:px-4">
                <div className="max-w-5xl w-full bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">

                    {/* Ilustrasi */}
                    <div className="md:flex items-center justify-center bg-blue-100 p-6">
                        <img
                            src="/image/auth.png"
                            alt="Ilustrasi Login"
                            width={400}
                            height={400}
                            className="object-cover rounded-xl"
                        />
                    </div>

                    {/* Form Login */}
                    {children}
                </div>
            </div>
        </>
    );
}
